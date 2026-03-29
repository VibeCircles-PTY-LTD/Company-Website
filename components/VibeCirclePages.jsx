"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
// --------- GLOBAL CSS ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const GLOBAL_CSS = `
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
  @keyframes pageEnter { from{opacity:0;transform:translateY(12px);} to{opacity:1;transform:translateY(0);} }
  @keyframes cookieUp  { from{opacity:0;transform:translateY(100%);} to{opacity:1;transform:translateY(0);} }
  @keyframes spin      { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes confetti  { 0%{transform:translateY(0) rotate(0deg);opacity:1;} 100%{transform:translateY(-80px) rotate(720deg);opacity:0;} }
  @keyframes checkPop  { 0%{transform:scale(0) rotate(-10deg);} 70%{transform:scale(1.2) rotate(5deg);} 100%{transform:scale(1) rotate(0deg);} }

  .page-enter { animation:pageEnter .35s ease forwards; }
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

const C = {
  bg: "#F6F6F9", bg2: "#EEEEF2", bg3: "#E6E6EC",
  orange: "#FF6B00", pink: "#FF2D78",
  blue: "#00D4FF", purple: "#9B59FF", gold: "#FFD700",
  white: "#FFFFFF", text: "#1a1a1a", textOnAccent: "#1a1a1a",
  dim: "rgba(0,0,0,0.6)", dimmer: "rgba(0,0,0,0.4)", border: "rgba(255,107,0,0.2)",
};

const SOCIALS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L22.9 22h-6.1l-4.8-6.3L6.7 22H3.6l7.3-8.4L1.5 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z" />
      </svg>
    ), href: "https://x.com/vibecircle", label: "Twitter/X"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        <path d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z" />
      </svg>
    ), href: "https://instagram.com/vibecircle", label: "Instagram"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 8.2a5.3 5.3 0 0 0-3.7-3.7C15.9 4 12 4 12 4s-3.9 0-5.3.5A5.3 5.3 0 0 0 3 8.2C2.5 9.6 2.5 12 2.5 12s0 2.4.5 3.8a5.3 5.3 0 0 0 3.7 3.7c1.4.5 5.3.5 5.3.5s3.9 0 5.3-.5a5.3 5.3 0 0 0 3.7-3.7c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8zM10 15.2V8.8L15.5 12 10 15.2z" />
      </svg>
    ), href: "https://tiktok.com/@vibecircle", label: "TikTok"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M4 3.5C4 2.7 4.7 2 5.5 2S7 2.7 7 3.5 6.3 5 5.5 5 4 4.3 4 3.5zM4 7h3v13H4V7zm6 0h2.9v1.8h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.2V20h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.7-2.4 3.4V20h-3V7z" />
      </svg>
    ), href: "https://linkedin.com/company/vibecircle", label: "LinkedIn"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M13.7 10.6h-1.6V9.4c0-.5.3-.6.6-.6h1v-2h-1.4c-1.6 0-2.6 1.1-2.6 2.6v1.2H8v2.2h1.7V20h2.4v-7.2h1.6l.2-2.2z" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z" />
      </svg>
    ), href: "https://facebook.com/vibecircle", label: "Facebook"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor">
        <path d="M21 7.6a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.5A3 3 0 0 0 3 7.6C2.5 9.5 2.5 12 2.5 12s0 2.5.5 4.4a3 3 0 0 0 2.1 2.1C7 19 12 19 12 19s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.4.5-4.4s0-2.5-.5-4.4zM10 15.5V8.5L16 12l-6 3.5z" />
      </svg>
    ), href: "https://youtube.com/@vibecircle", label: "YouTube"
  },
];

const PAGE_TO_PATH = {
  home: "/",
  About: "/about",
  Team: "/team",
  Jobs: "/jobs",
  Marketplace: "/marketplace",
  Contact: "/contact",
  Press: "/press",
  Safety: "/safety",
  MediaKit: "/media-kit",
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);

// --------- HOOKS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function useInView(t = 0.1) {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) obs.observe(ref.current); return () => obs.disconnect();
  }, []);
  return [ref, v];
}
function useCounter(target, dur = 1800, active = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 60, inc = target / steps; let cur = 0;
    const id = setInterval(() => { cur = Math.min(cur + inc, target); setV(Math.floor(cur)); if (cur >= target) clearInterval(id); }, dur / steps);
    return () => clearInterval(id);
  }, [active, target, dur]);
  return v;
}
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => { const h = () => setW(window.innerWidth); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);
  return w;
}

// --------- SHARED UI COMPONENTS ---------------------------------------------------------------------------------------------------------------------------------------------------------------
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(32px)", transition: `opacity .75s ease ${delay}s,transform .75s ease ${delay}s`, ...style }}>{children}</div>;
}
function Orb({ top, left, right, bottom, size = 500, color = C.orange, opacity = 0.12, delay = "0s" }) {
  return <div style={{ position: "absolute", borderRadius: "50%", width: size, height: size, top, left, right, bottom, background: `radial-gradient(circle,${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%,transparent 70%)`, animation: `orbFloat 8s ease-in-out ${delay} infinite`, pointerEvents: "none" }} />;
}
function Tag({ children, color = C.orange }) {
  return <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "11px", letterSpacing: "4px", color, textTransform: "uppercase", border: `1px solid ${color}40`, padding: "6px 14px", borderRadius: "2px", display: "inline-block" }}>{children}</span>;
}
function Divider() {
  const w = useWindowWidth();
  return <div style={{ height: "1px", background: `linear-gradient(90deg,${C.orange}40,transparent)`, margin: `0 ${w < 600 ? "20px" : "64px"}` }} />;
}
function PageHero({ tag, title, accent, sub, children }) {
  const w = useWindowWidth();
  const p = w < 600 ? "100px 20px 60px" : w < 960 ? "120px 28px 64px" : "140px 64px 80px";
  return (
    <section style={{ minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: p, position: "relative", overflow: "hidden", background: C.bg }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
      <Orb top="-10%" right="-5%" size={500} /><Orb bottom="-20%" left="30%" size={400} color={C.pink} opacity={0.07} delay="3s" />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div style={{ animation: "fadeUp .6s ease forwards", opacity: 0, marginBottom: "20px" }}><Tag>{tag}</Tag></div>
        <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(44px,8vw,96px)", lineHeight: .95, color: C.text, animation: "fadeUp .6s .1s ease forwards", opacity: 0, marginBottom: "24px" }}>
          {title}<br /><span style={{ color: C.orange }}>{accent}</span>
        </h1>
        {sub && <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,2vw,19px)", color: C.dim, maxWidth: "560px", lineHeight: 1.75, animation: "fadeUp .6s .2s ease forwards", opacity: 0 }}>{sub}</p>}
        {children}
      </div>
    </section>
  );
}
function PricingCard({ plan, price, period = "/mo", desc, features, cta, highlight = false, color = C.orange, onCta, annual = false, annualPrice }) {
  const displayPrice = annual && annualPrice ? annualPrice : price;
  return (
    <Reveal>
      <div style={{ padding: "40px 32px", background: highlight ? `linear-gradient(160deg,${color}14,transparent)` : "rgba(0,0,0,0.02)", border: `1px solid ${highlight ? color + "50" : C.border}`, borderRadius: "4px", height: "100%", display: "flex", flexDirection: "column", position: "relative", transition: "transform .3s" }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}
      >
        {highlight && <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: color, color: C.textOnAccent, fontFamily: "'Bebas Neue',sans-serif", fontSize: "11px", letterSpacing: "3px", padding: "4px 16px", borderRadius: "0 0 4px 4px" }}>MOST POPULAR</div>}
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", color, marginBottom: "16px" }}>{plan}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
          <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,5vw,56px)", color: C.text, lineHeight: 1 }}>{displayPrice}</span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim }}>{displayPrice === "Free" || displayPrice === "Custom" ? "" : period}</span>
        </div>
        {annual && annualPrice && <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: color, marginBottom: "8px" }}>Save 20% -- billed annually</p>}
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "28px" }}>{desc}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, marginBottom: "32px" }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color, fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>---</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim }}>{f}</span>
            </div>
          ))}
        </div>
        <button type="button" onClick={onCta} className={`vc-btn vc-btn--block ${highlight ? "vc-btn--accent" : "vc-btn--outline-muted"}`} style={highlight ? { background: color, fontSize: "13px", padding: "16px" } : { fontSize: "13px", padding: "16px" }}
        >{cta}</button>
      </div>
    </Reveal>
  );
}
function TestimonialCard({ quote, name, role, avatar, color = C.orange }) {
  return (
    <div style={{ padding: "30px 26px", background: "rgba(0,0,0,0.02)", border: "1px solid " + C.border, borderRadius: "4px", display: "flex", flexDirection: "column", gap: "18px", height: "100%", transition: "all .3s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color + "50"; e.currentTarget.style.background = `${color}08`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}
    >
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color, lineHeight: 1, opacity: .5 }}>"</div>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.8, flex: 1 }}>{quote}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: `${color}20`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}>{avatar}</div>
        <div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 600, color: C.text }}>{name}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, marginTop: "2px" }}>{role}</div></div>
      </div>
    </div>
  );
}

// --------- TOAST SYSTEM ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Toast({ toast, onRemove }) {
  const [exit, setExit] = useState(false);
  useEffect(() => { const t = setTimeout(() => { setExit(true); setTimeout(() => onRemove(toast.id), 400); }, toast.duration || 4000); return () => clearTimeout(t); }, []);
  const colors = { success: C.orange, error: C.pink, info: C.blue };
  const icons = { success: "---", error: "---", info: "i" };
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "16px 20px", background: C.bg2, border: `1px solid ${colors[toast.type] || C.orange}40`, borderLeft: `3px solid ${colors[toast.type] || C.orange}`, borderRadius: "4px", maxWidth: "340px", boxShadow: "0 8px 32px rgba(0,0,0,0.6)", animation: exit ? "toastOut .4s ease forwards" : "toastIn .4s ease forwards" }}>
      <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${colors[toast.type] || C.orange}20`, border: `1px solid ${colors[toast.type] || C.orange}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: colors[toast.type] || C.orange, flexShrink: 0, fontWeight: "bold" }}>{icons[toast.type] || "i"}</div>
      <div style={{ flex: 1 }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "1px", color: C.text, marginBottom: "3px" }}>{toast.title}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim, lineHeight: 1.5 }}>{toast.message}</div></div>
      <button onClick={() => { setExit(true); setTimeout(() => onRemove(toast.id), 400); }} style={{ background: "none", border: "none", color: C.dimmer, cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0", flexShrink: 0 }}>--</button>
    </div>
  );
}
function ToastContainer({ toasts, removeToast }) {
  return (
    <div style={{ position: "fixed", bottom: "80px", right: "24px", zIndex: 9999, display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
      {toasts.map(t => <Toast key={t.id} toast={t} onRemove={removeToast} />)}
    </div>
  );
}

// --------- WAITLIST MODAL ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function WaitlistModal({ open, onClose, context, addToast }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [form, setForm] = useState({ name: "", email: "", city: "", role: "" });
  const roles = ["Creator", "Business Owner", "Brand / Agency", "Just Curious"];

  useEffect(() => { if (!open) { setTimeout(() => { setStep(1); setRole(""); setForm({ name: "", email: "", city: "", role: "" }); }, 300); } });

  const submit = async () => {
    if (!form.name || !form.email || !role) return;
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@vibecircles.co.za", {
        method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ _subject: `New Waitlist Signup --- ${role}`, name: form.name, email: form.email, city: form.city, role, context: context || "Website", _template: "table" })
      });
    } catch (e) { }
    setLoading(false);
    setStep(2);
    addToast({ type: "success", title: "You're on the list!", message: `We'll be in touch at ${form.email} soon.` });
  };

  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 600, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", animation: "fadeIn .2s ease" }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background: C.bg, border: `1px solid ${C.orange}35`, borderRadius: "6px", padding: "48px", maxWidth: "480px", width: "100%", position: "relative", animation: "fadeUp .3s ease", maxHeight: "90vh", overflowY: "auto" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "18px", right: "20px", background: "none", border: "none", color: C.dim, fontSize: "22px", cursor: "pointer", lineHeight: 1 }}>--</button>
        {step === 1 ? (
          <>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,4vw,40px)", color: C.text, lineHeight: 1, marginBottom: "8px" }}>
              Join the <span style={{ color: C.orange }}>Movement.</span>
            </div>
            {context && <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", letterSpacing: "1px", color: C.orange, textTransform: "uppercase", marginBottom: "16px" }}>{context}</div>}
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "28px" }}>VibeCircles is launching city by city. Be first in your city when we open access.</p>
            {/* Role Selector */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: C.dimmer, marginBottom: "10px" }}>I am a...</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {roles.map(r => (
                  <button key={r} onClick={() => { setRole(r); setForm(f => ({ ...f, role: r })); }} style={{ padding: "12px 10px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", background: role === r ? `${C.orange}18` : "rgba(0,0,0,0.03)", border: `1px solid ${role === r ? C.orange + "60" : C.border}`, borderRadius: "3px", color: role === r ? C.textOnAccent : C.dim, cursor: "pointer", transition: "all .2s", textAlign: "left" }}>
                    {r === roles[0] && "--- "}{r === roles[1] && "---- "}{r === roles[2] && "------- "}{r === roles[3] && "---- "}{r}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
              {[["name", "Your Name", "----"], ["email", "Email Address", "------"], ["city", "Your City (optional)", "----"]].map(([k, ph, ic]) => (
                <div key={k} style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", opacity: .4 }}>{ic}</span>
                  <input placeholder={ph} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ width: "100%", background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "3px", padding: "13px 14px 13px 40px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                </div>
              ))}
            </div>
            <button type="button" onClick={submit} disabled={loading || !form.name || !form.email || !role} className="vc-btn vc-btn--primary vc-btn--block" style={{ fontSize: "14px", padding: "16px", gap: "10px" }}
            >
              {loading ? <span className="vc-btn__spinner" style={{ width: 16, height: 16 }} aria-hidden /> : null}
              {loading ? "Joining..." : "Secure My Spot ---"}
            </button>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, textAlign: "center", marginTop: "12px" }}>No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "56px", marginBottom: "20px", animation: "checkPop .5s ease" }}>----</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: C.orange, lineHeight: 1, marginBottom: "12px" }}>You're on the list.</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.7, marginBottom: "8px" }}>
              Welcome to VibeCircles, <span style={{ color: C.text, fontWeight: 600 }}>{form.name}</span>.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dimmer, lineHeight: 1.7, marginBottom: "32px" }}>
              We'll email you at <span style={{ color: C.orange }}>{form.email}</span> the moment we launch in your city.
            </p>
            <button type="button" onClick={onClose} className="vc-btn vc-btn--primary">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

