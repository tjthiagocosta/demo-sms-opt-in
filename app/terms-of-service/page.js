import {
  BUSINESS_NAME,
  CARRIER_LIABILITY_DISCLOSURE,
  CONTACT_PATH,
  CUSTOMER_CARE_USE_CASES,
  HELP_DISCLOSURE,
  MESSAGE_FREQUENCY_DISCLOSURE,
  MESSAGE_RATES_DISCLOSURE,
  POLICY_EFFECTIVE_DATE,
  PRIVACY_PATH,
  STOP_DISCLOSURE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Terms of Service",
  description:
    "SMS messaging terms for Saenz Global's customer care SMS program.",
  robots: {
    index: true,
    follow: true
  }
};

export default function TermsOfServicePage() {
  return (
    <main className="page legal-shell">
      <header className="legal-header">
        <span className="eyebrow">SMS Terms of Service</span>
        <h1>{BUSINESS_NAME} SMS Messaging Terms</h1>
        <p className="lede">
          These SMS Messaging Terms govern {BUSINESS_NAME}
          {"'"}s customer care text messaging program for active clients.
        </p>
        <p className="legal-meta">Effective date: {POLICY_EFFECTIVE_DATE}</p>
        <div className="link-row">
          <a href={PRIVACY_PATH}>Privacy Policy</a>
          <a href={TERMS_PATH}>Terms of Service</a>
          <a href={CONTACT_PATH}>Contact</a>
        </div>
      </header>

      <div className="info-card legal-card">
        <section className="legal-section">
          <h2>SMS Program Overview</h2>
          <p>
            Saenz Global sends SMS messages only to clients who have verbally
            opted in during an onboarding or support phone call with a Saenz
            Global representative. Messages in this program are customer care
            and transactional in nature and may include:
          </p>
          <ul className="legal-list">
            {CUSTOMER_CARE_USE_CASES.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
          <p>
            This program does not include marketing messages, promotional
            offers, lead generation messages, or messages to purchased lists.
          </p>
        </section>

        <section className="legal-section">
          <h2>Opt-In and Consent</h2>
          <p>
            You opt in by providing verbal consent during a phone call with a
            Saenz Global representative after being read our SMS disclosure
            script. Your consent applies only to Saenz Global and only to the
            customer care messaging described in these Terms. Consent to receive
            text messages is not a condition of purchase or service.
          </p>
        </section>

        <section className="legal-section">
          <h2>Message Frequency and Fees</h2>
          <p>{MESSAGE_FREQUENCY_DISCLOSURE}</p>
          <p>{MESSAGE_RATES_DISCLOSURE}</p>
        </section>

        <section className="legal-section">
          <h2>Opt-Out and Help</h2>
          <p>{STOP_DISCLOSURE}</p>
          <p>{HELP_DISCLOSURE}</p>
          <p className="legal-note">
            Support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or{" "}
            <a href={`tel:${SUPPORT_PHONE_LINK}`}>{SUPPORT_PHONE_DISPLAY}</a>
          </p>
          <p>
            You can also visit our <a href={CONTACT_PATH}>support contact page</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Carrier Disclaimer</h2>
          <p>{CARRIER_LIABILITY_DISCLOSURE}</p>
        </section>

        <section className="legal-section">
          <h2>Eligibility and Acceptable Use</h2>
          <p>
            You may enroll only the mobile number that belongs to you or for
            which you have authority to provide consent.
          </p>
          <p>
            This SMS program is open only to clients who verbally opt in during
            a phone call with a {BUSINESS_NAME} representative and want to
            receive customer care messages about ongoing work.
          </p>
        </section>

        <section className="legal-section">
          <h2>Privacy Reference</h2>
          <p>
            Please review our <a href={PRIVACY_PATH}>SMS Privacy Policy</a> to
            understand how we collect, use, and protect SMS-related personal
            information.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to the SMS Program Terms</h2>
          <p>
            We may update these SMS Messaging Terms from time to time. The
            effective date above will be revised when changes are posted.
          </p>
          <p>
            Your continued participation in the SMS program after changes become
            effective constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>

      <footer className="footer">
        <p>
          These terms apply only to the SMS messaging program described on this
          page.
        </p>
      </footer>
    </main>
  );
}
