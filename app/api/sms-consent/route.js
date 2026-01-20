import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

  const phone = String(body.phone || "").trim();
  const phoneSanitized = phone.replace(/[^\d+]/g, "");
  const consent = body.consent === true;
  const consentText = String(body.consentText || "").trim();
  const pageUrl = String(
    body.pageUrl || request.headers.get("referer") || ""
  ).trim();
  const termsUrl = String(body.termsUrl || "").trim();
  const privacyUrl = String(body.privacyUrl || "").trim();

  if (!phone || phoneSanitized.length < 7) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Consent checkbox must be accepted." },
      { status: 400 }
    );
  }

  if (!consentText) {
    return NextResponse.json(
      { error: "Consent language is missing." },
      { status: 400 }
    );
  }

  const record = {
    timestamp: new Date().toISOString(),
    phone,
    phoneSanitized,
    consent: true,
    consentText,
    consentVersion: "v1",
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
