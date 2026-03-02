"use client";

import { C } from "@/components/shared/vibeTheme";
import { Divider, FAQ, PageHero, PricingCard, Reveal, Tag } from "@/components/shared/ui";
import { AD_PRICING } from "@/components/data/pricing";

const AD_FEATURES = [
  { icon: "----", title: "Geo-Targeted Campaigns", desc: "Reach people physically near your location. Pinpoint precision, zero waste.", color: C.orange },
  { icon: "----", title: "Sponsor Creator Moments", desc: "Embed your brand inside cultural moments --- not beside them.", color: C.pink },
  { icon: "----", title: "Event Promotion", desc: "Put your event on the live map. Watch RSVPs grow as your pin pulses.", color: C.blue },
  { icon: "----", title: "Boost Local Visibility", desc: "Climb the discovery feed for your neighborhood. Be impossible to miss.", color: C.orange },
  { icon: "----", title: "Live Experience Ads", desc: "Promote while the experience is happening. Capture FOMO at its peak.", color: C.pink },
  { icon: "----", title: "Real-Time Analytics", desc: "Track impressions, foot traffic, and engagement as they happen.", color: C.blue },
];

const AD_FAQS = [
  { q: "How does geo-targeting work?", a: "VibeCircle uses precise real-time location data to serve your ad to users within your defined radius --- a block, neighborhood, or whole city." },
  { q: "What's the minimum budget?", a: "The Local plan starts at R2,999/month. No minimum ad spend commitment. Cancel anytime." },
  { q: "Can I sponsor a specific creator?", a: "Yes. On Growth and City plans, you can browse the creator marketplace and propose direct sponsorships. Creators typically respond within 48 hours." },
  { q: "What analytics do I get?", a: "All plans include impression counts and engagement metrics. Growth and City add heat maps, audience demographics, and foot-traffic correlation data." },
  { q: "Is there a contract?", a: "No contracts. All plans are month-to-month. City plan clients can opt into annual billing for a 20% discount." },
];

export default function AdvertisePage({ openWaitlist }) {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Advertise" title="Ads that integrate," accent="not interrupt." sub="Traditional ads interrupt. VibeCircle ads integrate. We power discovery, not distraction." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}>
            <Tag>Ad Products</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Every tool to make your
              <br />
              <span style={{ color: C.orange }}>energy visible.</span>
            </h2>
          </Reveal>
          <div className="grid-3">{AD_FEATURES.map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                style={{ padding: "30px 26px", borderRadius: "4px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, height: "100%", transition: "all .3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = f.color;
                  e.currentTarget.style.background = `${f.color}0D`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "13px" }}>{f.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "19px", color: f.color, marginBottom: "9px" }}>{f.title}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            </Reveal>
          ))}</div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px", textAlign: "center" }}>
            <Tag>Advertising Plans</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Pick your level of <span style={{ color: C.orange }}>dominance.</span>
            </h2>
          </Reveal>
          <div className="grid-3">{AD_PRICING.map((p, i) => (
            <PricingCard
              key={i}
              {...p}
              cta="Coming Soon"
            />
          ))}</div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "44px" }}>
            <Tag>Advertiser FAQ</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(26px,4vw,44px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>
              Your questions, <span style={{ color: C.orange }}>answered.</span>
            </h2>
          </Reveal>
          <FAQ items={AD_FAQS} />
        </div>
      </section>
      <div style={{ background: C.orange, padding: "20px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, x) =>
            ["Geo-Targeted", "--", "Creator Moments", "--", "Event Promotion", "--", "Live Ads", "--", "Real Analytics", "--"].map((wd, i) => (
              <span key={`${x}-${i}`} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "15px", letterSpacing: "3px", color: "rgba(5,5,10,0.7)", marginRight: "30px" }}>
                {wd}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