// --------- COOKIE BANNER ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CookieBanner({ onAccept, onDecline, setPage }) {
  const w = useWindowWidth();
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500, background: "rgba(246,246,249,0.98)", backdropFilter: "blur(20px)", borderTop: `1px solid ${C.border}`, padding: w < 600 ? "20px" : "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", animation: "cookieUp .4s ease" }}>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, flex: 1, minWidth: "240px", lineHeight: 1.6 }}>
        We use cookies to improve your experience, personalise content, and analyse site traffic.{" "}
        <button onClick={() => setPage("Privacy")} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", padding: 0, textDecoration: "underline" }}>Learn more</button>
      </p>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button type="button" onClick={onDecline} className="vc-btn vc-btn--outline-muted vc-btn--sm">Decline</button>
        <button type="button" onClick={onAccept} className="vc-btn vc-btn--primary vc-btn--sm">Accept All</button>
      </div>
    </div>
  );
}

// --------- BACK TO TOP ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const h = () => setShow(window.scrollY > 400); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  if (!show) return null;
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="vc-btn vc-btn--fab" style={{ position: "fixed", bottom: "80px", right: "24px", zIndex: 400, animation: "fadeIn .3s ease" }}>---</button>
  );
}

// --------- NAV ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const ALL_PAGES = ["About", "Team", "Jobs", "Marketplace", "Contact", "Press", "Safety"];
const PRIMARY_NAV = ["About", "Marketplace", "Jobs"];
const MORE_NAV = ["Team", "Contact", "Press", "Safety"];

