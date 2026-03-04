"use client";

import { useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { CREATOR_TIERS, AD_PRICING, BIZ_PRICING } from "@/components/data/pricing";
import { Divider, PageHero, PricingCard, Reveal, Tag } from "@/components/shared/ui";

export default function PricingPage({ openWaitlist }) {
  const [annual, setAnnual] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero
        tag="Pricing"
        title="Choose your"
        accent="level of gravity."
        sub="Creator tiers, advertising plans, and business tools. One platform."
      />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px", textAlign: "center" }}>
            <Tag>Creator Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Grow your presence. <span style={{ color: C.orange }}>Earn with brands.</span>
            </h2>
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: annual ? C.dim : C.text }}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                style={{
                  width: "44px",
                  height: "24px",
                  borderRadius: "12px",
                  background: annual ? C.orange : "rgba(0,0,0,0.12)",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                }}
                aria-label={annual ? "Switch to monthly" : "Switch to annual"}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: annual ? "22px" : "2px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: C.white,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    transition: "left .25s ease",
                  }}
                />
              </button>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: annual ? C.text : C.dim }}>Annual (save 20%)</span>
            </div>
          </Reveal>
          <div className="grid-3">
            {CREATOR_TIERS.map((t, i) => (
              <PricingCard key={i} {...t} annual={annual} onCta={() => openWaitlist(`Creator ${t.plan} Plan`)} />
            ))}
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: C.bg }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px", textAlign: "center" }}>
            <Tag>Advertising Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Pick your level of <span style={{ color: C.orange }}>dominance.</span>
            </h2>
          </Reveal>
          <div className="grid-3">
            {AD_PRICING.map((p, i) => (
              <PricingCard key={i} {...p} onCta={() => openWaitlist(`Advertise ${p.plan} Plan`)} />
            ))}
          </div>
        </div>
      </section>
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px", textAlign: "center" }}>
            <Tag>Business Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Choose your level of <span style={{ color: C.orange }}>gravity.</span>
            </h2>
          </Reveal>
          <div className="grid-3">
            {BIZ_PRICING.map((p, i) => (
              <PricingCard key={i} {...p} onCta={() => openWaitlist(`Business ${p.plan} Plan`)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
