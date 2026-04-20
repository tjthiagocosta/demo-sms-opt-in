import {
  BUSINESS_NAME,
  CONTACT_PATH,
  HELP_DISCLOSURE,
  NON_SHARING_DISCLOSURE,
  POLICY_EFFECTIVE_DATE,
  PRIVACY_PATH,
  STOP_DISCLOSURE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_LINK,
  TERMS_PATH
} from "../../lib/smsProgram";

export const metadata = {
  title: "Saenz Global SMS Privacy Policy",
  description:
    "SMS privacy policy for Saenz Global's customer care SMS program.",
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
          program for customer care communications.
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
            Users provide explicit SMS consent verbally during a scheduled
            onboarding or support phone call with a Saenz Global
            representative. Before any mobile number is enrolled in our SMS
            program, the representative reads a disclosure that identifies
            Saenz Global as the sender, describes the types of messages that
            will be sent, states that message and data rates may apply, and
            explains how to opt out by replying STOP or get help by replying
            HELP. The user must verbally agree before their number is added. We
            record the date, time, representative name, and the user's verbal
            confirmation in our internal system.
          </p>
          <p>
            Consent to receive SMS messages is not a condition of purchase or
            service.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <p>When you opt in, we may collect and maintain records of:</p>
          <ul className="legal-list">
            <li>Your full name</li>
            <li>Your mobile phone number</li>
            <li>Your verbal consent confirmation</li>
            <li>The timestamp of consent</li>
            <li>The name of the Saenz Global representative who collected consent</li>
            <li>The disclosure script version read to the user</li>
            <li>Internal call or CRM log references used for compliance</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Use Information</h2>
          <ul className="legal-list">
            <li>Send the customer care SMS messages you agreed to receive</li>
            <li>Confirm and document your SMS consent status</li>
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
