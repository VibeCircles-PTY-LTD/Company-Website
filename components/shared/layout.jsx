"use client";

import { useEffect, useState } from "react";
import { C, SOCIALS } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";

const ALL_PAGES = ["About", "Team", "Creators", "Advertise", "Business", "Jobs", "Marketplace", "Pricing", "Contact"];
const PRIMARY_NAV = ["About", "Creators", "Marketplace", "Business", "Jobs"];
const MORE_NAV = ["Team", "Advertise", "Pricing", "Contact"];

export function Nav({ current, setPage, openWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const w = useWindowWidth();
  const isMobile = w < 1060;
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px,4vw,64px)",
          height: "72px",
          background: scrolled || menuOpen ? "rgba(247,244,238,0.98)" : "rgba(247,244,238,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
          transition: "all .4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <button
          onClick={() => go("home")}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "2px",
            color: C.orange,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
            textTransform: "uppercase"
          }}
        >
          VIBECIRCLES
        </button>
        {!isMobile && (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {PRIMARY_NAV.map((p) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: current === p ? C.orange : C.dim,
                  background: current === p ? `${C.orange}08` : "transparent",
                  border: "none",
                  borderRadius: "99px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all .25s ease",
                }}
                onMouseEnter={(e) => {
                  if (current !== p) {
                    e.currentTarget.style.color = C.text;
                    e.currentTarget.style.background = "rgba(0,0,0,0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (current !== p) {
                    e.currentTarget.style.color = C.dim;
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {!isMobile && (
            <button
              onClick={() => openWaitlist("Early Access")}
              className="bg-vc-orange text-vc-white font-body uppercase tracking-[0.15em] py-3 px-8 rounded-full transition-all hover:shadow-xl hover:-translate-y-1"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Start Vibeing
            </button>
          )}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: C.text,
                  transition: "all .3s",
                  transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: C.text,
                  transition: "all .3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: C.text,
                  transition: "all .3s",
                  transform: menuOpen ? "rotate(-45deg) translate(6px,-6px)" : "",
                }}
              />
            </button>
          )}
        </div>
      </nav>
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 199,
            background: "rgba(246,246,249,0.98)",
            backdropFilter: "blur(20px)",
            animation: "menuSlide .3s ease",
            overflowY: "auto",
            padding: "32px 28px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
            {ALL_PAGES.map((p, i) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(28px,6vw,40px)",
                  letterSpacing: "2px",
                  textAlign: "left",
                  color: current === p ? C.orange : C.text,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  animation: `fadeUp .4s ease ${i * 0.04}s both`,
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              openWaitlist("Mobile Nav");
              setMenuOpen(false);
            }}
            style={{
              width: "100%",
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "18px",
              letterSpacing: "3px",
              padding: "16px",
              background: C.orange,
              color: C.textOnAccent,
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Join Now
          </button>
        </div>
      )}
    </>
  );
}

export function Footer({ setPage }) {
  const w = useWindowWidth();
  const go = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const cols = [
    { title: "Platform", links: ["About", "Team", "Creators", "Marketplace", "Pricing"] },
    { title: "Business", links: ["Advertise", "Business", "Contact"] },
    { title: "Company", links: ["Jobs", "Team", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
  ];
  return (
    <footer style={{ background: C.bg2, borderTop: `1px solid ${C.border}`, marginTop: "64px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: w < 600 ? "64px 24px" : "80px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: w < 600 ? "1fr" : w < 1060 ? "1fr 1fr" : "2fr 1fr 1fr 1fr 1fr",
            gap: "64px",
            marginBottom: "64px",
          }}
        >
          <div style={{ gridColumn: w < 1060 ? "1 / -1" : "span 2" }}>
            <button
              onClick={() => go("home")}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                letterSpacing: "2px",
                color: C.orange,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: "20px",
                display: "block",
                textTransform: "uppercase"
              }}
            >
              VIBECIRCLES
            </button>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.6, maxWidth: "320px", marginBottom: "24px" }}>
              The social gravity engine. Connecting brands with the communities that move culture across Africa and the diaspora.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: `1px solid ${C.border}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .2s ease",
                    textDecoration: "none",
                    color: C.dim,
                    background: "transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.orange;
                    e.currentTarget.style.color = C.orange;
                    e.currentTarget.style.background = "rgba(232, 81, 26, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.dim;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: C.dim, marginBottom: "20px", fontWeight: 500 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => go(l)}
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: "14px",
                        color: C.dim,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "color .2s ease",
                        padding: 0,
                      }}
                      onMouseEnter={(e) => (e.target.style.color = C.text)}
                      onMouseLeave={(e) => (e.target.style.color = C.dim)}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: "1px", background: C.border, opacity: 0.5, marginBottom: "32px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "12px", color: C.dim }}>
            © {new Date().getFullYear()} VibeCircles. Making energy visible. Johannesburg, South Africa.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: C.dim, opacity: 0.6 }}>
              v1.0.4
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
