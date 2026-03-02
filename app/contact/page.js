import {
  BUSINESS_NAME,
  CONSENT_PATH,
  PRIVACY_PATH,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Support Contact",
  description:
    "Contact information for Saenz Global's SMS messaging program support.",
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactPage() {
  return (
    <main className="page legal-shell">
      <header className="legal-header">
        <span className="eyebrow">SMS Support</span>
        <h1>{BUSINESS_NAME} Contact Information</h1>
        <p className="lede">
          Contact {BUSINESS_NAME} for questions about SMS opt-in, delivery,
          support, or opting out of the service-only messaging program.
        </p>
        <div className="link-row">
          <a href={CONSENT_PATH}>SMS Consent Form</a>
          <a href={TERMS_PATH}>Terms of Service</a>
          <a href={PRIVACY_PATH}>Privacy Policy</a>
        </div>
      </header>

      <div className="info-card legal-card">
        <section className="legal-section">
          <h2>Support Channels</h2>
          <p>
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${SUPPORT_PHONE_LINK}`}>{SUPPORT_PHONE_DISPLAY}</a>
          </p>
          <p>
            For SMS assistance, you can also reply HELP to a message from{" "}
            {BUSINESS_NAME}.
          </p>
        </section>

        <section className="legal-section">
          <h2>SMS Program Support</h2>
          <p>
            We can help with opt-in questions, appointment confirmations,
            onboarding coordination, service notifications, administrative
            updates, STOP requests, and message delivery issues related to the
            SMS program.
          </p>
        </section>
      </div>
    </main>
  );
}
