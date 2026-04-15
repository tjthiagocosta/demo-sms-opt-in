import {
  BUSINESS_NAME,
  CARRIER_LIABILITY_DISCLOSURE,
  CONSENT_PATH,
  CONTACT_PATH,
  MESSAGE_FREQUENCY_DISCLOSURE,
  MESSAGE_RATES_DISCLOSURE,
  POLICY_EFFECTIVE_DATE,
  PRIVACY_PATH,
  SMS_PROGRAM_USE_CASES,
  SMS_PROGRAM_USE_CASES_DESCRIPTION,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Terms of Service",
  description:
    "SMS messaging terms for Saenz Global's A2P 10DLC marketing and transactional SMS program.",
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
          {"'"}s text messaging program, which covers{" "}
          {SMS_PROGRAM_USE_CASES_DESCRIPTION}. Marketing SMS and
          transactional SMS are treated as separate consents that users can
          opt into independently.
        </p>
        <p className="legal-meta">Effective date: {POLICY_EFFECTIVE_DATE}</p>
        <div className="link-row">
          <a href={CONSENT_PATH}>SMS Consent Form</a>
          <a href={PRIVACY_PATH}>Privacy Policy</a>
          <a href={CONTACT_PATH}>Contact</a>
        </div>
      </header>

      <div className="info-card legal-card">
        <section className="legal-section">
          <h2>SMS Program Overview</h2>
          <p>
            {BUSINESS_NAME} sends SMS messages only to users who have
            affirmatively opted in through the SMS consent form on this
            website. Messages may include:
          </p>
          <ul className="legal-list">
            {SMS_PROGRAM_USE_CASES.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
          <p>
            Lead generation messages and purchased-list messaging are not
            included in this SMS program. We only send SMS to users who have
            provided affirmative opt-in for the relevant message category.
          </p>
        </section>

        <section className="legal-section">
          <h2>Opt-In and Consent</h2>
          <p>
            You opt in by submitting the SMS consent form on this website and
            affirmatively checking the consent checkbox for Marketing SMS,
            Transactional SMS, or both, before submitting the form. Marketing
            SMS and Transactional SMS are separate consents — opting in to one
            does not opt you in to the other.
          </p>
          <p>
            Your consent applies only to {BUSINESS_NAME}. Consent to receive
            text messages is not a condition of purchase or services.
          </p>
        </section>

        <section className="legal-section">
          <h2>Message Frequency and Fees</h2>
          <p>{MESSAGE_FREQUENCY_DISCLOSURE}</p>
          <p>{MESSAGE_RATES_DISCLOSURE}</p>
        </section>

        <section className="legal-section">
          <h2>Opt-Out and Help</h2>
          <p>Reply STOP to opt out of future SMS messages at any time.</p>
          <p>Reply HELP for help or contact us directly for support.</p>
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
            This SMS program is open to users who affirmatively opt in through
            the {BUSINESS_NAME} SMS consent form and want to receive marketing
            messages, transactional messages (account notifications and 2FA),
            or both from {BUSINESS_NAME}.
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