function Nav({ current, setPage, openWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const w = useWindowWidth();
  const isMobile = w < 1060;
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const go = (p) => { setPage(p); window.scrollTo(0, 0); setMenuOpen(false); };
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(20px,4vw,48px)", height: "68px", background: scrolled || menuOpen ? "rgba(246,246,249,0.98)" : "rgba(246,246,249,0.85)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`, transition: "all .35s ease" }}>
        <button onClick={() => go("home")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "24px", letterSpacing: "3px", color: C.orange, background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}>VIBECIRCLES</button>
        {!isMobile && (
          <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
            {PRIMARY_NAV.map(p => (
              <button key={p} onClick={() => go(p)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: current === p ? C.orange : C.dim, background: current === p ? `${C.orange}12` : "transparent", border: current === p ? `1px solid ${C.orange}30` : "1px solid transparent", borderRadius: "2px", padding: "7px 12px", cursor: "pointer", transition: "all .2s" }}
                onMouseEnter={e => { if (current !== p) { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = C.border; } }}
                onMouseLeave={e => { if (current !== p) { e.currentTarget.style.color = C.dim; e.currentTarget.style.borderColor = "transparent"; } }}
              >{p}</button>
            ))}
            {MORE_NAV.map(p => (
              <button key={p} onClick={() => go(p)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: current === p ? C.orange : C.dim, background: "transparent", border: "1px solid transparent", borderRadius: "2px", padding: "7px 10px", cursor: "pointer", transition: "all .2s" }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = current === p ? C.orange : C.dim}
              >{p}</button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {!isMobile && <button onClick={() => openWaitlist("Early Access")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", padding: "9px 22px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "box-shadow .2s" }} onMouseEnter={e => e.target.style.boxShadow = `0 6px 20px ${C.orange}40`} onMouseLeave={e => e.target.style.boxShadow = ""}>Join Now</button>}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "2px", background: menuOpen ? C.orange : C.text, transition: "all .3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: menuOpen ? C.orange : C.text, transition: "all .3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: menuOpen ? C.orange : C.text, transition: "all .3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "" }} />
            </button>
          )}
        </div>
      </nav>
      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: "68px", left: 0, right: 0, bottom: 0, zIndex: 199, background: "rgba(5,5,10,0.99)", backdropFilter: "blur(20px)", animation: "menuSlide .3s ease", overflowY: "auto", padding: "32px 28px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
            {ALL_PAGES.map((p, i) => (
              <button key={p} onClick={() => go(p)} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,6vw,40px)", letterSpacing: "2px", textAlign: "left", color: current === p ? C.orange : C.text, background: "none", border: "none", cursor: "pointer", padding: "11px 0", borderBottom: `1px solid ${C.border}`, animation: `fadeUp .4s ease ${i * .04}s both` }}>{p}</button>
            ))}
          </div>
          <button onClick={() => { openWaitlist("Mobile Nav"); setMenuOpen(false); }} style={{ width: "100%", fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", letterSpacing: "3px", padding: "16px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer" }}>Join Now</button>
        </div>
      )}
    </>
  );
}

// --------- FOOTER ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Footer({ setPage, openWaitlist }) {
  const w = useWindowWidth();
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };
  const cols = [
    { title: "Platform", links: ["About", "Team", "Marketplace"] },
    { title: "Business", links: ["Contact"] },
    { title: "Company", links: ["Jobs", "Press", "Safety"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
  ];
  return (
    <footer style={{ background: C.bg2, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: w < 600 ? "48px 20px" : "56px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: w < 600 ? "1fr 1fr" : w < 960 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr", gap: "36px", marginBottom: "52px" }}>
          <div>
            <button onClick={() => go("home")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "22px", letterSpacing: "3px", color: C.orange, background: "none", border: "none", cursor: "pointer", marginBottom: "14px", display: "block" }}>VIBECIRCLES</button>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, lineHeight: 1.7, maxWidth: "180px", marginBottom: "18px" }}>Where creators, cities, events, and businesses collide in real life.</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: "30px", height: "30px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color .2s,background .2s,color .2s", textDecoration: "none", color: C.text }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "transparent"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "3px", color: C.orange, marginBottom: "14px" }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                {col.links.map(l => (
                  <button key={l} onClick={() => go(l)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, background: "none", border: "none", cursor: "pointer", textAlign: "left", transition: "color .2s", padding: 0 }}
                    onMouseEnter={e => e.target.style.color = C.text}
                    onMouseLeave={e => e.target.style.color = C.dimmer}
                  >{l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "22px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>(c) 2026 VibeCircles (Pty) Ltd - Making energy visible.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms", "Cookies"].map(l => (
              <button key={l} onClick={() => go(l)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, cursor: "pointer", background: "none", border: "none", padding: 0, transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = C.orange}
                onMouseLeave={e => e.target.style.color = C.dimmer}
              >{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// HOME PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TESTIMONIALS = [
  { quote: "VibeCircles changed how I grow as a creator. I booked my first brand deal in 3 days and my local following tripled in a month.", name: "Jordan Lee", role: "Music Creator - Johannesburg", avatar: "MIC", color: C.orange },
  { quote: "We ran a geo-targeted campaign for our pop-up and got 800% more foot traffic than our Instagram ads. The map placement is unreal.", name: "NEON BREW CO.", role: "F&B Brand - South Africa", avatar: "DRINK", color: C.pink },
  { quote: "Campus Ambassadors actually show up. Our gym promo hit 14 campuses in 3 weeks - students were genuinely hyped.", name: "Pulse Fitness", role: "Health Brand - SA Campuses", avatar: "BOLT", color: C.blue },
  { quote: "Nothing has ever connected me to real people in my city like VibeCircles. It's the only platform where I feel seen.", name: "Mia Torres", role: "Visual Artist - Cape Town", avatar: "ART", color: C.purple },
];

function HomePage({ setPage, openWaitlist }) {
  const words = ["Pulse", "Gravity", "Energy", "Discovery", "Movement", "Culture", "Alive"];
  const [wi, setWi] = useState(0);
  const w = useWindowWidth();
  useEffect(() => { const id = setInterval(() => setWi(x => x + 1), 2200); return () => clearInterval(id); }, []);
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };
  return (
    <div style={{ background: C.bg }}>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: C.bg, position: "relative", overflow: "hidden", padding: `120px ${w < 600 ? "20px" : "48px"} 80px` }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.orange}05 1px,transparent 1px),linear-gradient(90deg,${C.orange}05 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Orb top="5%" left="-8%" size={600} opacity={0.12} /><Orb bottom="0%" right="-5%" size={500} color={C.pink} opacity={0.08} delay="3s" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "950px" }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "6px", color: C.orange, marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <span style={{ width: 40, height: 1, background: C.orange, display: "inline-block" }} />
            <span key={wi} style={{ display: "inline-block", animation: "fadeUp .4s ease forwards", opacity: 0 }}>{words[wi % words.length]}</span>
            <span style={{ width: 40, height: 1, background: C.orange, display: "inline-block" }} />
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(52px,10vw,118px)", lineHeight: .9, color: C.text, marginBottom: "16px" }}>
            IT'S NOT<br /><span style={{ WebkitTextStroke: "2px #FF6B00", color: "transparent" }}>SOCIAL MEDIA.</span><br />IT'S SOCIAL<br /><span style={{ color: C.orange }}>GRAVITY.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,2vw,19px)", color: C.dim, margin: "32px auto 48px", maxWidth: "520px", lineHeight: 1.75 }}>Where creators, cities, events, and businesses connect in real time.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}>
            <button onClick={() => openWaitlist("Creator Waitlist")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "16px", letterSpacing: "3px", padding: "16px 44px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 16px 40px ${C.orange}45`; }} onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>Join the Movement</button>
            <button onClick={() => go("Marketplace")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "16px", letterSpacing: "3px", padding: "16px 44px", background: "transparent", color: C.text, border: `1px solid ${C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.orange; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}>Explore Marketplace</button>
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ l: "About", p: "About", i: "----" }, { l: "Marketplace", p: "Marketplace", i: "----" }, { l: "Contact", p: "Contact", i: "------" }].map(({ l, p, i }) => (
              <button key={p} onClick={() => go(p)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", padding: "10px 18px", background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", color: C.dim, cursor: "pointer", display: "flex", alignItems: "center", gap: "7px", transition: "all .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.text; e.currentTarget.style.background = "rgba(255,107,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.dim; e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
              >{i} {l}</button>
            ))}
          </div>
        </div>
      </section>
      {/* WHAT WE ENVISION */}
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}><Tag>What we envision</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>The vibe is <span style={{ color: C.orange }}>real.</span></h2></Reveal>
          <div style={{ maxWidth: "720px" }}>
            <Reveal delay={0.1}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>VibeCircles envisions a digital world where people connect through shared energy, not just profiles and posts. We aim to build a platform where conversations feel human, communities feel like home, and creativity moves faster than algorithms. In a noisy internet chasing attention, VibeCircles exists to cultivate presence — a space where students, creators, hustlers, and everyday explorers can find their people, express their vibe, and turn moments into movements.</p></Reveal>
            <Reveal delay={0.2}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>VibeCircles isn't just a social platform; it's an ecosystem for belonging in the modern age — where technology amplifies authenticity instead of replacing it.</p></Reveal>
            <Reveal delay={0.3}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: 0 }}>The strange truth about online spaces is that the more "connected" we become, the more fragmented we often feel. A platform that optimizes for vibe — shared context, mood, and intent — is less about features and more about social physics: lowering friction between humans who were already meant to find each other.</p></Reveal>
          </div>
        </div>
      </section>
      {/* BRAND MARQUEE */}
      <div style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "18px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, x) => ["NEON BREW CO.", "--", "APEX STREETWEAR", "--", "SOLSTICE FESTIVAL", "--", "PULSE FITNESS", "--", "URBAN EATS", "--", "CTRL AUDIO", "--", "MIRAGE CLUB GROUP", "--"].map((wd, i) => (
            <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", color: wd === "--" ? C.orange : C.dimmer, marginRight: "28px" }}>{wd}</span>
          )))}
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ABOUT PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const STATS = [{ val: 50, suffix: "K+", label: "Creators" }, { val: 120, suffix: "+", label: "Cities" }, { val: 2, suffix: "M+", label: "Events Hosted" }, { val: 98, suffix: "%", label: "Energy" }];
const MANIFESTO = ["Culture should be visible.", "Creators deserve gravity.", "Businesses should feel human.", "Maps are more powerful than feeds.", "Real life matters."];
function StatCard({ val, suffix, label, active }) {
  const count = useCounter(val, 1800, active);
  return (
    <div style={{ padding: "36px 28px", background: "rgba(255,107,0,0.04)", border: `1px solid ${C.border}`, borderRadius: "4px", textAlign: "center" }}>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,5vw,60px)", lineHeight: 1, background: "linear-gradient(90deg,#FF6B00,#FF2D78,#FF6B00)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s linear infinite" }}>{count}{suffix}</div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: C.dim, marginTop: "8px" }}>{label}</div>
    </div>
  );
}
function AboutPage({ openWaitlist }) {
  const [sRef, sInView] = useInView(.3);
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="About VibeCircles" title="We build infrastructure" accent="for modern city culture." sub="Not just online conversations --- offline moments. From campus pop-ups to club nights." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }}><Reveal style={{ marginBottom: "52px" }}><Tag>By the numbers</Tag></Reveal><div ref={sRef} className="grid-4">{STATS.map((s, i) => <StatCard key={i} {...s} active={sInView} />)}</div></div></section>
      <Divider />
      <section className="sec-pad" style={{ position: "relative", overflow: "hidden" }}><Orb top="20%" left="-8%" size={400} opacity={0.09} /><div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2"><div><Reveal><Tag>Mission</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,48px)", color: C.text, lineHeight: 1.05, margin: "16px 0 18px" }}>Turn digital energy into<br /><span style={{ color: C.orange }}>real-world connection.</span></h2><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8 }}>VibeCircles connects people not just by what they post --- but by where they are, what they love, and what's happening right now.</p></Reveal></div><div><Reveal delay={.15}><Tag>Vision</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,48px)", color: C.text, lineHeight: 1.05, margin: "16px 0 18px" }}>A world where every city has<br /><span style={{ color: C.orange }}>a visible heartbeat.</span></h2><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8 }}>We're building the living map of culture --- the layer on top of the city that shows you where energy actually lives.</p></Reveal></div></div></section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1000px", margin: "0 auto" }}><Reveal style={{ marginBottom: "44px" }}><Tag>Manifesto</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, marginTop: "16px", lineHeight: 1 }}>We <span style={{ color: C.orange }}>believe</span></h2></Reveal>{MANIFESTO.map((line, i) => <Reveal key={i} delay={i * .09}><div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "22px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(22px,3.5vw,42px)", color: C.text, flex: 1 }}>{line}</div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "11px", letterSpacing: "3px", color: C.orange, opacity: .6 }}>0{i + 1}</div></div></Reveal>)}</div></section>
      <Divider />
      <section className="sec-pad"><div style={{ maxWidth: "1100px", margin: "0 auto" }}><Reveal style={{ marginBottom: "48px" }}><Tag>What we envision</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,4vw,52px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>The vibe is <span style={{ color: C.orange }}>real.</span></h2></Reveal><div style={{ maxWidth: "720px" }}><Reveal delay={0.1}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>VibeCircles envisions a digital world where people connect through shared energy, not just profiles and posts. We aim to build a platform where conversations feel human, communities feel like home, and creativity moves faster than algorithms. In a noisy internet chasing attention, VibeCircles exists to cultivate presence — a space where students, creators, hustlers, and everyday explorers can find their people, express their vibe, and turn moments into movements.</p></Reveal><Reveal delay={0.2}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>VibeCircles isn't just a social platform; it's an ecosystem for belonging in the modern age — where technology amplifies authenticity instead of replacing it.</p></Reveal><Reveal delay={0.3}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: 0 }}>The strange truth about online spaces is that the more "connected" we become, the more fragmented we often feel. A platform that optimizes for vibe — shared context, mood, and intent — is less about features and more about social physics: lowering friction between humans who were already meant to find each other.</p></Reveal></div></div></section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2, position: "relative", overflow: "hidden" }}><Orb bottom="-20%" right="-5%" size={500} color={C.pink} opacity={0.08} delay="2s" /><div style={{ maxWidth: "780px", margin: "0 auto", position: "relative" }}><Reveal><Tag>Founder's Story</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, margin: "16px 0 36px" }}>What if maps<br /><span style={{ color: C.orange }}>were alive?</span></h2></Reveal>{["VibeCircles started with a simple realization: social media shows opinions --- but not what's happening around you.", "Scrolling felt endless. Cities felt invisible. Events felt disconnected.", "So we imagined something different. What if social media had a pulse? What if creators could light up a city?", "VibeCircles was built to connect digital expression to physical reality. We're not chasing trends. We're building infrastructure for culture."].map((p, i) => <Reveal key={i} delay={i * .1}><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: i === 1 ? "20px" : "17px", fontStyle: i === 1 ? "italic" : "normal", color: i === 0 ? C.dim : C.dim, lineHeight: 1.8, marginBottom: "18px" }}>{p}</p></Reveal>)}</div></section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TEAM PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TEAM = [
  { name: "Marcus Webb", role: "CEO & Co-Founder", dept: "Leadership", emoji: "----", quote: "We're not building an app. We're building the infrastructure for how cities feel alive.", bio: "Former urban planner turned tech founder. Marcus spent 8 years mapping city culture before deciding maps should move in real time.", color: C.orange },
  { name: "Layla Chen", role: "CTO & Co-Founder", dept: "Engineering", emoji: "------", quote: "The hardest technical problems are always the most human ones.", bio: "Ex-Google Maps engineer. Layla designed the real-time geo-layer that powers VibeCircle's living map system.", color: C.blue },
  { name: "Devon Price", role: "Head of Design", dept: "Design", emoji: "----", quote: "If the design doesn't make you feel something, we start over.", bio: "Previously led design at Spotify and Snap. Devon's philosophy: every pixel should have a pulse.", color: C.pink },
  { name: "Amara Osei", role: "Head of Creator Partnerships", dept: "Creators", emoji: "---", quote: "Creators aren't users. They're the energy source. Treat them like it.", bio: "Built creator programs at TikTok and YouTube. Amara signed VibeCircle's first 10,000 creators in 90 days.", color: C.gold },
  { name: "Rishi Kapoor", role: "Head of Growth", dept: "Growth", emoji: "----", quote: "Growth that doesn't compound isn't growth. It's just noise.", bio: "3x YC startup growth lead. Rishi built the ambassador network that took VibeCircle to 50 cities in one semester.", color: C.purple },
  { name: "Sofia Reyes", role: "Head of Business Dev", dept: "Business", emoji: "----", quote: "Every brand has a vibe. Our job is to help them find it and amplify it.", bio: "Ex-Salesforce enterprise sales, now building the business ecosystem that funds VibeCircle's creator economy.", color: C.orange },
];
function TeamPage({ openWaitlist, setPage }) {
  const [active, setActive] = useState(null);
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="The Team" title="Meet the builders" accent="of the vibe." sub="Developers, designers, strategists, creatives --- building a living ecosystem, not just an app." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }}><Reveal style={{ marginBottom: "52px" }}><Tag>Core Team</Tag></Reveal><div className="grid-3" style={{ gap: "18px" }}>{TEAM.map((m, i) => <Reveal key={i} delay={i * .08}><div onClick={() => setActive(active === i ? null : i)} style={{ padding: "30px 26px", background: active === i ? `${m.color}0A` : "rgba(0,0,0,0.02)", border: `1px solid ${active === i ? m.color + "50" : C.border}`, borderRadius: "4px", cursor: "pointer", transition: "all .3s", height: "100%" }} onMouseEnter={e => { if (active !== i) { e.currentTarget.style.borderColor = m.color + "30"; e.currentTarget.style.background = `${m.color}05`; } }} onMouseLeave={e => { if (active !== i) { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; } }}><div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `${m.color}20`, border: `2px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "21px", flexShrink: 0 }}>{m.emoji}</div><div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 600, color: C.text }}>{m.name}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: m.color, marginTop: "2px" }}>{m.role}</div></div></div><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontStyle: "italic", color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: active === i ? "14px" : "0" }}>"{m.quote}"</p>{active === i && <div style={{ animation: "fadeUp .3s ease" }}><div style={{ height: "1px", background: `${m.color}30`, margin: "14px 0" }} /><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7 }}>{m.bio}</p></div>}</div></Reveal>)}</div></div></section>
      <Divider />
      <section className="sec-pad"><div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2"><div><Reveal><Tag>How we work</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,52px)", color: C.text, lineHeight: 1, margin: "16px 0 20px" }}>Culture isn't built in<br /><span style={{ color: C.orange }}>conference rooms.</span></h2><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8 }}>We work embedded in cities. We ship fast. We talk to creators and businesses every day. We build what we'd actually want to use.</p></Reveal></div><div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{[["----", "Remote-first", "Work from the cities you're building for."], ["---", "Ship weekly", "Real output, real feedback, real iteration."], ["----", "Direct impact", "No layers. Your work ships to 50K+ users."], ["----", "Equity for all", "Every full-time employee is an owner."]].map(([ic, t, d], i) => <Reveal key={i} delay={i * .08}><div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "18px 22px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}><span style={{ fontSize: "18px" }}>{ic}</span><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "16px", color: C.text }}>{t}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim, marginTop: "3px" }}>{d}</div></div></div></Reveal>)}</div></div></section>
      <Divider />
      <section className="sec-pad-sm" style={{ background: C.bg2, textAlign: "center" }}><Reveal><Tag>Join us</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,5vw,52px)", color: C.text, lineHeight: 1, margin: "16px auto 20px", maxWidth: "500px" }}>Want to be on this page?<br /><span style={{ color: C.orange }}>No open roles right now.</span></h2><div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}><button onClick={() => { setPage("Jobs"); window.scrollTo(0, 0); }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer" }}>Careers</button><button onClick={() => openWaitlist("Team Interest")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: "transparent", color: C.text, border: `1px solid ${C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.orange; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}>Join Waitlist</button></div></Reveal></section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JOBS PAGE --- RICH ROLES
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const ROLES_DISABLED = true;
const ROLES = [
  {
    title: "Frontend Engineer", dept: "Engineering", type: "Full-Time", level: "Mid---Senior",
    location: "Remote (South Africa)", salary: " equity",
    summary: "Build the interfaces that make cities feel alive. You'll own the core consumer product --- the living map, creator feeds, real-time streams, and brand marketplace --- from design system to shipped pixel.",
    responsibilities: ["Architect and build complex React/TypeScript components for the live city map and creator tools", "Own the geo-visualization layer using Mapbox GL and WebGL", "Collaborate with Design to implement pixel-perfect motion and micro-interactions", "Drive performance optimization --- the map must feel instant at city scale", "Lead code reviews and raise engineering quality standards across the frontend team", "Contribute to our design system and component library", "Work directly with users: join creator calls, watch sessions, ship fast based on real feedback"],
    requirements: ["4+ years of React and TypeScript production experience", "Deep knowledge of browser performance, layout, and rendering pipelines", "Experience with mapping libraries (Mapbox GL, Leaflet, or similar)", "Strong CSS fundamentals --- you know why it works, not just that it works", "Experience with WebSockets or real-time data (we move fast)", "Portfolio with shipped consumer products you're proud of"],
    niceToHave: ["WebGL or canvas rendering experience", "React Native / cross-platform experience", "Experience building at scale (1M+ DAU products)"],
    techStack: ["React 18", "TypeScript", "Mapbox GL", "WebGL", "Framer Motion", "TanStack Query", "Vite", "Vitest"],
    deadline: "Rolling",
  },
  {
    title: "Backend Engineer", dept: "Engineering", type: "Full-Time", level: "Mid---Senior",
    location: "Remote (South Africa)", salary: "R1.0m---R1.5m + equity",
    summary: "Power the infrastructure that makes cities discoverable in real time. You'll build the APIs, real-time event systems, and data pipelines that serve 50K+ creators and millions of map interactions per day.",
    responsibilities: ["Design and build high-throughput APIs for the map, feeds, events, and creator tools", "Architect real-time systems using WebSockets and pub/sub for live map updates", "Build and optimize the geo-spatial query layer (PostGIS) powering location-based discovery", "Own database design, query performance, and data integrity at scale", "Collaborate on the brand marketplace matching algorithm", "Implement robust authentication, permissions, and creator/business role systems", "Set up and maintain observability, alerting, and incident runbooks"],
    requirements: ["4+ years of backend engineering in Python, Go, or Node.js", "Deep knowledge of PostgreSQL with PostGIS or equivalent spatial databases", "Experience designing RESTful and/or GraphQL APIs consumed by millions", "Solid understanding of caching (Redis), queuing (BullMQ/Kafka), and async architecture", "Experience with cloud infrastructure (AWS or GCP)", "You've debugged a production outage at 2am and shipped a postmortem by 10am"],
    niceToHave: ["Geospatial data experience at scale", "Experience with real-time event streaming (Kafka, Kinesis)", "Machine learning pipeline exposure"],
    techStack: ["Node.js / Python", "PostgreSQL + PostGIS", "Redis", "AWS", "Docker / Kubernetes", "Kafka"],
    deadline: "Rolling",
  },
  {
    title: "UX Designer", dept: "Design", type: "Full-Time", level: "Mid",
    location: "Remote (South Africa)", salary: "R750k---R1.05m + equity",
    summary: "Design experiences that feel as alive as the cities we're mapping. Every flow you design will be used by creators building their livelihoods and businesses turning their neighborhoods into digital gravity.",
    responsibilities: ["Own end-to-end design for creator tools --- from concept to shipped product", "Run user research: creator interviews, usability sessions, synthesis", "Design the VibeCircle mobile and web experience across map, feeds, and marketplace", "Build and maintain a living design system in Figma", "Partner with engineers to ship interactions that actually match your intent", "Define motion principles and microinteraction standards", "Present work clearly and defend decisions with user data --- not just aesthetics"],
    requirements: ["3+ years of UX/product design at a consumer app or marketplace", "Strong portfolio demonstrating complex interaction design and systems thinking", "Expert-level Figma (components, variants, auto-layout, prototyping)", "Experience running your own user research", "Ability to work in a fast-moving environment where designs ship in days, not months", "Strong written communication --- most design critiques happen async"],
    niceToHave: ["Experience with map-based UI or location products", "Motion design skills (After Effects, Rive, or Framer)", "Basic HTML/CSS knowledge"],
    techStack: ["Figma", "Maze", "Hotjar", "Notion", "Loom"],
    deadline: "Rolling",
  },
  {
    title: "Growth Marketer", dept: "Marketing", type: "Full-Time", level: "Mid",
    location: "Remote (South Africa)", salary: "R600k---R900k + equity",
    summary: "Own the growth engine that brings creators, businesses, and cities onto VibeCircle. You'll identify and scale the acquisition channels that compound --- not just ones that spike.",
    responsibilities: ["Build and optimize paid and organic acquisition funnels across creator and business verticals", "Own SEO strategy and content marketing pipeline from briefs to distribution", "Design and run A/B tests on landing pages, emails, and in-app messaging", "Manage the campus ambassador program across 50+ universities", "Analyze cohort data to identify and fix retention leaks", "Collaborate with creators on co-marketing and city launch campaigns", "Build weekly growth dashboards and present findings to the leadership team"],
    requirements: ["3+ years in growth or performance marketing at a consumer or marketplace startup", "Strong analytical skills --- comfortable with SQL and attribution modeling", "Experience managing paid channels (Meta, TikTok, Google) with real budgets", "Track record of growing a user base, not just traffic", "Exceptional written communication and copywriting instincts"],
    niceToHave: ["Experience marketing to Gen Z creators or college students", "Influencer / creator marketing background", "City-based launch playbook experience"],
    techStack: ["Google Analytics 4", "Mixpanel", "Segment", "Meta Ads", "HubSpot", "Notion"],
    deadline: "Rolling",
  },
  {
    title: "Campus Ambassador", dept: "Community", type: "Part-Time", level: "Entry",
    location: "On-campus (South African Universities)", salary: "R150---R220/hr + performance bonuses",
    summary: "Be the pulse of VibeCircle on your campus. You're not promoting an app --- you're launching a movement. Campus Ambassadors are VibeCircle's most powerful distribution channel.",
    responsibilities: ["Drive creator signups and map adoption among students on your campus", "Organize and host VibeCircle-branded events and activations", "Build relationships with student organizations, campus media, and event planners", "Create authentic content from campus life and post to VibeCircle", "Submit weekly reports: signups, events, content engagement", "Identify and onboard local businesses and venues near campus", "Be the face of VibeCircle in your city"],
    requirements: ["Currently enrolled at a South African university (junior or senior preferred)", "Genuine social presence and credibility on your campus", "Organized, self-motivated, and able to hit weekly targets independently", "Strong communication skills --- you'll represent the brand publicly", "Prior event planning or brand ambassador experience is a plus, not required"],
    niceToHave: ["Greek life, student government, or sports organization involvement", "Content creation background", "Prior startup or community-building experience"],
    techStack: ["VibeCircle app", "Notion (reporting)", "Canva (content)"],
    deadline: "Rolling --- cohort starts each semester",
  },
  {
    title: "Creator Partnership Intern", dept: "Creators", type: "Internship", level: "Entry",
    location: "Remote (South Africa)", salary: "R150---R180/hr",
    summary: "Help onboard, support, and scale the creator ecosystem that is the lifeblood of VibeCircle. You'll work directly with the Head of Creator Partnerships to find, activate, and retain the creators who make cities come alive.",
    responsibilities: ["Source and outreach to creators in our priority cities", "Manage the creator onboarding pipeline from application to first post", "Build and maintain creator relationships --- you're their primary point of contact", "Assist with brand marketplace matching between creators and brand deals", "Track creator performance metrics and surface insights to the team", "Help create creator-facing documentation, guides, and onboarding flows", "Support the planning and execution of creator events and activations"],
    requirements: ["Currently enrolled or recently graduated (within 12 months)", "Passionate about creator culture, city life, and social media", "Excellent written communication and relationship-building instincts", "Organized and detail-oriented --- you'll manage multiple creators at once", "Familiar with Instagram, TikTok, and content creation workflows"],
    niceToHave: ["Personal experience as a content creator or community builder", "Talent management or influencer marketing internship experience", "Familiarity with creator economy tools and platforms"],
    techStack: ["VibeCircle app", "Notion", "Airtable", "Slack"],
    deadline: "Rolling --- 3-month paid internship with potential to extend",
  },
  {
    title: "Data Engineer", dept: "Engineering", type: "Full-Time", level: "Senior",
    location: "Remote (South Africa)", salary: "R1.1m---R1.7m + equity",
    summary: "Build the data infrastructure that tells us how cities move. Your pipelines will power creator analytics, business dashboards, map discovery algorithms, and real-time engagement metrics at scale.",
    responsibilities: ["Design and maintain scalable data pipelines from event ingestion to analytical tables", "Build the real-time analytics infrastructure behind creator and business dashboards", "Own the data warehouse (Snowflake/BigQuery) --- schema design, quality, governance", "Partner with product and engineering to instrument new features with correct event tracking", "Build geo-spatial analytics capabilities --- city heatmaps, movement patterns, discovery funnels", "Create internal BI dashboards for leadership, growth, and creator partnerships teams", "Define data quality standards and lead the build-out of our monitoring layer"],
    requirements: ["5+ years of data engineering experience", "Expert SQL and proficiency in Python for data pipelines", "Experience with a modern data warehouse (Snowflake, BigQuery, or Redshift)", "Strong understanding of streaming vs batch processing trade-offs", "Experience with dbt, Airflow, or similar orchestration tools", "Track record of building data products used by non-technical stakeholders"],
    niceToHave: ["Geo-spatial analytics or PostGIS experience", "Real-time streaming with Kafka or Kinesis", "ML feature engineering experience"],
    techStack: ["dbt", "Snowflake", "Airflow", "Python", "Kafka", "Looker", "PostGIS"],
    deadline: "Rolling",
  },
  {
    title: "Brand Partnerships Manager", dept: "Business", type: "Full-Time", level: "Mid---Senior",
    location: "Johannesburg or Cape Town (Hybrid)", salary: "R750k---R1.1m + commission + equity",
    summary: "Close and grow the brand relationships that fund VibeCircle's creator economy. You'll own the full sales cycle --- from initial outreach to signed deal to campaign success --- across restaurants, venues, fashion brands, and event companies.",
    responsibilities: ["Own a pipeline of 50+ brand opportunities across your assigned verticals", "Run end-to-end sales cycles: outreach, demos, proposals, negotiation, close", "Build long-term relationships with brand and agency partners --- not transactional deals", "Partner with the creator team to structure brand-creator match campaigns", "Collaborate with product to shape brand marketplace features based on partner feedback", "Hit and exceed quarterly revenue targets", "Represent VibeCircle at industry events, trade shows, and creator economy conferences"],
    requirements: ["3+ years in brand partnerships, media sales, or sponsorship sales", "Proven track record of closing deals above R900k", "Strong existing relationships in fashion, F&B, entertainment, or tech", "Excellent written and verbal communication --- you close with confidence", "Comfort operating in an early-stage startup with limited process"],
    niceToHave: ["Creator economy or influencer marketing sales experience", "Experience selling geo-targeted or experiential marketing products", "Existing relationships with CMOs or brand managers at mid-market brands"],
    techStack: ["Salesforce", "HubSpot", "Notion", "Looker", "Slack"],
    deadline: "Rolling",
  },
];
const DEPT_COLORS = { Engineering: C.orange, Design: C.blue, Marketing: C.pink, Community: C.purple, Creators: C.gold, Business: C.orange };
function JobsPage({ openWaitlist, addToast }) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [jobTab, setJobTab] = useState({});
  const [applyOpen, setApplyOpen] = useState(null);
  const depts = ["All", ...Object.keys(DEPT_COLORS)];
  const filtered = filter === "All" ? ROLES : ROLES.filter(r => r.dept === filter);
  const getTab = (i) => jobTab[i] || "Overview";
  const setTab = (i, t) => setJobTab(p => ({ ...p, [i]: t }));
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Careers" title="We don't hire for roles." accent="We hire builders." sub="Ambitious, fast-moving, impact-driven. Join the team building infrastructure for modern city culture." />
      <Divider />
      {/* PERKS */}
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }}><Reveal style={{ marginBottom: "44px" }}><Tag>What You Get</Tag></Reveal><div className="grid-4">{[{ icon: "-------", t: "Real Ownership", d: "Every role carries real responsibility. No busywork, no hand-holding." }, { icon: "----", t: "Equity Opportunities", d: "Build something you co-own. Equity offered across all full-time roles." }, { icon: "----", t: "Meaningful Impact", d: "Your work shapes how cities move. Every line of code matters." }, { icon: "---", t: "Move Fast", d: "We ship, learn, iterate. No corporate slowdown." }].map((p, i) => <Reveal key={i} delay={i * .1}><div style={{ padding: "28px 22px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", height: "100%", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; e.currentTarget.style.transform = ""; }}><div style={{ fontSize: "24px", marginBottom: "12px" }}>{p.icon}</div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", color: C.text, marginBottom: "8px" }}>{p.t}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7 }}>{p.d}</div></div></Reveal>)}</div></div></section>
      <Divider />
      {/* ROLES */}
      <section className="sec-pad" style={{ position: "relative", overflow: "hidden" }}>
        <Orb top="0%" right="-5%" size={450} opacity={0.08} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "36px" }}><Tag>Open Roles</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>Find your position<br /><span style={{ color: C.orange }}>in the vibe.</span></h2></Reveal>
          {!ROLES_DISABLED && ROLES.length > 0 && (
            <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "32px" }}>
              {depts.map(d => <button key={d} onClick={() => { setFilter(d); setExpanded(null); }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "2px", padding: "8px 16px", background: filter === d ? (DEPT_COLORS[d] || C.orange) : "transparent", color: filter === d ? C.textOnAccent : C.dim, border: `1px solid ${filter === d ? (DEPT_COLORS[d] || C.orange) : C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }}>{d}</button>)}
            </div>
          )}
          {ROLES_DISABLED || ROLES.length === 0 ? (
            <div style={{ padding: "22px 24px", background: "rgba(0,0,0,0.03)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", letterSpacing: "2px", color: C.orange, marginBottom: "8px" }}>No openings at the moment</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6 }}>We are not hiring right now. Check back soon.</div>
            </div>
          ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {filtered.map((role, i) => {
              const isOpen = expanded === i;
              const dc = DEPT_COLORS[role.dept] || C.orange;
              const tab = getTab(i);
              const TABS = ["Overview", "Responsibilities", "Requirements", "Stack & Perks"];
              return (
                <Reveal key={role.title + filter} delay={i * .05}>
                  <div style={{ background: isOpen ? `${dc}07` : "rgba(0,0,0,0.02)", border: `1px solid ${isOpen ? dc + "50" : C.border}`, borderRadius: "4px", overflow: "hidden", transition: "all .3s" }}>
                    {/* HEADER ROW */}
                    <div onClick={() => setExpanded(isOpen ? null : i)} style={{ padding: "20px 26px", display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.text, marginBottom: "6px" }}>{role.title}</div>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                          <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "10px", letterSpacing: "2px", color: dc, background: `${dc}18`, padding: "3px 9px", borderRadius: "2px" }}>{role.dept}</span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>--</span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer }}>{role.type}</span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>--</span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer }}>{role.location}</span>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>--</span>
                          <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "1px", color: C.orange }}>{role.salary}</span>
                        </div>
                      </div>
                      <div style={{ width: "26px", height: "26px", border: `1px solid ${isOpen ? dc : C.border}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: isOpen ? dc : C.dimmer, fontSize: "16px", transition: "all .3s", transform: isOpen ? "rotate(45deg)" : "none", flexShrink: 0, fontWeight: 300 }}>+</div>
                    </div>
                    {/* EXPANDED BODY */}
                    {isOpen && (
                      <div style={{ padding: "0 26px 28px", animation: "fadeUp .3s ease" }}>
                        <div style={{ height: "1px", background: `${dc}25`, marginBottom: "24px" }} />
                        {/* INTERNAL TABS */}
                        <div style={{ display: "flex", gap: "4px", marginBottom: "24px", flexWrap: "wrap" }}>
                          {TABS.map(t => (
                            <button key={t} onClick={() => setTab(i, t)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", letterSpacing: ".5px", padding: "7px 14px", background: tab === t ? dc : "rgba(0,0,0,0.04)", color: tab === t ? C.textOnAccent : C.dim, border: `1px solid ${tab === t ? dc : C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }}>{t}</button>
                          ))}
                        </div>
                        {/* TAB CONTENT */}
                        {tab === "Overview" && (
                          <div>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.8, marginBottom: "20px" }}>{role.summary}</p>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
                              {[{ l: "---- Location", v: role.location }, { l: "--- Type", v: role.type }, { l: "---- Level", v: role.level }, { l: "---- Deadline", v: role.deadline }].map(({ l, v }) => (
                                <div key={l} style={{ padding: "10px 16px", background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "3px" }}>
                                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dimmer, letterSpacing: "1px", textTransform: "uppercase" }}>{l}</div>
                                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, marginTop: "3px", fontWeight: 600 }}>{v}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {tab === "Responsibilities" && (
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {role.responsibilities.map((r, idx) => (
                              <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 16px", background: "rgba(0,0,0,0.02)", borderRadius: "3px", border: `1px solid ${C.border}` }}>
                                <span style={{ color: dc, fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>---</span>
                                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6 }}>{r}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {tab === "Requirements" && (
                          <div>
                            <div style={{ marginBottom: "20px" }}>
                              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", color: dc, marginBottom: "12px" }}>Requirements</div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {role.requirements.map((r, idx) => (
                                  <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <span style={{ color: dc, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>---</span>
                                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6 }}>{r}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {role.niceToHave && <div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", color: C.dimmer, marginBottom: "12px" }}>Nice to Have</div><div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{role.niceToHave.map((r, idx) => <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ color: C.dimmer, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>---</span><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6 }}>{r}</span></div>)}</div></div>}
                          </div>
                        )}
                        {tab === "Stack & Perks" && (
                          <div>
                            {role.techStack && <div style={{ marginBottom: "24px" }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", color: dc, marginBottom: "12px" }}>Tech Stack</div><div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>{role.techStack.map(t => <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.text, padding: "6px 14px", background: `${dc}15`, border: `1px solid ${dc}30`, borderRadius: "2px" }}>{t}</span>)}</div></div>}
                            <div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", color: dc, marginBottom: "12px" }}>Benefits</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>{["Equity for all full-time roles", "Remote-first & flexible hours", "R30,000/yr learning budget", "Medical aid stipend", "Home office stipend (R7,500)", "Quarterly team retreats", "Unlimited PTO (we mean it)", "Free VibeCircle Orbit plan"].map(b => <div key={b} style={{ display: "flex", gap: "8px", alignItems: "center", padding: "10px 14px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "3px" }}><span style={{ color: dc, fontSize: "12px", flexShrink: 0 }}>---</span><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim }}>{b}</span></div>)}</div></div>
                          </div>
                        )}
                        <div style={{ marginTop: "24px" }}>
                          <button
                            onClick={() => setApplyOpen(applyOpen === i ? null : i)}
                            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", padding: "12px 28px", background: dc, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "box-shadow .2s,transform .2s", marginRight: "10px" }}
                            onMouseEnter={e => { e.target.style.boxShadow = `0 8px 24px ${dc}45`; e.target.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.target.style.boxShadow = ""; e.target.style.transform = ""; }}
                          >{applyOpen === i ? "Close Form" : "Apply Now"}</button>
                          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>or email <a href="mailto:careers@vibecircles.co.za" style={{ color: dc, textDecoration: "none" }}>careers@vibecircles.co.za</a></span>
                        </div>
                        {applyOpen === i && (
                          <div style={{ marginTop: "20px", padding: "20px", background: "rgba(0,0,0,0.02)", border: `1px solid ${dc}30`, borderRadius: "4px", animation: "fadeUp .3s ease" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px", marginBottom: "12px" }}>
                              {[
                                { label: "Full Name", type: "text", placeholder: "Alex Rivera" },
                                { label: "Email", type: "email", placeholder: "alex@email.com" },
                                { label: "Location", type: "text", placeholder: "City, Country" },
                                { label: "Portfolio / LinkedIn", type: "url", placeholder: "https://" },
                              ].map((f) => (
                                <label key={f.label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, letterSpacing: "1px", textTransform: "uppercase" }}>{f.label}</span>
                                  <input type={f.type} placeholder={f.placeholder} style={{ height: "42px", padding: "0 12px", background: C.bg3, border: `1px solid ${C.border}`, color: C.text, borderRadius: "3px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", outline: "none" }} />
                                </label>
                              ))}
                            </div>
                            <label style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, letterSpacing: "1px", textTransform: "uppercase" }}>Why VibeCircle?</span>
                              <textarea rows={4} placeholder="Tell us what you want to build." style={{ padding: "10px 12px", background: C.bg3, border: `1px solid ${C.border}`, color: C.text, borderRadius: "3px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", outline: "none", resize: "vertical" }} />
                            </label>
                            <label
                              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "14px 16px", background: "rgba(0,0,0,0.02)", border: `1px dashed ${dc}55`, borderRadius: "4px", cursor: "pointer", transition: "all .2s" }}
                              onMouseEnter={e => { e.currentTarget.style.background = `${dc}10`; e.currentTarget.style.borderColor = dc; }}
                              onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.02)"; e.currentTarget.style.borderColor = `${dc}55`; }}
                            >
                              <div>
                                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", color: dc }}>Upload CV</div>
                                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, marginTop: "4px" }}>PDF or DOCX -- up to 10MB</div>
                              </div>
                              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.text, background: `${dc}18`, border: `1px solid ${dc}40`, padding: "6px 12px", borderRadius: "3px" }}>Choose File</div>
                              <input type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} />
                            </label>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "16px", flexWrap: "wrap" }}>
                              <button
                                onClick={() => { addToast({ type: "success", title: "Application Received!", message: `We'll review your application for ${role.title} within 5 business days.` }); setApplyOpen(null); }}
                                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", padding: "12px 26px", background: dc, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "box-shadow .2s" }}
                                onMouseEnter={e => e.target.style.boxShadow = `0 8px 24px ${dc}45`}
                                onMouseLeave={e => e.target.style.boxShadow = ""}
                              >Submit Application</button>
                              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>We respond within 5 business days.</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
          )}
        </div>
      </section>
      <section style={{ background: C.orange, padding: "64px clamp(20px,6vw,64px)" }}><div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px,4vw,44px)", color: C.textOnAccent, lineHeight: 1 }}>Don't see your role?<br />Build your own.</div><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.6)", marginTop: "8px" }}>careers@vibecircles.co.za</p></div><button onClick={() => openWaitlist("Custom Role")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "14px 36px", background: C.bg, color: C.orange, border: "none", borderRadius: "2px", cursor: "pointer", transition: "transform .2s" }} onMouseEnter={e => e.target.style.transform = "translateY(-2px)"} onMouseLeave={e => e.target.style.transform = ""}>Get in Touch</button></div></section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MARKETPLACE PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const MARKETPLACE_BRANDS = [
  { id: 1, name: "NEON BREW CO.", category: "Food & Drink", budget: "R8K-R35K", type: "Sponsored Post", location: "Nationwide (South Africa)", badge: "HOT", desc: "Indie craft energy drink built for the late-night creator. Looking for authentic city-based creators to showcase our cans in real environments.", tags: ["Nightlife", "Creators", "Urban"], color: C.orange, slots: 12, filled: 8, logo: "JUICE" },
  { id: 2, name: "APEX STREETWEAR", category: "Fashion", budget: "R15K-R75K", type: "Event Collab", location: "Johannesburg, Cape Town, Durban", badge: "FEATURED", desc: "Premium streetwear brand launching new drops via pop-up events. Looking for city-embedded creators and venue partners.", tags: ["Fashion", "Events", "Pop-up"], color: C.pink, slots: 5, filled: 2, logo: "SNEAKER" },
  { id: 3, name: "PULSE FITNESS", category: "Health & Wellness", budget: "R5K-R25K", type: "Campus Campaign", location: "Top 30 SA Campuses", badge: "NEW", desc: "Need campus ambassadors and micro-influencers who can bring the energy to gyms, quads, and dorm halls.", tags: ["Campus", "Fitness", "Micro-Influencer"], color: C.blue, slots: 40, filled: 14, logo: "BOLT" },
  { id: 4, name: "MIRAGE NIGHTCLUB GROUP", category: "Entertainment", budget: "R25K-R120K", type: "Live Coverage", location: "Johannesburg, Cape Town, Durban", badge: "PREMIUM", desc: "3 of the hottest venues in South Africa need creators to capture the night in real time. Full creative freedom.", tags: ["Nightlife", "Live", "Premium"], color: C.purple, slots: 6, filled: 6, logo: "PARTY" },
  { id: 5, name: "URBAN EATS COLLECTIVE", category: "Food & Drink", budget: "R3K-R12K", type: "Food Review", location: "All Cities", badge: null, desc: "Independent restaurants looking for food creators to authentically review new menus and build local buzz.", tags: ["Food", "Local", "Review"], color: C.gold, slots: 30, filled: 11, logo: "NOODLE" },
  { id: 6, name: "CTRL AUDIO", category: "Tech", budget: "R12K-R45K", type: "Creator Kit", location: "Remote + Events", badge: "NEW", desc: "Next-gen wireless earbuds for creators on the move. We send free gear kits and pay for authentic in-the-wild content.", tags: ["Tech", "Gear", "Creator"], color: C.blue, slots: 20, filled: 7, logo: "AUDIO" },
  { id: 7, name: "NXXT LEVEL BARBERSHOP", category: "Beauty & Grooming", budget: "R4K-R16K", type: "Local Partnership", location: "Johannesburg, Pretoria, Durban", badge: null, desc: "Culture-forward barbershop chain looking for city creators to showcase the shop's vibe and craft.", tags: ["Local", "Culture", "Beauty"], color: C.orange, slots: 15, filled: 5, logo: "SCISSORS" },
  { id: 8, name: "SOLSTICE FESTIVAL", category: "Events", budget: "R40K-R180K", type: "Festival Coverage", location: "Cape Town, Western Cape", badge: "FEATURED", desc: "50,000 person music and culture festival needs a creator army. Full creative freedom. Full access passes.", tags: ["Festival", "Music", "Events"], color: C.pink, slots: 25, filled: 18, logo: "MUSIC" },
];
const MKT_CATS = ["All", "Food & Drink", "Fashion", "Health & Wellness", "Entertainment", "Tech", "Beauty & Grooming", "Events"];
const BADGE_COLORS = { "HOT": C.orange, "FEATURED": C.pink, "NEW": C.blue, "PREMIUM": C.purple };
function ProgressBar({ filled, slots, color }) {
  const pct = Math.round((filled / slots) * 100); const full = filled >= slots;
  return (<div style={{ marginTop: "10px" }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dimmer }}>{filled}/{slots} slots</span><span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "10px", letterSpacing: "2px", color: full ? C.pink : color }}>{full ? "FULL" : `${slots - filled} LEFT`}</span></div><div style={{ height: "3px", background: "rgba(0,0,0,0.08)", borderRadius: "2px", overflow: "hidden" }}><div style={{ height: "100%", width: `${pct}%`, background: full ? C.pink : color, borderRadius: "2px", transition: "width .6s ease" }} /></div></div>);
}
function BrandCard({ brand, onApply }) {
  const [h, setH] = useState(false); const full = brand.filled >= brand.slots;
  return (<div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? `${brand.color}08` : "rgba(0,0,0,0.02)", border: `1px solid ${h ? brand.color + "50" : C.border}`, borderRadius: "4px", padding: "24px", transition: "all .3s", transform: h ? "translateY(-4px)" : "none", display: "flex", flexDirection: "column", height: "100%", position: "relative", overflow: "hidden" }}>
    {h && <div style={{ position: "absolute", top: 0, right: 0, width: 90, height: 90, background: `radial-gradient(circle at top right,${brand.color}14,transparent 70%)`, pointerEvents: "none" }} />}
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}><div style={{ display: "flex", alignItems: "center", gap: "10px" }}><div style={{ width: "38px", height: "38px", borderRadius: "4px", background: `${brand.color}18`, border: `1px solid ${brand.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px" }}>{brand.logo}</div><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", color: C.text, letterSpacing: ".5px" }}>{brand.name}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dimmer, letterSpacing: "1px", textTransform: "uppercase", marginTop: "1px" }}>{brand.category}</div></div></div>{brand.badge && <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "9px", letterSpacing: "2px", padding: "3px 8px", borderRadius: "2px", background: `${BADGE_COLORS[brand.badge]}22`, border: `1px solid ${BADGE_COLORS[brand.badge]}60`, color: BADGE_COLORS[brand.badge], flexShrink: 0 }}>{brand.badge}</span>}</div>
    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7, flex: 1, marginBottom: "12px" }}>{brand.desc}</p>
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "12px" }}>{brand.tags.map(t => <span key={t} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dim, padding: "2px 8px", background: "rgba(0,0,0,0.05)", borderRadius: "2px" }}>#{t}</span>)}</div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", flexWrap: "wrap" }}><div style={{ display: "flex", gap: "12px" }}><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", color: brand.color }}>{brand.budget}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.dimmer, textTransform: "uppercase", letterSpacing: "1px" }}>Budget</div></div><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", color: C.text }}>{brand.type}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.dimmer, textTransform: "uppercase", letterSpacing: "1px" }}>Type</div></div></div><button onClick={() => !full && onApply(brand)} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "11px", letterSpacing: "2px", padding: "7px 14px", background: full ? "transparent" : brand.color, color: full ? C.dimmer : C.textOnAccent, border: full ? `1px solid ${C.border}` : "none", borderRadius: "2px", cursor: full ? "not-allowed" : "pointer", transition: "all .2s", flexShrink: 0 }}>{full ? "Full" : "Apply"}</button></div>
    <ProgressBar filled={brand.filled} slots={brand.slots} color={brand.color} />
    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "9px" }}><span style={{ fontSize: "10px" }}>----</span><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dim }}>{brand.location}</span></div>
  </div>);
}
function ApplyModal({ brand, onClose, addToast }) {
  const [step, setStep] = useState(1); const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", handle: "", city: "", audience: "", why: "" });
  if (!brand) return null;
  const submit = async () => {
    if (!form.name || !form.handle) return;
    setLoading(true);
    try { await fetch("https://formsubmit.co/ajax/info@vibecircles.co.za", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ _subject: `Brand Deal Application --- ${brand.name}`, _template: "table", ...form, brand: brand.name, deal: brand.type, budget: brand.budget }) }); } catch (e) { }
    setLoading(false); setStep(2);
    addToast({ type: "success", title: "Application sent!", message: `${brand.name} will respond within 48 hours.` });
  };
  return (<div style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(0,0,0,0.87)", backdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", animation: "fadeIn .2s ease" }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div style={{ background: C.bg, border: `1px solid ${brand.color}40`, borderRadius: "4px", padding: "40px", maxWidth: "480px", width: "100%", position: "relative", animation: "fadeUp .3s ease", maxHeight: "90vh", overflowY: "auto" }}>
      <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "18px", background: "none", border: "none", color: C.dim, fontSize: "20px", cursor: "pointer", lineHeight: 1 }}>--</button>
      {step === 1 ? (<><div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><div style={{ width: "42px", height: "42px", borderRadius: "4px", background: `${brand.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "19px" }}>{brand.logo}</div><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "17px", color: C.text }}>{brand.name}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: brand.color, letterSpacing: "1px" }}>{brand.type} -- {brand.budget}</div></div></div>
        <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "24px", color: C.text, marginBottom: "5px" }}>Apply for this deal</h3><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7, marginBottom: "20px" }}>Brands typically respond within 48 hours.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{[["name", "Your Name"], ["handle", "VibeCircle Handle (@...)"], ["city", "Your City"], ["audience", "Audience Size (e.g. 5K)"]].map(([k, ph]) => <input key={k} placeholder={ph} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = brand.color} onBlur={e => e.target.style.borderColor = C.border} />)}
          <textarea placeholder="Why are you right for this brand?" rows={3} value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", resize: "vertical", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = brand.color} onBlur={e => e.target.style.borderColor = C.border} />
          <button type="button" onClick={submit} disabled={loading || !form.name || !form.handle} className="vc-btn vc-btn--accent vc-btn--block" style={{ fontSize: "13px", padding: "16px", background: brand.color }}>{loading && <span className="vc-btn__spinner" aria-hidden />}{loading ? "Submitting..." : "Submit Application"}</button></div></>)
        : (<div style={{ textAlign: "center", padding: "20px 0" }}><div style={{ fontSize: "48px", marginBottom: "16px", animation: "checkPop .5s ease" }}>----</div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "32px", color: brand.color, marginBottom: "10px" }}>Application Sent!</div><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "24px" }}>{brand.name} will review your profile and respond within 48 hours.</p><button type="button" onClick={onClose} className="vc-btn vc-btn--accent vc-btn--sm" style={{ background: brand.color }}>Back to Marketplace</button></div>)}
    </div>
  </div>);
}

