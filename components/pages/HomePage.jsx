"use client";

import { useEffect, useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";
import { Orb, Reveal, Tag } from "@/components/shared/ui";

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
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(52px,10vw,118px)", lineHeight: 0.9, color: C.text, marginBottom: "16px" }}>
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
                color: C.textOnAccent,
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
                color: C.text,
                border: `1px solid ${C.border}`,
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.orange;
                e.currentTarget.style.color = C.orange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.color = C.text;
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
                  background: "rgba(0,0,0,0.04)",
                  border: `1px solid ${C.border}`,
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
                  e.currentTarget.style.color = C.text;
                  e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.color = C.dim;
                  e.currentTarget.style.background = "rgba(0,0,0,0.04)";
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
            <Tag>What we envision</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              The vibe is <span style={{ color: C.orange }}>real.</span>
            </h2>
          </Reveal>
          <div style={{ maxWidth: "720px" }}>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>
                VibeCircles envisions a digital world where people connect through shared energy, not just profiles and posts. We aim to build a platform where conversations feel human, communities feel like home, and creativity moves faster than algorithms. In a noisy internet chasing attention, VibeCircles exists to cultivate presence — a space where students, creators, hustlers, and everyday explorers can find their people, express their vibe, and turn moments into movements.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: "24px" }}>
                VibeCircles isn't just a social platform; it's an ecosystem for belonging in the modern age — where technology amplifies authenticity instead of replacing it.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: C.dim, lineHeight: 1.85, marginBottom: 0 }}>
                The strange truth about online spaces is that the more "connected" we become, the more fragmented we often feel. A platform that optimizes for vibe — shared context, mood, and intent — is less about features and more about social physics: lowering friction between humans who were already meant to find each other.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <div style={{ background: C.bg, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "18px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, x) =>
            [
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
              "",
              "--",
            ].map((wd, i) => (
              <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "3px", color: wd === "--" ? C.orange : C.dimmer, marginRight: "28px" }}>
                {wd}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
