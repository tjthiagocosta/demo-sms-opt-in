export const BUSINESS_NAME = "Saenz Global";
export const SUPPORT_EMAIL = "wecare@saenzglobal.com";
export const SUPPORT_PHONE_DISPLAY = "+1 (561) 867-0078";
export const SUPPORT_PHONE_LINK = "+15618670078";
export const SITE_ORIGIN = "https://sms.saenzglobal.com";

export const TERMS_PATH = "/terms-of-service";
export const PRIVACY_PATH = "/privacy-policy";
export const CONSENT_PATH = "/sms-consent";
export const CONTACT_PATH = "/contact";

export const CONSENT_VERSION = "v2";
export const POLICY_EFFECTIVE_DATE = "March 2, 2026";

export const MESSAGE_FREQUENCY_DISCLOSURE = "Message frequency varies.";
export const MESSAGE_RATES_DISCLOSURE = "Message and data rates may apply.";
export const STOP_DISCLOSURE = "Reply STOP to opt out.";
export const HELP_DISCLOSURE = "Reply HELP for help.";
export const NON_SHARING_DISCLOSURE =
  "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.";

export const SMS_PROGRAM_USE_CASES = [
  "Onboarding coordination",
  "Appointment confirmations and reminders",
  "Service notifications",
  "Operational updates"
];

export const SMS_PROGRAM_USE_CASES_DESCRIPTION =
  "onboarding coordination, appointment confirmations and reminders, service notifications, and operational updates";

export const CONSENT_DISCLOSURE = `I agree to receive SMS messages from ${BUSINESS_NAME} for ${SMS_PROGRAM_USE_CASES_DESCRIPTION}. No marketing messages. ${MESSAGE_FREQUENCY_DISCLOSURE} ${MESSAGE_RATES_DISCLOSURE} ${STOP_DISCLOSURE} ${HELP_DISCLOSURE} Consent is not a condition of purchase or services. See Terms of Service and Privacy Policy. ${NON_SHARING_DISCLOSURE}`;

export const CONFIRMATION_SMS_PREVIEW = `${BUSINESS_NAME}: You're opted in for service notifications. Msg&Data rates may apply. Reply HELP for help, STOP to cancel.`;

export function getAbsoluteProgramUrl(origin, pathname) {
  return new URL(pathname, origin).toString();
}