function MarketplacePage({ openWaitlist, addToast }) {
  const [catFilter, setCatFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [activeTab, setActiveTab] = useState("Creator");
  const [applyBrand, setApplyBrand] = useState(null);
  const [postForm, setPostForm] = useState({ brand: "", budget: "", location: "", desc: "" });
  const [postSent, setPostSent] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const w = useWindowWidth();
  const filtered = MARKETPLACE_BRANDS.filter(b => { const mc = catFilter === "All" || b.category === catFilter; const ms = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.tags.some(t => t.toLowerCase().includes(search.toLowerCase())); return mc && ms; }).sort((a, b) => sortBy === "Featured" ? (b.badge ? 1 : 0) - (a.badge ? 1 : 0) : (a.slots - a.filled) - (b.slots - b.filled));
  const submitPost = async () => {
    if (!postForm.brand || !postForm.budget) return;
    setPostLoading(true);
    try { await fetch("https://formsubmit.co/ajax/partners@vibecircles.co.za", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ _subject: `New Brand Deal Submission --- ${postForm.brand}`, _template: "table", ...postForm }) }); } catch (e) { }
    setPostLoading(false); setPostSent(true);
    addToast({ type: "success", title: "Deal Submitted!", message: "Your campaign goes live within 24 hours." });
  };
  return (
    <div style={{ background: C.bg, color: C.text }}>
      {applyBrand && <ApplyModal brand={applyBrand} onClose={() => setApplyBrand(null)} addToast={addToast} />}
      <section style={{ minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: w < 600 ? "100px 20px 60px" : "138px 64px 68px", position: "relative", overflow: "hidden", background: C.bg }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`, backgroundSize: "60px 60px" }} /><Orb top="-5%" right="5%" size={550} opacity={0.13} /><Orb bottom="-15%" left="25%" size={400} color={C.pink} opacity={0.08} delay="2s" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div style={{ animation: "fadeUp .5s ease forwards", opacity: 0, marginBottom: "16px" }}><Tag>Brand Marketplace</Tag></div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(44px,8vw,92px)", lineHeight: .92, color: C.text, animation: "fadeUp .55s .08s ease forwards", opacity: 0, marginBottom: "18px" }}>Where brands meet<br /><span style={{ color: C.orange }}>creators who live it.</span></h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(14px,1.8vw,18px)", color: C.dim, maxWidth: "520px", lineHeight: 1.75, animation: "fadeUp .55s .16s ease forwards", opacity: 0 }}>Browse live brand deals, apply in seconds, and turn your city presence into paid partnerships.</p>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", animation: "fadeUp .55s .24s ease forwards", opacity: 0 }}>
            {[["TBD", "Active Deals"], ["TBD", "Creators Matched"], ["TBD", "Paid Out"], ["TBD", "Avg Response"]].map(([v, l]) => <div key={l}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(18px,2.5vw,26px)", color: C.orange, lineHeight: 1 }}>{v}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "1.5px", color: C.dimmer, textTransform: "uppercase", marginTop: "3px" }}>{l}</div></div>)}
          </div>
        </div>
      </section>
      <div style={{ background: C.bg2, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}><div style={{ maxWidth: "1100px", margin: "0 auto", padding: `0 ${w < 600 ? "20px" : "64px"}`, display: "flex" }}>{["Creator", "Brand"].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", padding: "17px 26px", background: "none", color: activeTab === tab ? C.orange : C.dimmer, border: "none", borderBottom: `2px solid ${activeTab === tab ? C.orange : "transparent"}`, cursor: "pointer", transition: "all .2s" }}>{tab === "Creator" ? "I'm a Creator" : "I'm a Brand"}</button>)}</div></div>
      {activeTab === "Creator" ? (
        <>
          <section style={{ padding: `36px ${w < 600 ? "20px" : "64px"} 0`, background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ position: "relative", marginBottom: "20px" }}><span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", opacity: .35 }}>----</span><input placeholder="Search brand name or vibe tag..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: "100%", background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "2px", padding: "13px 16px 13px 42px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} /></div>
            <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center", paddingBottom: "22px" }}><div style={{ display: "flex", gap: "5px", flexWrap: "wrap", flex: 1 }}>{MKT_CATS.map(c => <button key={c} onClick={() => setCatFilter(c)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", padding: "6px 11px", borderRadius: "2px", cursor: "pointer", background: catFilter === c ? C.orange : "rgba(0,0,0,0.04)", color: catFilter === c ? C.textOnAccent : C.dim, border: catFilter === c ? "none" : `1px solid ${C.border}`, transition: "all .2s" }}>{c}</button>)}</div><select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, color: C.dim, padding: "7px 12px", borderRadius: "2px", fontFamily: "'DM Sans',sans-serif", fontSize: "12px", outline: "none", cursor: "pointer" }}>{["Featured", "Slots Left"].map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </div></section>
          <section style={{ padding: `20px ${w < 600 ? "20px" : "64px"} 80px`, background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, marginBottom: "20px" }}>Showing <span style={{ color: C.orange }}>{filtered.length}</span> deals</p>
            {filtered.length > 0 ? <div className="grid-auto">{filtered.map((brand, i) => <Reveal key={brand.id} delay={i * .05}><BrandCard brand={brand} onApply={setApplyBrand} /></Reveal>)}</div> : <div style={{ textAlign: "center", padding: "64px", color: C.dimmer }}><div style={{ fontSize: "32px", marginBottom: "12px" }}>----</div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "20px", color: C.text, marginBottom: "6px" }}>No deals found</div><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px" }}>Try adjusting your filters.</p></div>}
          </div></section>
        </>
      ) : (
        <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2">
          <div><Reveal><Tag>For Brands</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, margin: "16px 0 18px" }}>Post a deal.<br /><span style={{ color: C.orange }}>Find your creators.</span></h2><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8, marginBottom: "28px" }}>Access thousands of verified city creators. No agencies, no overhead --- direct creative partnerships.</p></Reveal>
            {[["01", "-------", "Post a Deal", "Describe your campaign, set budget, define your ideal creator."], ["02", "----", "Get Discovered", "Your deal surfaces to matching creators in your target cities."], ["03", "---", "Review & Accept", "Browse applicants and pick creators who match your brand."], ["04", "----", "Track Results", "Monitor campaign performance in real time."]].map(([n, i, t, d], idx) => <Reveal key={idx} delay={idx * .08}><div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}><div style={{ width: "30px", height: "30px", borderRadius: "2px", flexShrink: 0, background: "rgba(255,107,0,0.12)", border: `1px solid ${C.orange}30`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", color: C.orange }}>{n}</div><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "16px", color: C.text, marginBottom: "2px" }}>{i} {t}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.6 }}>{d}</div></div></div></Reveal>)}</div>
          <Reveal delay={.1}><div style={{ padding: "36px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", position: "sticky", top: "80px" }}>
            {postSent ? (<div style={{ textAlign: "center", padding: "28px 0" }}><div style={{ fontSize: "44px", marginBottom: "14px", animation: "checkPop .5s ease" }}>----</div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color: C.orange, marginBottom: "10px" }}>Deal Posted!</div><p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7 }}>Your campaign goes live within 24 hours.</p><button onClick={() => { setPostSent(false); setPostForm({ brand: "", budget: "", location: "", desc: "" }); }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "2px", padding: "10px 24px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", marginTop: "20px" }}>Post Another Deal</button></div>)
              : (<><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "20px", color: C.text, marginBottom: "20px" }}>Post a Campaign Deal</div><div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                {[["brand", "Brand Name"], ["budget", "Budget Range"], ["location", "Target Location(s)"]].map(([k, ph]) => <input key={k} placeholder={ph} value={postForm[k]} onChange={e => setPostForm(f => ({ ...f, [k]: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />)}
                <textarea placeholder="Describe your campaign..." rows={3} value={postForm.desc} onChange={e => setPostForm(f => ({ ...f, desc: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", resize: "vertical", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                <button type="button" onClick={submitPost} disabled={postLoading} className="vc-btn vc-btn--primary vc-btn--block" style={{ fontSize: "13px", padding: "16px" }}>{postLoading && <span className="vc-btn__spinner" aria-hidden />}{postLoading ? "Submitting..." : "Post My Deal"}</button>
              </div></>)}
          </div></Reveal>
        </div></section>
      )}
      <div style={{ background: C.orange, padding: "20px 0", overflow: "hidden" }}><div style={{ display: "flex", animation: "marquee 22s linear infinite", whiteSpace: "nowrap" }}>{[...Array(4)].map((_, x) => ["Brand Deals", "--", "Creator Matching", "--", "Real Payments", "--", "City Culture", "--", "Authentic Collabs", "--"].map((wd, i) => <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", color: "rgba(5,5,10,0.65)", marginRight: "26px" }}>{wd}</span>))}</div></div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRESS PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const PRESS_RELEASES = [
  { date: "February 24, 2026", title: "VibeCircle Reaches 1M Creators Across South Africa", link: "#", category: "Milestone" },
  { date: "February 10, 2026", title: "Announcing 'Social Gravity': The Future of Urban Discovery", link: "#", category: "Product" },
  { date: "January 28, 2026", title: "VibeCircle Partners with Major Retail Groups for In-Store Rewards", link: "#", category: "Partnership" },
  { date: "January 15, 2026", title: "How VibeCircle is Reshaping the Night-Time Economy", link: "#", category: "Analysis" },
];

function PressPage({ setPage }) {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Newsroom" title="VibeCircle" accent="in the headlines." sub="Official announcements, media assets, and the story of our mission to build Social Gravity." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid-2">
            <div>
              <Reveal><Tag>Featured Press</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, margin: "16px 0 24px" }}>The latest from<br /><span style={{ color: C.orange }}>our orbit.</span></h2></Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {PRESS_RELEASES.map((pr, i) => (
                  <Reveal key={i} delay={i * .05}>
                    <div style={{ padding: "24px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", transition: "all .3s", cursor: "pointer" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, letterSpacing: "1px", textTransform: "uppercase" }}>{pr.date}</span>
                        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", color: C.orange, letterSpacing: "1px" }}>{pr.category}</span>
                      </div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.text }}>{pr.title}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Reveal delay={.1}>
                <div style={{ padding: "40px", background: C.orange, borderRadius: "4px", color: C.textOnAccent }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", lineHeight: 1, marginBottom: "12px" }}>Media Inquiries</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, marginBottom: "24px" }}>Journalists and media outlets, please reach out to our communications team for interviews and data insights.</p>
                  <a href="mailto:press@vibecircles.co.za" style={{ display: "inline-block", fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "2px", color: C.orange, background: C.bg, padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>Email PR Team</a>
                </div>
              </Reveal>
              <Reveal delay={.2}>
                <div style={{ padding: "40px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", lineHeight: 1, color: C.text, marginBottom: "12px" }}>Brand Assets</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6, marginBottom: "24px" }}>Download our official logos, typeface, and high-resolution product shots.</p>
                  <button onClick={() => setPage("MediaKit")} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "2px", color: C.textOnAccent, background: C.text, border: "none", padding: "12px 28px", borderRadius: "2px", cursor: "pointer" }}>View Media Kit</button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MEDIA KIT PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function MediaKitPage() {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Assets" title="Brand &" accent="Media Kit" sub="Everything you need to represent VibeCircle visually. Please follow our brand guidelines." />
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid-2">
            <Reveal>
              <div style={{ padding: "48px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "32px", color: C.orange, marginBottom: "24px" }}>The Logo</div>
                <div style={{ width: "100%", height: "200px", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "44px", letterSpacing: "6px", color: C.orange }}>VIBECIRCLE</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{ flex: 1, fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "2px", padding: "10px", background: C.text, color: C.textOnAccent, border: "none" }}>Download PNG</button>
                  <button style={{ flex: 1, fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "2px", padding: "10px", background: "transparent", border: `1px solid ${C.border}`, color: C.text }}>Download SVG</button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={.1}>
              <div style={{ padding: "48px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "32px", color: C.orange, marginBottom: "24px" }}>Color Palette</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {[
                    { name: "Vibe Orange", hex: "#FF6B00" },
                    { name: "Neon Pink", hex: "#FF2D78" },
                    { name: "Deep Obsidian", hex: "#05050A" },
                    { name: "Soft Cloud", hex: "#F6F6F9" }
                  ].map(color => (
                    <div key={color.name}>
                      <div style={{ height: "60px", background: color.hex, borderRadius: "2px", border: "1px solid rgba(0,0,0,0.05)" }} />
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, marginTop: "8px" }}>{color.name}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.dimmer }}>{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SAFETY PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const SAFETY_TOPICS = [
  { h: "Community Guidelines", body: "Our mission is to bring people together in real life. We have zero tolerance for hate speech, harassment, or any content that promotes violence or illegal activities.", icon: "----" },
  { h: "Data Protection", body: "Your city activity is yours. We encrypt your location data and never sell your personal information to third-party data brokers.", icon: "----" },
  { h: "Safety Tools", body: "From private 'ghost' modes to instant reporting, we provide tools that put you in control of your city experience.", icon: "-------" },
  { h: "Trust & Transparency", body: "We are committed to being open about how our algorithms work and how we protect our community.", icon: "----" },
];

function SafetyPage() {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Trust" title="Safety &" accent="Trust Center" sub="Building a culture-first platform requires a foundation of absolute safety and radical transparency." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid-2" style={{ marginBottom: "64px" }}>
            {SAFETY_TOPICS.map((topic, i) => (
              <Reveal key={i} delay={i * .05}>
                <div style={{ padding: "40px", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "4px", height: "100%" }}>
                  <div style={{ fontSize: "32px", marginBottom: "20px" }}>{topic.icon}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color: C.text, marginBottom: "12px" }}>{topic.h}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.75 }}>{topic.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Divider />
          <div style={{ marginTop: "64px", textAlign: "center" }}>
            <Reveal>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: C.text, marginBottom: "16px" }}>See a problem?</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, marginBottom: "32px" }}>Our safety team is active 24/7 to review reports and maintain the vibe.</p>
              <a href="mailto:safety@vibecircles.co.za" style={{ display: "inline-block", fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "14px 36px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", textDecoration: "none" }}>Report an Incident</a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CONTACT PAGE --- with real FormSubmit integration
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const CONTACT_DEPTS = [
  { key: "general", label: "General Inquiry", email: "info@vibecircles.co.za", icon: "----", desc: "Questions about VibeCircle, the platform, or anything else." },
  { key: "partnerships", label: "Partnerships", email: "partners@vibecircles.co.za", icon: "----", desc: "Brand deals, platform integrations, and strategic alliances." },
  { key: "careers", label: "Careers", email: "careers@vibecircles.co.za", icon: "----", desc: "Job applications, internship inquiries, and hiring questions." },
  { key: "support", label: "Support", email: "support@vibecircles.co.za", icon: "-------", desc: "Technical issues, account help, and bug reports." },
  { key: "press", label: "Press & Media", email: "press@vibecircles.co.za", icon: "----", desc: "Media inquiries, press kits, and interview requests." },
];
function ContactPage({ addToast }) {
  const [dept, setDept] = useState("general");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const selectedDept = CONTACT_DEPTS.find(d => d.key === dept);
  const w = useWindowWidth();
  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@vibecircles.co.za", {
        method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ _subject: `[${selectedDept?.label}] ${form.subject || "New Message"}`, _template: "table", name: form.name, email: form.email, subject: form.subject, message: form.message, department: selectedDept?.label, replyTo: selectedDept?.email })
      });
    } catch (e) { }
    setLoading(false); setSent(true);
    addToast({ type: "success", title: "Message sent!", message: `The ${selectedDept?.label} team will respond within 24---48 hours.` });
  };
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Contact" title="Let's build" accent="something real." sub="Whether you're a creator, a business, or a curious human --- we're here." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2">
        <div>
          <Reveal style={{ marginBottom: "28px" }}><Tag>Choose Department</Tag></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
            {CONTACT_DEPTS.map((d, i) => <Reveal key={d.key} delay={i * .07}><div onClick={() => setDept(d.key)} style={{ padding: "16px 20px", background: dept === d.key ? "rgba(255,107,0,0.1)" : "rgba(0,0,0,0.02)", border: `1px solid ${dept === d.key ? C.orange + "50" : C.border}`, borderRadius: "4px", cursor: "pointer", transition: "all .25s", display: "flex", alignItems: "flex-start", gap: "12px" }} onMouseEnter={e => { if (dept !== d.key) { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = C.border; } }} onMouseLeave={e => { if (dept !== d.key) { e.currentTarget.style.background = "rgba(0,0,0,0.02)"; e.currentTarget.style.borderColor = C.border; } }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>{d.icon}</span><div style={{ flex: 1 }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "15px", color: dept === d.key ? C.orange : C.text, letterSpacing: ".5px" }}>{d.label}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, marginTop: "2px" }}>{d.desc}</div></div>{dept === d.key && <div style={{ color: C.orange, fontSize: "13px", flexShrink: 0 }}>---</div>}
            </div></Reveal>)}
          </div>
          <Reveal><div style={{ padding: "24px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "3px", color: C.orange, marginBottom: "10px" }}>All contacts</div>
            {CONTACT_DEPTS.map(d => <div key={d.key} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>{d.label}</span><a href={`mailto:${d.email}`} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dim, textDecoration: "none", transition: "color .2s" }} onMouseEnter={e => e.target.style.color = C.orange} onMouseLeave={e => e.target.style.color = C.dim}>{d.email}</a></div>)}
          </div></Reveal>
        </div>
        <Reveal delay={.1}><div style={{ padding: "40px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", position: "sticky", top: "80px" }}>
          {sent ? (<div style={{ textAlign: "center", padding: "36px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px", animation: "checkPop .5s ease" }}>------</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "30px", color: C.orange, marginBottom: "10px" }}>Message Sent.</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "24px" }}>The {selectedDept?.label} team will get back to you at <span style={{ color: C.orange }}>{form.email}</span> within 24---48 hours.</p>
            <button type="button" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "", }); }} className="vc-btn vc-btn--primary vc-btn--sm">Send Another</button>
          </div>) : (<>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}><span style={{ fontSize: "20px" }}>{selectedDept?.icon}</span><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", color: C.orange }}>{selectedDept?.label}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>{selectedDept?.email}</div></div></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[["name", "Your Name"], ["email", "Email Address"]].map(([k, ph]) => <input key={k} placeholder={ph} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />)}
              </div>
              <input placeholder="Subject" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
              <textarea placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ background: "rgba(0,0,0,0.04)", border: "1px solid " + C.border, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", resize: "vertical", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
              <button type="button" onClick={submit} disabled={loading || !form.name || !form.email || !form.message} className="vc-btn vc-btn--primary vc-btn--block" style={{ fontSize: "13px", padding: "16px" }}>{loading && <span className="vc-btn__spinner" aria-hidden />}{loading ? "Sending..." : "Send message"}</button>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, textAlign: "center" }}>Typical response: 24---48 hours</p>
            </div>
          </>)}
        </div></Reveal>
      </div></section>
      <Divider />
      <section className="sec-pad"><div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal style={{ marginBottom: "44px" }}><Tag>Find Us</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(26px,4vw,46px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>We're in the <span style={{ color: C.orange }}>cities we're building for.</span></h2></Reveal>
        <div className="grid-4">
          {[{ city: "Johannesburg", addr: "HQ - Sandton", emoji: "HQ", status: "Main Office" }, { city: "Cape Town", addr: "Woodstock Creative Hub", emoji: "COAST", status: "Western Cape" }, { city: "Durban", addr: "Umhlanga Ridge", emoji: "COAST", status: "KwaZulu-Natal" }, { city: "Pretoria", addr: "Menlyn Maine", emoji: "CAPITOL", status: "Gauteng North" }].map((o, i) => <Reveal key={i} delay={i * .1}>
            <div style={{ padding: "26px 22px", background: "rgba(0,0,0,0.02)", border: "1px solid " + C.border, borderRadius: "4px", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}>
              <div style={{ fontSize: "26px", marginBottom: "10px" }}>{o.emoji}</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "19px", color: C.text, marginBottom: "3px" }}>{o.city}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dim, marginBottom: "10px" }}>{o.addr}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: C.orange, animation: "dotPulse 2s infinite" }} /><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "1px", color: C.orange, textTransform: "uppercase" }}>{o.status}</span></div>
            </div>
          </Reveal>)}
        </div>
      </div></section>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRICING PAGE (standalone)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVACY POLICY PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function LegalPage({ title, tag, lastUpdated, sections }) {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <section style={{ padding: "130px 64px 60px", position: "relative", overflow: "hidden", background: C.bg }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.orange}04 1px,transparent 1px),linear-gradient(90deg,${C.orange}04 1px,transparent 1px)`, backgroundSize: "60px 60px" }} /><Orb top="-10%" right="-5%" size={400} opacity={0.08} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ animation: "fadeUp .5s ease forwards", opacity: 0, marginBottom: "16px" }}><Tag>{tag}</Tag></div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: .95, color: C.text, animation: "fadeUp .55s .08s ease forwards", opacity: 0, marginBottom: "16px" }}>{title}</h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dimmer, animation: "fadeUp .55s .16s ease forwards", opacity: 0 }}>Last updated: {lastUpdated}</p>
        </div>
      </section>
      <Divider />
      <section style={{ padding: "72px 64px 100px" }}><div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {sections.map((s, i) => <Reveal key={i} delay={i * .05}>
          <div style={{ marginBottom: "44px" }}>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(18px,2.5vw,26px)", color: C.orange, letterSpacing: "1px", marginBottom: "14px" }}>{s.h}</h2>
            {(Array.isArray(s.body) ? s.body : [s.body]).map((p, j) => <p key={j} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.85, marginBottom: "12px" }}>{p}</p>)}
          </div>
        </Reveal>)}
      </div></section>
    </div>
  );
}

