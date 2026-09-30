import "./globals.css";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";

export const metadata = {
  title: "Technology | AI, MarTech, Cyber & Cloud | M. Vuma, CISSP",
  description:
    "Moses Vuma — marketing technology, Salesforce, data, automation, architecture and digital transformation.",
  metadataBase: new URL("https://mosesvuma.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
