import {
  BUSINESS_NAME,
  CONTACT_PATH,
  PRIVACY_PATH,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Support Contact",
  description:
    "Contact information for Saenz Global's customer care SMS messaging program support.",
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
          Contact {BUSINESS_NAME} for questions about SMS enrollment by phone,
          message delivery, support, or opting out of the customer care
          messaging program.
        </p>
        <div className="link-row">
          <a href={CONTACT_PATH}>Contact</a>
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
            We can help with verbal opt-in questions, onboarding call
            scheduling, project and permit status updates, scheduling changes,
            replies to questions about ongoing work, STOP requests, and message
            delivery issues related to the SMS program.
          </p>
        </section>
      </div>
    </main>
  );
}