const PRIVACY_SECTIONS = [
  { h: "1. Information We Collect", body: ["We collect information you provide directly: name, email address, city, profile data, content you post, and payment information when you subscribe to a paid plan.", "We automatically collect usage data including pages viewed, features used, time spent, device type, browser, IP address, and general location data for city-based discovery features.", "When you connect third-party accounts (Instagram, TikTok, etc.) we receive limited profile data as permitted by those platforms."] },
  { h: "2. How We Use Your Information", body: ["To operate and improve the VibeCircle platform, including the live city map, creator tools, and brand marketplace.", "To personalise your experience --- showing you relevant content, creators, events, and brands based on your city and interests.", "To process payments, send transaction confirmations, and manage subscriptions.", "To send product updates, newsletters, and promotional offers (you can opt out at any time).", "To comply with legal obligations and protect the rights and safety of our users."] },
  { h: "3. Sharing Your Information", body: ["We do not sell your personal information to third parties. We do not allow advertisers to pay to have their products promoted in private conversations.", "We share data with service providers who help us operate the platform (payment processors, cloud infrastructure, analytics tools) under strict confidentiality agreements.", "Your public profile, posts, and location-tagged content are visible to other VibeCircle users as part of the platform's core functionality.", "Creators who apply to brand deals share their profile data with the relevant brand as part of the application process."] },
  { h: "4. Location Data", body: ["Location data is central to VibeCircle's functionality. Precise location is used to place your content on the city map, show you nearby events and businesses, and power geo-targeted discovery.", "You can control location permissions through your device settings. Disabling location will limit your ability to use map-based features.", "We do not share precise real-time location data with third parties without your explicit consent."] },
  { h: "5. Data Retention", body: "We retain your account data for as long as your account is active. If you delete your account, we delete or anonymize your personal data within 30 days, except where required by law or legitimate business interest." },
  { h: "6. Your Rights (POPIA)", body: ["You have the right to access, correct, or delete your personal data. You have the right to data portability and to restrict or object to certain processing.", "South African users have rights under POPIA, including access, correction, deletion, and objection to processing.", "To exercise these rights, email privacy@vibecircles.co.za. We'll respond within 30 days."] },
  { h: "7. Cookies", body: ["We use cookies and similar tracking technologies to keep you logged in, remember your preferences, and understand how people use VibeCircle.", "You can control cookies through your browser settings or through our cookie consent manager. Refusing non-essential cookies will not prevent you from using the platform but may limit personalisation."] },
  { h: "8. Security", body: "We use industry-standard encryption (TLS 1.3) for data in transit, AES-256 for data at rest, and undergo regular security audits. No system is 100% secure --- please use a strong password and enable two-factor authentication when available." },
  { h: "9. Children's Privacy", body: "VibeCircle is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have done so, we will delete the information promptly." },
  { h: "10. Contact", body: "Questions about this policy? Email privacy@vibecircles.co.za or write to VibeCircle (Pty) Ltd, Attn: Privacy Team, 5th Floor, 67 Rivonia Rd, Sandton, Johannesburg 2196, South Africa." },
];

