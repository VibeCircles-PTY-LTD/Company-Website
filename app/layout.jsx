import "./globals.css";

// Using system / fallback fonts here to avoid network font fetch at build time.
// Replace with `next/font/local` + local font files if you want the exact Google fonts.


export const metadata = {
  title: "VibeCircles - Culture in Motion",
  description:
    "VibeCircles is a culture-first discovery platform where creators, businesses, and communities meet in real life.",
  metadataBase: new URL("https://vibecircles.co.za"),
  openGraph: {
    title: "VibeCircles - Culture in Motion",
    description:
      "A culture-first discovery platform: creators, businesses, and communities - mapped into real life.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCircles - Culture in Motion",
    description:
      "A culture-first discovery platform: creators, businesses, and communities - mapped into real life.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
