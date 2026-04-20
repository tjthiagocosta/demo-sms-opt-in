import {
  CONTACT_PATH,
  PRIVACY_PATH,
  SITE_ORIGIN,
  TERMS_PATH
} from "../lib/smsProgram";

export default function sitemap() {
  const lastModified = new Date();

  return [
    "",
    TERMS_PATH,
    PRIVACY_PATH,
    CONTACT_PATH
  ].map((pathname) => ({
    url: `${SITE_ORIGIN}${pathname}`,
    lastModified
  }));
}
