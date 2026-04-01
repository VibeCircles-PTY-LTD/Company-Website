"use client";

export const C = {
  bg: "#F7F4EE",
  bg2: "#F0EDE8",
  bg3: "#E8E4DC",
  orange: "#E8511A",
  pink: "#E8511A", // Alignment with simple palette
  blue: "#1B4332", // Forest green for contrast
  purple: "#F5A623", // Amber
  gold: "#C8B89A", // Sand
  white: "#F7F4EE",
  text: "#1C1C1A",
  textOnAccent: "#F7F4EE",
  dim: "#7A7570",
  dimmer: "rgba(122, 117, 112, 0.6)",
  border: "#E8E4DC",
};

export const SOCIALS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M3 4 12 20 21 4 15 4 12 17 9 4z" />
      </svg>
    ),
    href: "https://vibecircle.co.za/",
    label: "VibeCircle/V",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L22.9 22h-6.1l-4.8-6.3L6.7 22H3.6l7.3-8.4L1.5 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z" />
      </svg>
    ),
    href: "https://x.com/vibecircles",
    label: "Twitter/X",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        <path d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z" />
      </svg>
    ),
    href: "https://instagram.com/vibecircles",
    label: "Instagram",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 8.2a5.3 5.3 0 0 0-3.7-3.7C15.9 4 12 4 12 4s-3.9 0-5.3.5A5.3 5.3 0 0 0 3 8.2C2.5 9.6 2.5 12 2.5 12s0 2.4.5 3.8a5.3 5.3 0 0 0 3.7 3.7c1.4.5 5.3.5 5.3.5s3.9 0 5.3-.5a5.3 5.3 0 0 0 3.7-3.7c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8zM10 15.2V8.8L15.5 12 10 15.2z" />
      </svg>
    ),
    href: "https://tiktok.com/@vibecircles",
    label: "TikTok",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M4 3.5C4 2.7 4.7 2 5.5 2S7 2.7 7 3.5 6.3 5 5.5 5 4 4.3 4 3.5zM4 7h3v13H4V7zm6 0h2.9v1.8h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.2V20h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.7-2.4 3.4V20h-3V7z" />
      </svg>
    ),
    href: "https://linkedin.com/company/vibecircles",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M13.7 10.6h-1.6V9.4c0-.5.3-.6.6-.6h1v-2h-1.4c-1.6 0-2.6 1.1-2.6 2.6v1.2H8v2.2h1.7V20h2.4v-7.2h1.6l.2-2.2z" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z" />
      </svg>
    ),
    href: "https://www.facebook.com/profile.php?id=61577760104699",
    label: "Facebook",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 7.6a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.5A3 3 0 0 0 3 7.6C2.5 9.5 2.5 12 2.5 12s0 2.5.5 4.4a3 3 0 0 0 2.1 2.1C7 19 12 19 12 19s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.4.5-4.4s0-2.5-.5-4.4zM10 15.5V8.5L16 12l-6 3.5z" />
      </svg>
    ),
    href: "https://youtube.com/@vibecircles",
    label: "YouTube",
  },
];

/** External help / docs site. */
export const HELP_CENTER_HREF = "https://help-center.vibecircles.co.za";

/** Company blog (subdomain). */
export const BLOG_HREF = "https://blog.vibecircles.co.za";

export const PAGE_TO_PATH = {
  home: "/",
  About: "/about",
  Team: "/team",
  Jobs: "/jobs",
  Marketplace: "/marketplace",
  Contact: "/contact",
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
  POPIA: "/popia",
};

export const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);
