import { SITE_ORIGIN } from "../lib/smsProgram";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`
  };
}