const TERMS_SECTIONS = [
  { h: "1. Acceptance of Terms", body: "By accessing or using VibeCircle, you agree to these Terms of Service. If you don't agree, please don't use the platform. We may update these terms and will notify you of material changes." },
  { h: "2. Your Account", body: ["You must be 13 or older to use VibeCircle. By creating an account, you confirm you meet this requirement.", "You are responsible for all activity under your account. Use a strong, unique password and don't share your credentials.", "We reserve the right to suspend or terminate accounts that violate these terms."] },
  { h: "3. Content You Post", body: ["You retain ownership of content you post. By posting, you grant VibeCircle a non-exclusive, worldwide, royalty-free license to display, distribute, and use your content to operate the platform.", "You are responsible for your content. Don't post content that is illegal, harmful, harassing, defamatory, or that infringes others' rights.", "We may remove content that violates our Community Guidelines without prior notice."] },
  { h: "4. Brand Marketplace", body: ["VibeCircle facilitates connections between creators and brands but is not a party to deals made through the Marketplace.", "We do not guarantee the quality, legality, or completion of any deal. You enter deals at your own risk.", "VibeCircle charges a 10% platform fee on successfully completed marketplace transactions."] },
  { h: "5. Subscriptions & Billing", body: ["Paid plans are billed monthly or annually. All payments are processed securely through our payment processor.", "You can cancel at any time. Cancellation takes effect at the end of your current billing period --- you will not receive a prorated refund.", "We offer a 14-day free trial on paid plans. You won't be charged until the trial ends."] },
  { h: "6. Prohibited Conduct", body: ["You agree not to: scrape or crawl the platform, reverse engineer our technology, create fake accounts, spam other users, or use VibeCircle for illegal purposes.", "You agree not to interfere with the platform's operation or circumvent security features.", "Violations may result in immediate account termination."] },
  { h: "7. Intellectual Property", body: "VibeCircle and its design, logos, and technology are owned by VibeCircle (Pty) Ltd and protected by intellectual property laws. You may not use our marks without written permission." },
  { h: "8. Disclaimers & Limitation of Liability", body: ["VibeCircle is provided 'as is' without warranties of any kind. We don't guarantee uninterrupted service or that the platform will be error-free.", "To the maximum extent permitted by law, VibeCircle's liability for any claim is limited to the amount you paid us in the 12 months preceding the claim."] },
  { h: "9. Governing Law", body: "These terms are governed by the laws of the Republic of South Africa. Any disputes will be resolved in the courts of Gauteng, Johannesburg." },
  { h: "10. Contact", body: "Legal questions? Email legal@vibecircles.co.za or write to VibeCircle (Pty) Ltd, Attn: Legal Team, 5th Floor, 67 Rivonia Rd, Sandton, Johannesburg 2196, South Africa." },
];

