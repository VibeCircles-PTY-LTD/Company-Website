"use client";

import { useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { Divider, FAQ, PageHero, PricingCard, Reveal, Tag } from "@/components/shared/ui";
import { CREATOR_TIERS } from "@/components/data/pricing";

const CREATOR_TOOLS = [
  { icon: "-------", title: "Live City Map", desc: "Your content appears on the real-time map of your city. People discover you by location, not algorithm." },
  { icon: "---", title: "Creator Feed", desc: "A social feed that prioritizes creators in your city and culture niche. Built for discovery, not addiction." },
  { icon: "-------", title: "Go Live Anywhere", desc: "Stream from any location. Your live appears on the map for nearby users to join in real time." },
  { icon: "----", title: "Brand Marketplace", desc: "Browse and apply to paid brand deals directly. No middlemen, no agencies." },
  { icon: "----", title: "Creator Analytics", desc: "Real metrics: map views, discovery impressions, location reach, and audience growth over time." },
  { icon: "----", title: "Community Spaces", desc: "Create invite-only groups around your city scene, niche, or next event." },
];

const CREATOR_FAQS = [
  {
    q: "How does the city map placement work?",
    a: "When you post content tagged to a location, it appears as a live pin on the VibeCircle map for users in that area. The map is real-time --- people nearby can discover you while they're actually in your city.",
  },
  {
    q: "How do I get my first brand deal?",
    a: "With Pulse or Orbit, you unlock access to the Brand Marketplace where you can browse live campaigns and apply directly. Each brand sets its own campaign requirements, including follower count, niche, and location. Many focus more on authenticity, engagement, and local influence than just numbers. Most brands respond within 48 hours.",
  },
  {
    q: "Is there a follower minimum to join?",
    a: "None. VibeCircle isn't about follower counts --- it's about city presence and energy. We've seen creators with 500 followers land brand deals because they own their local scene.",
  },
  {
    q: "How does the Creator Fund work?",
    a: "Orbit creators are eligible for VibeCircle's Creator Fund, which pays based on verified map impressions, discovery reach, and engagement from real-world posts. Payouts are monthly.",
  },
  {
    q: "Can I use VibeCircle alongside Instagram or TikTok?",
    a: "Absolutely. VibeCircle is complementary, not competitive. Most creators cross-post content and use VC for local discovery and brand deals.",
  },
];

export default function CreatorsPage({ openWaitlist }) {
  const [annual, setAnnual] = useState(false);
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="For Creators" title="Your city is your" accent="stage. Own it." sub="VibeCircle gives creators tools to build a real local following, get discovered on the live city map, and earn from brand partnerships." />
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}>
            <Tag>Creator Tools</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Everything you need to
              <br />
              <span style={{ color: C.orange }}>light up your city.</span>
            </h2>
          </Reveal>
          <div className="grid-3">{CREATOR_TOOLS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                style={{ padding: "30px 26px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", height: "100%", transition: "all .3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.orange;
                  e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "14px" }}>{t.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "19px", color: C.text, marginBottom: "9px" }}>{t.title}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7 }}>{t.desc}</div>
              </div>
            </Reveal>
          ))}</div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "16px", textAlign: "center" }}>
            <Tag>Creator Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px", marginBottom: "28px" }}>
              Start free. Scale <span style={{ color: C.orange }}>when ready.</span>
            </h2>
          </Reveal>
          <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", background: "rgba(0,0,0,0.04)", border: `1px solid ${C.border}`, borderRadius: "3px", padding: "4px" }}>
              {["Monthly", "Annual"].map((t) => (
                <button
                  key={t}
                  onClick={() => setAnnual(t === "Annual")}
                  style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    padding: "9px 24px",
                    background: (t === "Annual") === annual ? C.orange : "transparent",
                    color: (t === "Annual") === annual ? C.textOnAccent : C.dim,
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    transition: "all .2s",
                  }}
                >
                  {t}
                  {t === "Annual" && <span style={{ fontSize: "10px", marginLeft: "6px", background: C.orange + "30", color: C.orange, padding: "2px 6px", borderRadius: "2px" }}>-20%</span>}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid-3">{CREATOR_TIERS.map((t, i) => (
            <PricingCard
              key={i}
              {...t}
              cta="Coming Soon"
              annual={annual}
            />
          ))}</div>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dimmer, textAlign: "center", marginTop: "24px" }}>
              All plans include a 14-day free trial. No credit card required for Spark.
            </p>
          </Reveal>
        </div>
      </section>
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "44px" }}>
            <Tag>Creator FAQ</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(26px,4vw,46px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Questions, <span style={{ color: C.orange }}>answered.</span>
            </h2>
          </Reveal>
          <FAQ items={CREATOR_FAQS} />
        </div>
      </section>
      <div style={{ background: C.orange, padding: "22px 64px", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(4)].map((_, x) =>
            ["City Map", "--", "Brand Deals", "--", "Go Live", "--", "Creator Fund", "--", "Real Discovery", "--"].map((wd, i) => (
              <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", color: "rgba(5,5,10,0.65)", marginRight: "26px" }}>
                {wd}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
