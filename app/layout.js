import "./globals.css";

export const metadata = {
  title: "Moses Vuma | Marketing Technology, Data & Automation",
  description:
    "Moses Vuma — marketing technology, Salesforce, data, automation, architecture and digital transformation.",
  metadataBase: new URL("https://mosesvuma.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
