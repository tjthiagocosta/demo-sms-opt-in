import {
  BUSINESS_NAME,
  CONSENT_PATH,
  CONTACT_PATH,
  HELP_DISCLOSURE,
  NON_SHARING_DISCLOSURE,
  POLICY_EFFECTIVE_DATE,
  SITE_ORIGIN,
  STOP_DISCLOSURE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Privacy Policy",
  description:
    "SMS privacy policy for Saenz Global's A2P 10DLC marketing and transactional SMS program.",
  robots: {
    index: true,
    follow: true
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page legal-shell">
      <header className="legal-header">
        <span className="eyebrow">SMS Privacy Policy</span>
        <h1>{BUSINESS_NAME} SMS Privacy Policy</h1>
        <p className="lede">
          This policy explains how {BUSINESS_NAME} collects, uses, stores, and
          protects personal information associated with our SMS messaging
          program, which covers both marketing and transactional messages.
        </p>
        <p className="legal-meta">Effective date: {POLICY_EFFECTIVE_DATE}</p>
        <div className="link-row">
          <a href={CONSENT_PATH}>SMS Consent Form</a>
          <a href={TERMS_PATH}>Terms of Service</a>
          <a href={CONTACT_PATH}>Contact</a>
        </div>
      </header>

      <div className="info-card legal-card">
        <section className="legal-section">
          <h2>Sharing and Disclosure</h2>
          <p>{NON_SHARING_DISCLOSURE}</p>
          <p>
            Text messaging originator opt-in data and consent will not be sold
            or shared with third parties, except with vendors and platforms that
            support message delivery, compliance, security, or where disclosure
            is required by law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Scope</h2>
          <p>
            This SMS Privacy Policy applies only to {BUSINESS_NAME}
            {"'"}s SMS messaging program and explains how we handle
            SMS-related personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>How You Opt In</h2>
          <p>
            Users provide explicit SMS consent only through our website at{" "}
            <a href={CONSENT_PATH}>
              {SITE_ORIGIN}
              {CONSENT_PATH}
            </a>
            .
          </p>
          <p>
            To opt in, the user enters their full name and mobile phone
            number, reviews the SMS disclosures, and affirmatively checks one
            or both of the SMS consent checkboxes (Marketing SMS and/or
            Transactional SMS) before submitting the form. Marketing SMS and
            Transactional SMS are treated as separate consents. We do not send
            SMS messages of a given type before affirmative opt-in for that
            type is completed.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <p>When you opt in, we may collect and maintain records of:</p>
          <ul className="legal-list">
            <li>Your full name</li>
            <li>Your mobile phone number</li>
            <li>
              Your consent status for Marketing SMS and Transactional SMS,
              recorded separately
            </li>
            <li>The timestamp of your consent submission</li>
            <li>
              The consent language and consent version shown for each SMS
              category you reviewed
            </li>
            <li>The page used to opt in</li>
            <li>
              Technical log data used for compliance and security, including IP
              address and user agent
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Use Information</h2>
          <ul className="legal-list">
            <li>
              Send the Marketing and/or Transactional SMS messages you opted in
              to receive
            </li>
            <li>Confirm your opt-in status for each SMS category</li>
            <li>Process STOP and HELP requests</li>
            <li>Maintain consent records for compliance purposes</li>
            <li>Provide customer support related to the SMS program</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Opt-Out and Your Choices</h2>
          <p>{STOP_DISCLOSURE}</p>
          <p>{HELP_DISCLOSURE}</p>
          <p>
            After you opt out, we will stop sending future SMS messages unless
            a message is required to complete a legally required or operationally
            necessary confirmation related to your request.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data Retention and Security</h2>
          <p>
            We retain SMS consent records as needed to document compliance,
            administer the SMS program, resolve support issues, and protect our
            systems.
          </p>
          <p>
            We use reasonable administrative and technical safeguards designed to
            protect SMS-related information from unauthorized access, disclosure,
            or misuse.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact Information</h2>
          <p>
            If you have questions about this SMS Privacy Policy or the SMS
            program, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
            or <a href={`tel:${SUPPORT_PHONE_LINK}`}>{SUPPORT_PHONE_DISPLAY}</a>.
          </p>
          <p>
            You can also visit our <a href={CONTACT_PATH}>support contact page</a>{" "}
            for SMS program assistance.
          </p>
        </section>

        <section className="legal-section">
          <h2>Policy Updates</h2>
          <p>
            We may update this SMS Privacy Policy from time to time. When we do,
            we will revise the effective date on this page.
          </p>
        </section>
      </div>

      <footer className="footer">
        <p>
          This policy applies only to information collected for the SMS
          messaging program described on this page.
        </p>
      </footer>
    </main>
  );
}
