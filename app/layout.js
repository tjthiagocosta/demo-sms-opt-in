import "./globals.css";
import { Inter, Manrope } from "next/font/google";

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
  metadataBase: new URL("https://www.saenzglobal.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
