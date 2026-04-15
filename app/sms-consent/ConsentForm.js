"use client";

import { useState } from "react";
import {
  BUSINESS_NAME,
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

    const form = event.currentTarget;
    const formData = new FormData(form);
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

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="consent-success" role="status" aria-live="polite">
        <div className="consent-success__icon" aria-hidden="true">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="consent-success__title">You&rsquo;re subscribed!</h3>
        <p className="consent-success__subtitle">
          Thanks for opting in to {BUSINESS_NAME} SMS.
        </p>
        <button
          type="button"
          className="consent-success__button"
          onClick={() => {
            setStatus("idle");
            setError("");
          }}
        >
          Sign up another number
        </button>
        <p className="consent-success__hint">
          Message and data rates may apply.
        </p>
      </div>
    );
  }

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

      {error ? (
        <div className="form-error" role="alert">
          {error}
        </div>
      ) : null}
    </form>
  );
}
