"use client";

import { useState } from "react";
import {
  BUSINESS_NAME,
  CARRIER_LIABILITY_DISCLOSURE,
  CONSENT_DISCLOSURE,
  MESSAGE_FREQUENCY_DISCLOSURE,
  MESSAGE_RATES_DISCLOSURE,
  NON_SHARING_DISCLOSURE,
  PRIVACY_PATH,
  SMS_PROGRAM_USE_CASES_DESCRIPTION,
  TERMS_PATH,
  getAbsoluteProgramUrl
} from "../../lib/smsProgram";

export default function ConsentForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") || "").trim();
    const consent = formData.get("consent") === "on";

    if (!phone || !consent) {
      setError("Please provide a phone number and accept the consent checkbox.");
      setStatus("idle");
      return;
    }

    try {
      const origin = window.location.origin;

      const response = await fetch("/api/sms-consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone,
          consent,
          consentText: CONSENT_DISCLOSURE,
          termsUrl: getAbsoluteProgramUrl(origin, TERMS_PATH),
          privacyUrl: getAbsoluteProgramUrl(origin, PRIVACY_PATH),
          pageUrl: window.location.href
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit consent.");
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
        <label htmlFor="phone">Mobile phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          required
        />
      </div>

      <div className="form-field form-field--checkbox">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">
          <span className="consent-label-main">
            I agree to receive SMS messages from {BUSINESS_NAME} for{" "}
            {SMS_PROGRAM_USE_CASES_DESCRIPTION}.{" "}
            <strong>No marketing messages.</strong>
          </span>
          <span className="consent-label-details">
            {MESSAGE_FREQUENCY_DISCLOSURE} {MESSAGE_RATES_DISCLOSURE} Reply STOP
            to opt out, HELP for help. {CARRIER_LIABILITY_DISCLOSURE} Consent is
            not a condition of purchase or services. See{" "}
            <a href={TERMS_PATH} target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href={PRIVACY_PATH} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            . {NON_SHARING_DISCLOSURE}
          </span>
        </label>
      </div>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit consent"}
      </button>

      {status === "success" ? (
        <div className="form-success" role="status">
          Consent received. You will get a confirmation text message shortly.
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
