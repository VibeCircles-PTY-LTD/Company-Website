"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
            <button
              onClick={() => openWaitlist("Creator Waitlist")}
              className="bg-vc-orange text-vc-white font-body uppercase tracking-[0.2em] py-4 px-12 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
              style={{ fontSize: "12px", fontWeight: 600, border: "none", cursor: "pointer" }}
            >
              Join the Movement
            </button>
            <button
              onClick={() => go("Marketplace")}
              className="border border-vc-ink/10 text-vc-ink font-body uppercase tracking-[0.2em] py-4 px-12 rounded-full transition-all hover:border-vc-orange hover:text-vc-orange bg-white/40 backdrop-blur-sm flex items-center justify-center"
              style={{ fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
            >
              Explore Marketplace
            </button>
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
            {[
              { l: "About", p: "About" },
              { l: "Creators", p: "Creators" },
              { l: "Marketplace", p: "Marketplace" },
              { l: "For Business", p: "Business" },
              { l: "Contact", p: "Contact" },
            ].map(({ l, p }) => (
              <button
                key={p}
                onClick={() => go(p)}
                className="font-body text-[11px] uppercase tracking-widest px-8 py-3.5 rounded-full border border-vc-ink/5 bg-white/50 text-vc-dim transition-all hover:border-vc-orange hover:text-vc-orange hover:bg-white shadow-sm"
                style={{ cursor: "pointer", fontWeight: 500 }}
              >
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
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src="/social_gravity_vis_premium.png"
                alt="Social Gravity Visualization"
                fill
                sizes="(max-width: 960px) 100vw, 520px"
                style={{ objectFit: "cover", opacity: 0.8 }}
              />
              <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 100px rgba(0,0,0,0.8)" }} />
              {/* Decorative elements */}
              <div style={{ position: "absolute", top: "20%", left: "20%", width: "2px", height: "20%", background: `linear-gradient(to bottom, ${C.orange}, transparent)`, animation: "pageEnter 2s infinite" }} />
              <div style={{ position: "absolute", bottom: "30%", right: "15%", width: "40%", height: "1px", background: `linear-gradient(to left, ${C.pink}, transparent)`, animation: "pageEnter 3s infinite alternate" }} />
            </div>
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
