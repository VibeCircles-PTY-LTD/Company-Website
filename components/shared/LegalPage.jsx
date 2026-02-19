"use client";

import { C } from "@/components/shared/vibeTheme";
import { Divider, Orb, Reveal, Tag } from "@/components/shared/ui";

export function LegalPage({ title, tag, lastUpdated, sections }) {
  return (
    <div style={{ background: C.bg, color: C.white }}>
      <section style={{ padding: "130px 64px 60px", position: "relative", overflow: "hidden", background: C.bg }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.orange}04 1px,transparent 1px),linear-gradient(90deg,${C.orange}04 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Orb top="-10%" right="-5%" size={400} opacity={0.08} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ animation: "fadeUp .5s ease forwards", opacity: 0, marginBottom: "16px" }}>
            <Tag>{tag}</Tag>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,72px)", lineHeight: 0.95, color: C.white, animation: "fadeUp .55s .08s ease forwards", opacity: 0, marginBottom: "16px" }}>
            {title}
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dimmer, animation: "fadeUp .55s .16s ease forwards", opacity: 0 }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>
      <Divider />
      <section style={{ padding: "72px 64px 100px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ marginBottom: "44px" }}>
                <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(18px,2.5vw,26px)", color: C.orange, letterSpacing: "1px", marginBottom: "14px" }}>{s.h}</h2>
                {(Array.isArray(s.body) ? s.body : [s.body]).map((p, j) => (
                  <p key={j} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.85, marginBottom: "12px" }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
