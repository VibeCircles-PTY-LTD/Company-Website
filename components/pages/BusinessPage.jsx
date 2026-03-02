"use client";

import { useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { Divider, FAQ, Orb, PageHero, PricingCard, Reveal, Tag } from "@/components/shared/ui";
import { BIZ_PRICING } from "@/components/data/pricing";

const BIZ_TOOLS = [
  { num: "01", title: "Claim Your Location", desc: "Take ownership of your spot on the VibeCircle map. Your location becomes a living destination.", icon: "----" },
  { num: "02", title: "Run Promotions", desc: "Launch time-limited offers that pulse to nearby users. Create urgency. Drive traffic.", icon: "----" },
  { num: "03", title: "Host Events", desc: "Create events that appear on the live map. Tap into VibeCircle's discovery engine.", icon: "----" },
  { num: "04", title: "Go Live", desc: "Stream directly from your location. Let people see the energy before they arrive.", icon: "----" },
  { num: "05", title: "Track Engagement", desc: "See who's viewing, saving, and visiting your location in real time.", icon: "----" },
  { num: "06", title: "Launch Campaigns", desc: "Combine all tools into targeted campaigns that grow with your business.", icon: "----" },
];

const BIZ_FAQS = [
  { q: "What does 'claiming a location' mean?", a: "Claiming your location creates an official business profile linked to your real-world address. It appears as a branded pin on the map, and users can check in, leave reviews, and share content tagged to your venue." },
  { q: "Can I manage multiple locations?", a: "Yes. The Enterprise plan supports multi-location management through a unified dashboard --- ideal for chains, franchises, and multi-venue operators." },
  { q: "How does Go Live work for businesses?", a: "When you go live, your stream appears as a pulsing pin on the map for nearby users. Perfect for previewing tonight's event, showcasing a new menu item, or capturing a special moment." },
  { q: "Is there a setup fee?", a: "No setup fees. Claim your location and go live the same day you sign up." },
  { q: "Can I try it before committing?", a: "Growth plan comes with a 14-day free trial, no credit card required. Starter is month-to-month with no lock-in." },
];

export default function BusinessPage({ openWaitlist }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="VibeCircle for Business" title="Turn foot traffic into" accent="digital gravity." sub="When your location pulses on the map, people don't just see you --- they find you." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}>
            <Tag>Business Tools</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Everything you need
              <br />
              <span style={{ color: C.orange }}>in one place.</span>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {BIZ_TOOLS.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "16px 20px",
                    background: active === i ? "rgba(255,107,0,0.1)" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${active === i ? C.orange + "60" : C.border}`,
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== i) {
                      e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                      e.currentTarget.style.borderColor = C.border;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== i) {
                      e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                      e.currentTarget.style.borderColor = C.border;
                    }
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{t.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "15px", color: active === i ? C.orange : C.text }}>{t.title}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "2px", color: C.dimmer, textTransform: "uppercase", marginTop: "1px" }}>{t.num}</div>
                  </div>
                  {active === i && <div style={{ color: C.orange, fontSize: "13px" }}>---</div>}
                </div>
              ))}
            </div>
            <div key={active} style={{ padding: "40px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", animation: "fadeIn .3s ease", position: "relative", overflow: "hidden" }}>
              <Orb top="-30%" right="-20%" size={280} opacity={0.15} />
              <div style={{ fontSize: "40px", marginBottom: "18px" }}>{BIZ_TOOLS[active].icon}</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(22px,3vw,38px)", color: C.orange, lineHeight: 1, marginBottom: "14px" }}>{BIZ_TOOLS[active].title}</div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8, marginBottom: "24px" }}>{BIZ_TOOLS[active].desc}</p>
              <div style={{ width: "100%", height: "2px", background: `linear-gradient(90deg,${C.orange},${C.pink})`, borderRadius: "1px", transformOrigin: "left", animation: "lineGrow .4s ease forwards" }} />
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px", textAlign: "center" }}>
            <Tag>Business Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,54px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Choose your level of <span style={{ color: C.orange }}>gravity.</span>
            </h2>
          </Reveal>
          <div className="grid-3">{BIZ_PRICING.map((p, i) => (
            <PricingCard key={i} {...p} onCta={() => openWaitlist(`Business ${p.plan} Plan`)} />
          ))}</div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "44px" }}>
            <Tag>Business FAQ</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(26px,4vw,44px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Everything you need <span style={{ color: C.orange }}>to know.</span>
            </h2>
          </Reveal>
          <FAQ items={BIZ_FAQS} />
        </div>
      </section>
      <section className="sec-pad-sm" style={{ background: C.bg3 }}>
        <Reveal>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 52px", background: `linear-gradient(135deg,rgba(255,107,0,0.12) 0%,rgba(255,45,120,0.06) 100%)`, border: `1px solid ${C.orange}25`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px,4vw,44px)", color: C.text, lineHeight: 1 }}>
              Ready to make your
              <br />
              location <span style={{ color: C.orange }}>pulse?</span>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => openWaitlist("Business Get Started")}
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer", transition: "box-shadow .2s" }}
                onMouseEnter={(e) => (e.target.style.boxShadow = `0 10px 32px ${C.orange}40`)}
                onMouseLeave={(e) => (e.target.style.boxShadow = "")}
              >
                Get Started Free
              </button>
              <button
                onClick={() => openWaitlist("Business Demo")}
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: "transparent", color: C.text, border: `1px solid ${C.border}`, borderRadius: "2px", cursor: "pointer", transition: "all .2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.orange;
                  e.currentTarget.style.color = C.orange;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.color = C.text;
                }}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
