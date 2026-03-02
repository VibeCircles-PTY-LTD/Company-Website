"use client";

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:#F6F6F9; overflow-x:hidden; }
  ::selection { background:rgba(255,107,0,0.3); }
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-track { background:#F6F6F9; }
  ::-webkit-scrollbar-thumb { background:#FF6B00; border-radius:2px; }
  input::placeholder, textarea::placeholder { color:rgba(0,0,0,0.4); }
  select option { background:#EEEEF2; color:#1a1a1a; }

  @keyframes fadeUp    { from{opacity:0;transform:translateY(36px);}  to{opacity:1;transform:translateY(0);} }
  @keyframes fadeIn    { from{opacity:0;} to{opacity:1;} }
  @keyframes fadeOut   { from{opacity:1;} to{opacity:0;} }
  @keyframes orbFloat  { 0%,100%{transform:scale(1) translateY(0);opacity:.6;} 50%{transform:scale(1.12) translateY(-12px);opacity:1;} }
  @keyframes lineGrow  { from{transform:scaleX(0);} to{transform:scaleX(1);} }
  @keyframes shimmer   { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  @keyframes marquee   { from{transform:translateX(0);} to{transform:translateX(-50%);} }
  @keyframes menuSlide { from{opacity:0;transform:translateX(100%);} to{opacity:1;transform:translateX(0);} }
  @keyframes dotPulse  { 0%,100%{box-shadow:0 0 0 0 rgba(255,107,0,.5);} 50%{box-shadow:0 0 0 10px rgba(255,107,0,0);} }
  @keyframes toastIn   { from{opacity:0;transform:translateX(120%);} to{opacity:1;transform:translateX(0);} }
  @keyframes toastOut  { from{opacity:1;transform:translateX(0);} to{opacity:0;transform:translateX(120%);} }
  @keyframes pageEnter { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
  @keyframes cookieUp  { from{opacity:0;transform:translateY(100%);} to{opacity:1;transform:translateY(0);} }
  @keyframes spin      { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes confetti  { 0%{transform:translateY(0) rotate(0deg);opacity:1;} 100%{transform:translateY(-80px) rotate(720deg);opacity:0;} }
  @keyframes checkPop  { 0%{transform:scale(0) rotate(-10deg);} 70%{transform:scale(1.2) rotate(5deg);} 100%{transform:scale(1) rotate(0deg);} }

  .page-enter { animation: pageEnter 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards; will-change: opacity, transform; }
  .grid-2  { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
  .grid-3  { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .grid-4  { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  .grid-auto { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px; }
  .sec-pad   { padding:100px 64px; }
  .sec-pad-sm{ padding:64px 64px; }

  @media(max-width:960px){
    .grid-2{grid-template-columns:1fr;gap:40px;}
    .grid-3{grid-template-columns:1fr 1fr;}
    .grid-4{grid-template-columns:1fr 1fr;}
    .sec-pad{padding:72px 28px;}
    .sec-pad-sm{padding:48px 28px;}
  }
  @media(max-width:600px){
    .grid-3{grid-template-columns:1fr;}
    .grid-4{grid-template-columns:1fr;}
    .sec-pad{padding:56px 20px;}
    .sec-pad-sm{padding:36px 20px;}
  }
`;

export const C = {
  bg: "#F6F6F9",
  bg2: "#EEEEF2",
  bg3: "#E6E6EC",
  orange: "#FF6B00",
  pink: "#FF2D78",
  blue: "#00D4FF",
  purple: "#9B59FF",
  gold: "#FFD700",
  white: "#FFFFFF",
  text: "#1a1a1a",
  textOnAccent: "#1a1a1a",
  dim: "rgba(0,0,0,0.6)",
  dimmer: "rgba(0,0,0,0.4)",
  border: "rgba(255,107,0,0.2)",
};

export const SOCIALS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L22.9 22h-6.1l-4.8-6.3L6.7 22H3.6l7.3-8.4L1.5 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z" />
      </svg>
    ),
    href: "https://x.com/vibecircle",
    label: "Twitter/X",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        <path d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z" />
      </svg>
    ),
    href: "https://instagram.com/vibecircle",
    label: "Instagram",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 8.2a5.3 5.3 0 0 0-3.7-3.7C15.9 4 12 4 12 4s-3.9 0-5.3.5A5.3 5.3 0 0 0 3 8.2C2.5 9.6 2.5 12 2.5 12s0 2.4.5 3.8a5.3 5.3 0 0 0 3.7 3.7c1.4.5 5.3.5 5.3.5s3.9 0 5.3-.5a5.3 5.3 0 0 0 3.7-3.7c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8zM10 15.2V8.8L15.5 12 10 15.2z" />
      </svg>
    ),
    href: "https://tiktok.com/@vibecircle",
    label: "TikTok",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M4 3.5C4 2.7 4.7 2 5.5 2S7 2.7 7 3.5 6.3 5 5.5 5 4 4.3 4 3.5zM4 7h3v13H4V7zm6 0h2.9v1.8h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.2V20h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.7-2.4 3.4V20h-3V7z" />
      </svg>
    ),
    href: "https://linkedin.com/company/vibecircle",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M13.7 10.6h-1.6V9.4c0-.5.3-.6.6-.6h1v-2h-1.4c-1.6 0-2.6 1.1-2.6 2.6v1.2H8v2.2h1.7V20h2.4v-7.2h1.6l.2-2.2z" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z" />
      </svg>
    ),
    href: "https://facebook.com/vibecircle",
    label: "Facebook",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 7.6a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.5A3 3 0 0 0 3 7.6C2.5 9.5 2.5 12 2.5 12s0 2.5.5 4.4a3 3 0 0 0 2.1 2.1C7 19 12 19 12 19s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.4.5-4.4s0-2.5-.5-4.4zM10 15.5V8.5L16 12l-6 3.5z" />
      </svg>
    ),
    href: "https://youtube.com/@vibecircle",
    label: "YouTube",
  },
];

export const PAGE_TO_PATH = {
  home: "/",
  About: "/about",
  Team: "/team",
  Creators: "/creators",
  Advertise: "/advertise",
  Business: "/business",
  Jobs: "/jobs",
  Marketplace: "/marketplace",
  Pricing: "/pricing",
  Contact: "/contact",
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
};

export const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);
