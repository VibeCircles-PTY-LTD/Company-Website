"use client";

import { useEffect, useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";
import { Orb, Reveal, Tag } from "@/components/shared/ui";

const STORY_GRADIENTS = [
  "conic-gradient(from 0deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)",
  "conic-gradient(from 120deg, #00c6ff, #0072ff, #6a11cb, #00c6ff)",
  "conic-gradient(from 60deg, #fce38a, #f38181, #aa96da, #fcbad3, #fce38a)",
  "conic-gradient(from -40deg, #11998e, #38ef7d, #56ab2f, #11998e)",
  "conic-gradient(from 200deg, #ff6b6b, #ee5a6f, #c44569, #f8b500, #ff6b6b)",
  "conic-gradient(from 90deg, #667eea, #764ba2, #f093fb, #667eea)",
  "conic-gradient(from 0deg, #E8511A, #f5a623, #ff6b35, #E8511A)",
];

function StoryAvatar({ label, ringGradient, size = 46 }) {
  const inner = Math.max(0, size - 6);
  return (
    <div
      style={{
        padding: 3,
        borderRadius: "50%",
        background: ringGradient,
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          borderRadius: "50%",
          background: "#0a0a12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: size > 42 ? 15 : 13,
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SocialGravityOrbital() {
  const outerR = "min(42vw, 168px)";
  const innerR = "min(24vw, 96px)";
  const outer = [
    { label: "VC", g: STORY_GRADIENTS[0] },
    { label: "SG", g: STORY_GRADIENTS[1] },
    { label: "OM", g: STORY_GRADIENTS[2] },
    { label: "++", g: STORY_GRADIENTS[3] },
  ];
  const inner = [
    { label: "DM", g: STORY_GRADIENTS[4] },
    { label: "RK", g: STORY_GRADIENTS[5] },
    { label: "LY", g: STORY_GRADIENTS[6] },
  ];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "radial-gradient(ellipse at 50% 45%, rgba(232,81,26,0.08) 0%, transparent 55%), #05050A",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        aria-hidden
      >
        <circle
          cx="200"
          cy="200"
          r="178"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.5"
          strokeDasharray="10 14"
          strokeLinecap="round"
        />
        <circle
          cx="200"
          cy="200"
          r="124"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.25"
          strokeDasharray="8 12"
          strokeLinecap="round"
        />
        <circle
          cx="200"
          cy="200"
          r="72"
          fill="none"
          stroke="rgba(232,81,26,0.28)"
          strokeWidth="1.25"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
      </svg>

      {/* Outer track — clockwise */}
      <div
        className="sg-orbit-cw"
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "50% 50%",
        }}
      >
        {outer.map((a, i) => (
          <div
            key={`o-${i}`}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 52,
              height: 52,
              marginLeft: -26,
              marginTop: -26,
              transform: `rotate(${i * 90}deg) translateY(calc(-1 * ${outerR}))`,
            }}
          >
            <div
              className="sg-orbit-counter-ccw"
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "50% 50%",
              }}
            >
              <StoryAvatar label={a.label} ringGradient={a.g} size={48} />
            </div>
          </div>
        ))}
      </div>

      {/* Inner track — counter-clockwise */}
      <div
        className="sg-orbit-ccw"
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "50% 50%",
        }}
      >
        {inner.map((a, i) => (
          <div
            key={`i-${i}`}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 48,
              height: 48,
              marginLeft: -24,
              marginTop: -24,
              transform: `rotate(${i * 120}deg) translateY(calc(-1 * ${innerR}))`,
            }}
          >
            <div
              className="sg-orbit-counter-cw"
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "50% 50%",
              }}
            >
              <StoryAvatar label={a.label} ringGradient={a.g} size={44} />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 80px rgba(0,0,0,0.65)",
          pointerEvents: "none",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

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
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(48px, 9vw, 96px)", lineHeight: 1.05, color: C.text, marginBottom: "20px", textTransform: "uppercase" }}>
            IT'S NOT
            <br />
            JUST MEDIA.
            <br />
            IT'S SOCIAL
            <br />
            <span style={{ color: C.orange }}>GRAVITY.</span>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "clamp(16px, 2vw, 20px)", color: C.dim, margin: "24px auto 44px", maxWidth: "560px", lineHeight: 1.6 }}>
            Where creators, cities, events, and businesses connect in real time.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}>
            <button type="button" onClick={() => openWaitlist("Creator Waitlist")} className="vc-btn vc-btn--primary" style={{ fontSize: "12px", padding: "16px 36px" }}>
              Join the Movement
            </button>
            <button type="button" onClick={() => go("Marketplace")} className="vc-btn vc-btn--outline" style={{ fontSize: "12px", padding: "16px 36px" }}>
              Explore Marketplace
            </button>
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
            {[
              { l: "About", p: "About" },
              { l: "Marketplace", p: "Marketplace" },
              { l: "Contact", p: "Contact" },
            ].map(({ l, p }) => (
              <button key={p} type="button" onClick={() => go(p)} className="vc-btn vc-btn--ghost-nav">
                {l}
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
                The truth about online spaces is that the more "connected" we become, the more fragmented we often feel. A platform that optimizes for vibe — shared context and mood — is about social physics: lowering friction between humans who were already meant to find each other.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOCIAL GRAVITY SHOWCASE */}
      <section className="sec-pad" style={{ background: "#05050A", color: "#FFFFFF", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.3, background: `radial-gradient(circle at 70% 30%, ${C.orange}22, transparent 50%), radial-gradient(circle at 20% 70%, ${C.pink}11, transparent 40%)` }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }} className="grid-2">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal><Tag style={{ borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}>Core Philosophy</Tag></Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,7vw,82px)", lineHeight: 0.9, marginTop: "20px", marginBottom: "24px" }}>
                ENGINEERING<br /><span style={{ color: C.orange }}>SOCIAL GRAVITY.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "32px" }}>
                We don't just match profiles. we map the unseen forces of urban culture. Social Gravity is our proprietary discovery engine that connects you to the people, places, and events that share your energy — in real time, in your city.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { t: "Cultural Velocity", d: "Discover what's trending in your neighborhood before it hits the mainstream." },
                  { t: "Proximity Sync", d: "Real-world connections powered by hyper-local map technology." },
                  { t: "Vibe Matching", d: "Move beyond interests. Connect on mood, intent, and shared energy." }
                ].map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "1px", background: C.orange, marginTop: "12px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", letterSpacing: "1px", color: "#FFFFFF" }}>{f.t}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{f.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <SocialGravityOrbital />
          </Reveal>
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
