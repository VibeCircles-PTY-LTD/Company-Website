"use client";

import { useEffect, useState } from "react";
import { C, SOCIALS } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";

const ALL_PAGES = ["About", "Team", "Creators", "Advertise", "Business", "Jobs", "Marketplace", "Contact"];
const PRIMARY_NAV = ["About", "Creators", "Marketplace", "Business", "Jobs"];
const MORE_NAV = ["Team", "Advertise", "Contact"];

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
          padding: "0 clamp(20px,4vw,48px)",
          height: "68px",
          background: scrolled || menuOpen ? "rgba(5,5,10,0.96)" : "rgba(5,5,10,0.5)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
          transition: "all .35s ease",
        }}
      >
        <button
          onClick={() => go("home")}
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "24px",
            letterSpacing: "3px",
            color: C.orange,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          VIBECIRCLE
        </button>
        {!isMobile && (
          <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
            {PRIMARY_NAV.map((p) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: current === p ? C.orange : C.dim,
                  background: current === p ? `${C.orange}12` : "transparent",
                  border: current === p ? `1px solid ${C.orange}30` : "1px solid transparent",
                  borderRadius: "2px",
                  padding: "7px 12px",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  if (current !== p) {
                    e.currentTarget.style.color = C.white;
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (current !== p) {
                    e.currentTarget.style.color = C.dim;
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {p}
              </button>
            ))}
            {MORE_NAV.map((p) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: current === p ? C.orange : "rgba(255,255,255,0.28)",
                  background: "transparent",
                  border: "1px solid transparent",
                  borderRadius: "2px",
                  padding: "7px 10px",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = current === p ? C.orange : "rgba(255,255,255,0.28)";
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {!isMobile && (
            <button
              onClick={() => openWaitlist("Early Access")}
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "13px",
                letterSpacing: "3px",
                padding: "9px 22px",
                background: C.orange,
                color: C.bg,
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "box-shadow .2s",
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = `0 6px 20px ${C.orange}40`)}
              onMouseLeave={(e) => (e.target.style.boxShadow = "")}
            >
              Join Now
            </button>
          )}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: menuOpen ? C.orange : C.white,
                  transition: "all .3s",
                  transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: menuOpen ? C.orange : C.white,
                  transition: "all .3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: menuOpen ? C.orange : C.white,
                  transition: "all .3s",
                  transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "",
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
            background: "rgba(5,5,10,0.99)",
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
                  color: current === p ? C.orange : C.white,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
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
              color: C.bg,
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
    { title: "Platform", links: ["About", "Team", "Creators", "Marketplace"] },
    { title: "Business", links: ["Advertise", "Business", "Contact"] },
    { title: "Company", links: ["Jobs", "Team", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
  ];
  return (
    <footer style={{ background: "#02020A", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: w < 600 ? "48px 20px" : "56px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: w < 600 ? "1fr 1fr" : w < 960 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr",
            gap: "36px",
            marginBottom: "52px",
          }}
        >
          <div>
            <button
              onClick={() => go("home")}
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "22px",
                letterSpacing: "3px",
                color: C.orange,
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: "14px",
                display: "block",
              }}
            >
              VIBECIRCLE
            </button>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, lineHeight: 1.7, maxWidth: "180px", marginBottom: "18px" }}>
              Where creators, cities, events, and businesses collide in real life.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color .2s,background .2s,color .2s",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.orange;
                    e.currentTarget.style.background = "rgba(255,107,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
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
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "3px", color: C.orange, marginBottom: "14px" }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                {col.links.map((l) => (
                  <button
                    key={l}
                    onClick={() => go(l)}
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "12px",
                      color: C.dimmer,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "color .2s",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.white)}
                    onMouseLeave={(e) => (e.target.style.color = C.dimmer)}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "22px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.18)" }}>
            (c) 2026 VibeCircle (Pty) Ltd - Making energy visible.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <button
                key={l}
                onClick={() => go(l)}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.18)", cursor: "pointer", background: "none", border: "none", padding: 0, transition: "color .2s" }}
                onMouseEnter={(e) => (e.target.style.color = C.orange)}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.18)")}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