const COOKIES_SECTIONS = [
  { h: "What Are Cookies?", body: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep you logged in, and understand how you use VibeCircle." },
  { h: "Cookies We Use", body: ["Essential Cookies: Required for the platform to function. These keep you logged in and secure. Cannot be disabled.", "Analytics Cookies: Help us understand how you navigate VibeCircle --- which features you use, how long you spend, and where you encounter issues. We use this to improve the product.", "Preference Cookies: Remember your settings --- city, language, notification preferences, and display options.", "Marketing Cookies: Used to show you relevant ads and measure campaign effectiveness. Only active if you've accepted marketing cookies."] },
  { h: "Third-Party Cookies", body: "Some third-party services we use (analytics, payment processing, maps) may set their own cookies. These are governed by their own privacy policies." },
  { h: "Managing Cookies", body: ["You can control or delete cookies through your browser settings. Disabling essential cookies will prevent you from using VibeCircle.", "You can update your cookie preferences at any time by clicking 'Cookie Preferences' in the footer.", "We follow South Africa's POPIA and ECTA requirements for consent and cookie management."] },
  { h: "Contact", body: "Cookie questions? Email privacy@vibecircles.co.za." },
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 404 PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function NotFoundPage({ setPage }) {
  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 24px" }}>
      <Orb top="10%" left="-5%" size={500} opacity={0.1} /><Orb bottom="10%" right="-5%" size={400} color={C.pink} opacity={0.08} delay="2s" />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "600px" }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(80px,15vw,160px)", lineHeight: 1, WebkitTextStroke: "2px rgba(255,107,0,0.25)", color: "rgba(255,107,0,0.08)", marginBottom: "-20px" }}>404</div>
        <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,5vw,56px)", color: C.text, lineHeight: 1, marginBottom: "18px" }}>This vibe<br /><span style={{ color: C.orange }}>doesn't exist.</span></h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.7, marginBottom: "36px" }}>The page you're looking for has either moved or never existed.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => { setPage("home"); window.scrollTo(0, 0); }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 12px 32px ${C.orange}40`; }} onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>Back to Home</button>
          <button onClick={() => { setPage("Contact"); window.scrollTo(0, 0); }} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: "transparent", color: C.text, border: `1px solid ${C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.orange; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}>Report an Issue</button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ROOT APP
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default function VibeCircleApp({ initialPage = "home" }) {
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(initialPage);
  const [prevPage, setPrevPage] = useState(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistContext, setWaitlistContext] = useState("");
  const [toasts, setToasts] = useState([]);
  const [cookieState, setCookieState] = useState("pending"); // pending | accepted | declined
  const [transitionKey, setTransitionKey] = useState(0);

  // Check cookie state from storage
  useEffect(() => {
    window.storage?.get("vc_cookie_consent").then(r => {
      if (r) setCookieState(r.value);
    }).catch(() => { });
  }, []);

  const openWaitlist = useCallback((ctx = "") => { setWaitlistContext(ctx); setWaitlistOpen(true); }, []);
  const addToast = useCallback((t) => setToasts(prev => [...prev, { ...t, id: Date.now() + Math.random() }]), []);
  const removeToast = useCallback((id) => setToasts(prev => prev.filter(t => t.id !== id)), []);

  const goPage = (p) => {
    setPrevPage(page);
    setPage(p);
    setTransitionKey(k => k + 1);
    const nextPath = PAGE_TO_PATH[p] || "/";
    if (pathname !== nextPath) router.push(nextPath);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const mapped = PATH_TO_PAGE[pathname] || "home";
    if (mapped !== page) setPage(mapped);
  }, [pathname, page]);

  const acceptCookies = () => { setCookieState("accepted"); window.storage?.set("vc_cookie_consent", "accepted").catch(() => { }); addToast({ type: "info", title: "Cookies accepted", message: "Your preferences have been saved." }); };
  const declineCookies = () => { setCookieState("declined"); window.storage?.set("vc_cookie_consent", "declined").catch(() => { }); };

  const sharedProps = { setPage: goPage, openWaitlist, addToast };

  const PageMap = {
    home: <HomePage {...sharedProps} />,
    About: <AboutPage {...sharedProps} />,
    Team: <TeamPage {...sharedProps} />,
    Jobs: <JobsPage {...sharedProps} />,
    Marketplace: <MarketplacePage {...sharedProps} />,
    Contact: <ContactPage {...sharedProps} />,
    Press: <PressPage {...sharedProps} />,
    Safety: <SafetyPage {...sharedProps} />,
    MediaKit: <MediaKitPage {...sharedProps} />,
    Privacy: <LegalPage title="Privacy Policy" tag="Legal" lastUpdated="February 18, 2026" sections={PRIVACY_SECTIONS} />,
    Terms: <LegalPage title="Terms of Service" tag="Legal" lastUpdated="February 18, 2026" sections={TERMS_SECTIONS} />,
    Cookies: <LegalPage title="Cookie Policy" tag="Legal" lastUpdated="February 18, 2026" sections={COOKIES_SECTIONS} />,
  };
  const content = PageMap[page] || <NotFoundPage setPage={goPage} />;

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Nav current={page} setPage={goPage} openWaitlist={openWaitlist} />
      <main key={transitionKey} className="page-enter">{content}</main>
      <Footer setPage={goPage} openWaitlist={openWaitlist} />
      {/* GLOBAL OVERLAYS */}
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} context={waitlistContext} addToast={addToast} />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <BackToTop />
      {cookieState === "pending" && <CookieBanner onAccept={acceptCookies} onDecline={declineCookies} setPage={goPage} />}
    </>
  );
}




