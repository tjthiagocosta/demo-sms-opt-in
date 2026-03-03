import ConsentForm from "./ConsentForm";
import {
  BUSINESS_NAME,
  CARRIER_LIABILITY_DISCLOSURE,
  CONFIRMATION_SMS_PREVIEW,
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
        <div className="hero__content">
          <span className="eyebrow">SMS opt-in disclosure</span>
          <h1>Stay Connected with Service Updates</h1>
          <p className="lede">
            Receive important {SMS_PROGRAM_USE_CASES_DESCRIPTION} from{" "}
            {BUSINESS_NAME} via SMS. No marketing messages, only operational
            updates tied to your active service relationship.
          </p>

          <div className="detail-card">
            <h3>Program details</h3>
            <ul className="detail-list">
              <li>
                <strong>Sender:</strong> {BUSINESS_NAME}
              </li>
              <li>
                <strong>Message purpose:</strong>{" "}
                {SMS_PROGRAM_USE_CASES_DESCRIPTION} for current clients and
                authorized service contacts only.
              </li>
              <li>
                <strong>Message frequency:</strong>{" "}
                {MESSAGE_FREQUENCY_DISCLOSURE}
              </li>
              <li>
                <strong>Rates:</strong> {MESSAGE_RATES_DISCLOSURE}
              </li>
              <li>
                <strong>Opt-out:</strong> Reply STOP to opt out.
              </li>
              <li>
                <strong>Help:</strong> Reply HELP for help.
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

          <div className="link-row">
            <a href={TERMS_PATH} target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
            <a href={PRIVACY_PATH} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="hero__form">
          <span className="badge">SMS Consent Form</span>
          <h2>Opt in to receive service updates</h2>
          <p>
            Complete the form below to opt in. After you opt in, we'll send a confirmation text so you know you're subscribed.
          </p>
          <ConsentForm />
        </div>
      </header>

      <section className="section-grid">
        <div className="info-card">
          <h2>What happens after you opt in</h2>
          <p>
            After you opt in, we'll send a confirmation SMS so you know you're subscribed.
          </p>
          <div className="sms-preview">{CONFIRMATION_SMS_PREVIEW}</div>
          <p>
            Keep this message for your records. You can opt out anytime by replying STOP.
          </p>
        </div>

        <div className="info-card">
          <h2>What you'll receive</h2>
          <ul className="small-list">
            <li>Onboarding coordination</li>
            <li>Appointment confirmations and reminders</li>
            <li>Service notifications and operational updates</li>
            <li>
              <strong>No marketing messages</strong>
            </li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Your privacy &amp; consent</h2>
          <ul className="small-list">
            <li>We only send messages to current clients</li>
            <li>We do not use purchased lists</li>
            <li>Your consent applies only to {BUSINESS_NAME}</li>
            <li>Consent is not a condition of purchase or services</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>
          {BUSINESS_NAME} SMS Messaging Program Terms apply. Use the links
          above for the full SMS Terms of Service and SMS Privacy Policy.
        </p>
      </footer>
    </main>
  );
}
