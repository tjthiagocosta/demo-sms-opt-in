"use client";

import { useState } from "react";
import {
  MARKETING_CONSENT_DISCLOSURE,
  PRIVACY_PATH,
  TERMS_PATH,
  TRANSACTIONAL_CONSENT_DISCLOSURE,
  getAbsoluteProgramUrl
} from "../../lib/smsProgram";

const CONSENT_WEBHOOK_URL =
  "https://hook.us2.make.com/neicvlbbkyjlfe2dvbqepu84v4wvxeas";

export default function ConsentForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const marketingConsent = formData.get("marketingConsent") === "on";
    const transactionalConsent = formData.get("transactionalConsent") === "on";

    if (!name) {
      setError("Please enter your full name.");
      setStatus("idle");
      return;
    }

    try {
      const origin = window.location.origin;

      const response = await fetch(CONSENT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          marketingConsent,
          transactionalConsent,
          marketingConsentText: MARKETING_CONSENT_DISCLOSURE,
          transactionalConsentText: TRANSACTIONAL_CONSENT_DISCLOSURE,
          termsUrl: getAbsoluteProgramUrl(origin, TERMS_PATH),
          privacyUrl: getAbsoluteProgramUrl(origin, PRIVACY_PATH),
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error("Unable to submit consent. Please try again.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err.message);
    }
  };

  return (
    <form className="consent-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">
          Phone Number{" "}
          <span className="form-field__hint">*required for opt-in</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="form-field form-field--checkbox">
        <input id="marketingConsent" name="marketingConsent" type="checkbox" />
        <label htmlFor="marketingConsent">{MARKETING_CONSENT_DISCLOSURE}</label>
      </div>

      <div className="form-field form-field--checkbox">
        <input
          id="transactionalConsent"
          name="transactionalConsent"
          type="checkbox"
        />
        <label htmlFor="transactionalConsent">
          {TRANSACTIONAL_CONSENT_DISCLOSURE}
        </label>
      </div>

      <div className="consent-form__footer-links">
        <a href={PRIVACY_PATH}>Privacy Policy</a>
        <a href={TERMS_PATH}>Terms of Service</a>
      </div>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>

      {status === "success" ? (
        <div className="form-success" role="status">
          Thanks! Your preferences have been recorded.
        </div>
      ) : null}

      {error ? (
        <div className="form-error" role="alert">
          {error}
        </div>
      ) : null}
    </form>
  );
}
