import ConsentForm from "./ConsentForm";

const TERMS_URL = "https://www.saenzglobal.com/terms-of-service";
const PRIVACY_URL = "https://www.saenzglobal.com/privacy-policy";

export const metadata = {
  title: "Saenz Global SMS Program Consent",
  description:
    "Opt in to receive Saenz Global service updates, onboarding coordination, and appointment confirmations via SMS.",
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
            Receive important service notifications, onboarding coordination, and appointment confirmations from Saenz Global via SMS. No marketing messages—only operational updates to help deliver your back-office support services.
          </p>

          <div className="detail-card">
            <h3>Program details</h3>
            <ul className="detail-list">
              <li>
                <strong>Sender:</strong> Saenz Global
              </li>
              <li>
                <strong>Message purpose:</strong> Service updates, onboarding coordination, appointment confirmations, and operational notifications for current clients only.
              </li>
              <li>
                <strong>Message frequency:</strong> Message frequency varies.
              </li>
              <li>
                <strong>Rates:</strong> Message and data rates may apply.
              </li>
              <li>
                <strong>Opt-out:</strong> Reply STOP to opt out.
              </li>
              <li>
                <strong>Help:</strong> Reply HELP for help.
              </li>
              <li>
                <strong>Carrier liability:</strong> Carriers are not liable for delayed or undelivered messages.
              </li>
              <li className="detail-list-divider">
                <strong>Support:</strong> Email{" "}
                <a href="mailto:wecare@saenzglobal.com">
                  wecare@saenzglobal.com
                </a>{" "}
                or call{" "}
                <a href="tel:+15618670078">+1 (561) 867-0078</a>
              </li>
            </ul>
          </div>

          <div className="link-row">
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
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
          <div className="sms-preview">
            Saenz Global: You're opted in for service updates. Msg freq varies. Msg&amp;Data rates may apply. Reply HELP for help, STOP to cancel.
          </div>
          <p>
            Keep this message for your records. You can opt out anytime by replying STOP.
          </p>
        </div>

        <div className="info-card">
          <h2>What you'll receive</h2>
          <ul className="small-list">
            <li>Onboarding coordination and updates</li>
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
            <li>Your consent applies only to Saenz Global</li>
            <li>Consent is not a condition of purchase or services</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>
          Saenz Global SMS Messaging Program Terms apply. Use the links above for full Terms of Service and Privacy Policy.
        </p>
      </footer>
    </main>
  );
}
