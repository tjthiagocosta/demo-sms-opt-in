import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  CONSENT_PATH,
  CONSENT_VERSION,
  PRIVACY_PATH,
  TERMS_PATH,
  getAbsoluteProgramUrl
} from "../../../lib/smsProgram";

export const runtime = "nodejs";

const CONSENT_FILE = path.join(process.cwd(), "data", "consents.jsonl");

const getClientIp = (headers) => {
  const forwardedFor =
    headers.get("x-forwarded-for") ||
    headers.get("x-vercel-forwarded-for") ||
    headers.get("x-real-ip");

  if (!forwardedFor) {
    return "unknown";
  }

  return forwardedFor.split(",")[0].trim();
};

const normalizeProgramUrl = (value, origin, fallbackPath) => {
  const candidate = String(value || "").trim();

  try {
    return new URL(candidate || fallbackPath, origin).toString();
  } catch (error) {
    return getAbsoluteProgramUrl(origin, fallbackPath);
  }
};

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const phoneSanitized = phone.replace(/[^\d+]/g, "");
  const marketingConsent = body.marketingConsent === true;
  const transactionalConsent = body.transactionalConsent === true;
  const marketingConsentText = String(body.marketingConsentText || "").trim();
  const transactionalConsentText = String(
    body.transactionalConsentText || ""
  ).trim();
  const requestOrigin = new URL(request.url).origin;
  const pageUrl = String(
    body.pageUrl ||
      request.headers.get("referer") ||
      getAbsoluteProgramUrl(requestOrigin, CONSENT_PATH)
  ).trim();
  const termsUrl = normalizeProgramUrl(body.termsUrl, requestOrigin, TERMS_PATH);
  const privacyUrl = normalizeProgramUrl(
    body.privacyUrl,
    requestOrigin,
    PRIVACY_PATH
  );

  if (!name) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 }
    );
  }

  if (phone && phoneSanitized.length < 7) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  if (!marketingConsentText || !transactionalConsentText) {
    return NextResponse.json(
      { error: "Consent language is missing." },
      { status: 400 }
    );
  }

  const record = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    phoneSanitized,
    marketingConsent,
    transactionalConsent,
    marketingConsentText,
    transactionalConsentText,
    consentVersion: CONSENT_VERSION,
    pageUrl,
    termsUrl,
    privacyUrl,
    ipAddress: getClientIp(request.headers),
    userAgent: request.headers.get("user-agent") || "unknown"
  };

  try {
    await fs.mkdir(path.dirname(CONSENT_FILE), { recursive: true });
    await fs.appendFile(CONSENT_FILE, `${JSON.stringify(record)}\n`, "utf8");
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to store consent right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
