"use client";

import { useEffect, useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";
import { Orb, Reveal, Tag, TestimonialCard } from "@/components/shared/ui";
import { TESTIMONIALS } from "@/components/data/testimonials";

export default function HomePage({ setPage, openWaitlist }) {
  const words = ["Pulse", "Gravity", "Energy", "Discovery", "Movement", "Culture", "Alive"];
  const [wi, setWi] = useState(0);
  const w = useWindowWidth();
  useEffect(() => {
    const id = setInterval(() => setWi((x) => x + 1), 2200);
    return () => clearInterval(id);
  }, []);
  const go = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ background: C.bg }}>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.bg,
          position: "relative",
          overflow: "hidden",
          padding: `120px ${w < 600 ? "20px" : "48px"} 80px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${C.orange}05 1px,transparent 1px),linear-gradient(90deg,${C.orange}05 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <Orb top="5%" left="-8%" size={600} opacity={0.12} />
        <Orb bottom="0%" right="-5%" size={500} color={C.pink} opacity={0.08} delay="3s" />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "950px" }}>
          <div
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "13px",
              letterSpacing: "6px",
              color: C.orange,
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <span style={{ width: 40, height: 1, background: C.orange, display: "inline-block" }} />
            <span key={wi} style={{ display: "inline-block", animation: "fadeUp .4s ease forwards", opacity: 0 }}>
              {words[wi % words.length]}
            </span>
            <span style={{ width: 40, height: 1, background: C.orange, display: "inline-block" }} />
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(52px,10vw,118px)", lineHeight: 0.9, color: C.white, marginBottom: "16px" }}>
            IT'S NOT
            <br />
            <span style={{ WebkitTextStroke: "2px #FF6B00", color: "transparent" }}>SOCIAL MEDIA.</span>
            <br />
            IT'S SOCIAL
            <br />
            <span style={{ color: C.orange }}>GRAVITY.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,2vw,19px)", color: C.dim, margin: "32px auto 48px", maxWidth: "520px", lineHeight: 1.75 }}>
            Where creators, cities, events, and businesses connect in real time.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}>
            <button
              onClick={() => openWaitlist("Creator Waitlist")}
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "16px",
                letterSpacing: "3px",
                padding: "16px 44px",
                background: C.orange,
                color: C.bg,
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "transform .2s,box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 16px 40px ${C.orange}45`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "";
                e.target.style.boxShadow = "";
              }}
            >
              Join the Movement
            </button>
            <button
              onClick={() => go("Marketplace")}
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "16px",
                letterSpacing: "3px",
                padding: "16px 44px",
                background: "transparent",
                color: C.white,
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.orange;
                e.currentTarget.style.color = C.orange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                e.currentTarget.style.color = C.white;
              }}
            >
              Explore Marketplace
            </button>
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { l: "About", p: "About", i: "----" },
              { l: "Creators", p: "Creators", i: "---" },
              { l: "Marketplace", p: "Marketplace", i: "----" },
              { l: "For Business", p: "Business", i: "----" },
              { l: "Contact", p: "Contact", i: "------" },
            ].map(({ l, p, i }) => (
              <button
                key={p}
                onClick={() => go(p)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  padding: "10px 18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "2px",
                  color: C.dim,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  transition: "all .25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.orange;
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = C.dim;
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {i} {l}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}>
            <Tag>What people say</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,5vw,56px)", color: C.white, lineHeight: 1, marginTop: "16px" }}>
              The vibe is <span style={{ color: C.orange }}>real.</span>
            </h2>
          </Reveal>
          <div className="grid-4">{TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}</div>
        </div>
      </section>
      <div style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "18px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, x) =>
            [
              "NEON BREW CO.",
              "--",
              "APEX STREETWEAR",
              "--",
              "SOLSTICE FESTIVAL",
              "--",
              "PULSE FITNESS",
              "--",
              "URBAN EATS",
              "--",
              "CTRL AUDIO",
              "--",
              "MIRAGE CLUB GROUP",
              "--",
            ].map((wd, i) => (
              <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", color: wd === "--" ? C.orange : "rgba(255,255,255,0.22)", marginRight: "28px" }}>
                {wd}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
