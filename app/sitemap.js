export default function sitemap() {
  const base = "https://vibecircles.co.za";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/team`, lastModified: new Date() },
    { url: `${base}/jobs`, lastModified: new Date() },
    { url: `${base}/marketplace`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/cookies`, lastModified: new Date() },
    { url: `${base}/popia`, lastModified: new Date() },
  ];
}
