export default function sitemap() {
  const base = "https://example.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/team`, lastModified: new Date() },
    { url: `${base}/creators`, lastModified: new Date() },
    { url: `${base}/advertise`, lastModified: new Date() },
    { url: `${base}/business`, lastModified: new Date() },
    { url: `${base}/jobs`, lastModified: new Date() },
    { url: `${base}/marketplace`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/cookies`, lastModified: new Date() },
  ];
}
