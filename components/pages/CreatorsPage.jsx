"use client";

import { C } from "@/components/shared/vibeTheme";
import { Divider, PageHero, Reveal, Tag } from "@/components/shared/ui";

const CREATOR_TOOLS = [
  { icon: "-------", title: "Live City Map", desc: "Your content appears on the real-time map of your city. People discover you by location, not algorithm." },
  { icon: "---", title: "Creator Feed", desc: "A social feed that prioritizes creators in your city and culture niche. Built for discovery, not addiction." },
  { icon: "-------", title: "Go Live Anywhere", desc: "Stream from any location. Your live appears on the map for nearby users to join in real time." },
  { icon: "----", title: "Brand Marketplace", desc: "Browse and apply to paid brand deals directly. No middlemen, no agencies." },
  { icon: "----", title: "Creator Analytics", desc: "Real metrics: map views, discovery impressions, location reach, and audience growth over time." },
  { icon: "----", title: "Community Spaces", desc: "Create invite-only groups around your city scene, niche, or next event." },
];

export default function CreatorsPage({ openWaitlist }) {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="For Creators" title="Your city is your" accent="stage. Own it." sub="VibeCircles gives creators tools to build a real local following, get discovered on the live city map, and earn from brand partnerships." />
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
