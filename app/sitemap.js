export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://mosesvuma.com";
  const now = new Date();
  return [
    { url: base + "/", lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: base + "/about/", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/accomplishments/", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/resources/", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/resources/private-domains-vs-authenticated-domains/", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: base + "/contact/", lastModified: now, changeFrequency: "yearly", priority: 0.5 }
  ];
}
