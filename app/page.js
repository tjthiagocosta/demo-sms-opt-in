import {
  BUSINESS_NAME,
  CONTACT_PATH,
  CUSTOMER_CARE_USE_CASES,
  MESSAGE_FREQUENCY_DISCLOSURE,
  PRIVACY_PATH,
  TERMS_PATH
} from "../lib/smsProgram";

export default function Home() {
  return (
    <main className="page legal-shell">
      <header className="legal-header">
        <span className="eyebrow">SMS Program Information</span>
        <h1>{BUSINESS_NAME} Customer Care SMS</h1>
        <p className="lede">
          Saenz Global sends customer care SMS messages only to clients who
          provide verbal consent during an onboarding or support phone call.
        </p>
        <div className="link-row">
          <a href={PRIVACY_PATH}>Privacy Policy</a>
          <a href={TERMS_PATH}>Terms of Service</a>
          <a href={CONTACT_PATH}>Contact</a>
        </div>
      </header>

      <div className="info-card legal-card">
        <section className="legal-section">
          <h2>Program Scope</h2>
          <p>Customer care messages in this program may include:</p>
          <ul className="legal-list">
            {CUSTOMER_CARE_USE_CASES.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2>Enrollment and Frequency</h2>
          <p>
            Enrollment occurs verbally during an onboarding or support phone
            call after the SMS disclosure is read to the client.
          </p>
          <p>{MESSAGE_FREQUENCY_DISCLOSURE}</p>
        </section>
      </div>
    </main>
  );
}
