"use client";

import { useState } from "react";

const TERMS_URL = "https://www.saenzglobal.com/terms-of-service";
const PRIVACY_URL = "https://www.saenzglobal.com/privacy-policy";

const CONSENT_TEXT =
  "I agree to receive SMS messages from Saenz Global for service updates, onboarding coordination, appointment confirmations, and operational notifications. No marketing messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase or services. See Terms of Service and Privacy Policy. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.";

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
      const response = await fetch("/api/sms-consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone,
          consent,
          consentText: CONSENT_TEXT,
          termsUrl: TERMS_URL,
          privacyUrl: PRIVACY_URL,
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
            I agree to receive SMS messages from Saenz Global for service updates, onboarding coordination, appointment confirmations, and operational notifications. <strong>No marketing messages.</strong>
          </span>
          <span className="consent-label-details">
            Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase or services. See <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy</a>. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
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
