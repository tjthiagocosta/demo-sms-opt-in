import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { SITE_ORIGIN } from "../lib/smsProgram";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata = {
  title: "Saenz Global SMS Consent",
  description:
    "SMS consent disclosure page for Saenz Global onboarding and service notifications.",
  metadataBase: new URL(SITE_ORIGIN)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
