import ConsentForm from "./ConsentForm";
import {
  BUSINESS_NAME,
  CARRIER_LIABILITY_DISCLOSURE,
  MESSAGE_FREQUENCY_DISCLOSURE,
  MESSAGE_RATES_DISCLOSURE,
  PRIVACY_PATH,
  SMS_PROGRAM_USE_CASES_DESCRIPTION,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: `${BUSINESS_NAME} SMS Program Consent`,
  description:
    `Opt in to receive ${BUSINESS_NAME} ${SMS_PROGRAM_USE_CASES_DESCRIPTION} via SMS.`,
  robots: {
    index: true,
    follow: true
  }
};

export default function SmsConsentPage() {
  return (
    <main className="page">
      <header className="hero">
        <img
          className="hero__logo"
          src="https://cdn.prod.website-files.com/6493173e3cea69ef8852e65e/6493173e3cea69ef8852eda1_63862ed4a97e2bcb7468c5f3_Artboard%20(1).svg"
          alt={`${BUSINESS_NAME} logo`}
        />
        <h1>Sign up for {BUSINESS_NAME} SMS</h1>
        <p className="lede">
          Get {SMS_PROGRAM_USE_CASES_DESCRIPTION} from {BUSINESS_NAME} by
          text.
        </p>

        <div className="hero__form">
          <h2>Choose your SMS preferences</h2>
          <p>
            Check the boxes below to opt in to Marketing SMS, Transactional
            SMS, or both from {BUSINESS_NAME}. You can reply STOP at any
            time to opt out.
          </p>
          <ConsentForm />
        </div>

        <div className="detail-card">
          <h3>Program details</h3>
          <ul className="detail-list">
            <li>
              <strong>Brand:</strong> {BUSINESS_NAME}
            </li>
            <li>
              <strong>Marketing SMS:</strong> Promotional offers,
              announcements, and product updates from {BUSINESS_NAME}.
              Opt in via the Marketing SMS checkbox.
            </li>
            <li>
              <strong>Transactional SMS:</strong> Account notifications
              and two-factor authentication (2FA) codes. Opt in via the
              Transactional SMS checkbox.
            </li>
            <li>
              <strong>Message frequency:</strong> Low volume.{" "}
              {MESSAGE_FREQUENCY_DISCLOSURE}
            </li>
            <li>
              <strong>Rates:</strong> {MESSAGE_RATES_DISCLOSURE}
            </li>
            <li>
              <strong>Opt-out:</strong> Reply STOP at any time to stop
              receiving messages.
            </li>
            <li>
              <strong>Help:</strong> Reply HELP for assistance.
            </li>
            <li>
              <strong>Carrier liability:</strong> {CARRIER_LIABILITY_DISCLOSURE}
            </li>
            <li className="detail-list-divider">
              <strong>Support:</strong> Email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
              or call{" "}
              <a href={`tel:${SUPPORT_PHONE_LINK}`}>
                {SUPPORT_PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

      </header>

      <footer className="footer">
        <p>
          {BUSINESS_NAME} SMS Messaging Program Terms apply. Review our SMS{" "}
          <a href={TERMS_PATH} target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href={PRIVACY_PATH} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          for full details.
        </p>
      </footer>
    </main>
  );
}
