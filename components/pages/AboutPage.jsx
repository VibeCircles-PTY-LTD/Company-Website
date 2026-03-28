"use client";

import { C } from "@/components/shared/vibeTheme";
import { Divider, Orb, PageHero, Reveal, Tag } from "@/components/shared/ui";

export default function AboutPage() {
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero
        tag="About VibeCircles"
        title="We build real-world"
        accent="social infrastructure."
        sub="We’re a South African technology company designing digital spaces that feel human again — spaces rooted in real places, real energy, and real communities. While most platforms compete for attention, we focus on connection. Not just online, but where life actually happens."
      />
      <Divider />
      <section className="sec-pad" style={{ position: "relative", overflow: "hidden" }}>
        <Orb top="18%" left="-8%" size={420} opacity={0.08} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <Tag>About VibeCircles</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, marginTop: "16px", lineHeight: 1 }}>
              VibeCircles isn’t just building another app. We’re building a living ecosystem.
            </h2>
          </Reveal>
          <div style={{ maxWidth: "860px" }}>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "18px", color: C.dim, lineHeight: 1.8, marginTop: "22px" }}>
                We believe the internet should not replace real life — it should amplify it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: C.dim, lineHeight: 1.8 }}>
                VibeCircles connects people to places, creators to communities, and digital energy to physical locations. Our platform blends social discovery, live
                experiences, business visibility, and location intelligence into one ecosystem designed for modern culture.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: C.dim, lineHeight: 1.8 }}>
                We are not just building another social feed. We are building a network where:
              </p>
            </Reveal>
            <div className="grid-2" style={{ marginTop: "22px", gap: "16px" }}>
              {[
                "Events become interactive moments",
                "Cities become discoverable through people",
                "Businesses connect to audiences in real time",
                "Creators extend their influence beyond platforms",
                "Digital conversations translate into physical experiences",
              ].map((line, i) => (
                <Reveal key={line} delay={0.35 + i * 0.05}>
                  <div style={{ padding: "18px 20px", border: `1px solid ${C.border}`, background: "rgba(0,0,0,0.02)" }}>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.text }}>{line}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <Reveal>
            <Tag>At Our Core</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,4.5vw,52px)", color: C.text, marginTop: "16px", lineHeight: 1 }}>
              The world is full of energy — but it’s scattered.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: C.dim, lineHeight: 1.8, marginTop: "18px" }}>
              We are building the infrastructure that organizes that energy into communities, moments, and opportunities.
            </p>
          </Reveal>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ position: "relative", overflow: "hidden" }}>
        <Orb bottom="-18%" right="-8%" size={460} color={C.pink} opacity={0.08} delay="2s" />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2">
          <div>
            <Reveal>
              <Tag>Our Vision</Tag>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,48px)", color: C.text, lineHeight: 1.1, margin: "16px 0 18px" }}>
                Power how people discover
                <br />
                <span style={{ color: C.orange }}>what’s happening around them.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8 }}>
                To become the platform that powers how people discover what’s happening around them — both online and in real life. We envision a future where
                cities feel connected, businesses feel accessible, and communities feel alive.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.15}>
              <Tag>Our Mission</Tag>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,48px)", color: C.text, lineHeight: 1.1, margin: "16px 0 18px" }}>
                Build a seamless
                <br />
                <span style={{ color: C.orange }}>real‑world technology ecosystem.</span>
              </h2>
              <div style={{ display: "grid", gap: "10px" }}>
                {[
                  "Makes local discovery intelligent",
                  "Empowers creators and businesses",
                  "Supports real-world engagement",
                  "Blends maps, media, and live interaction into one seamless experience",
                ].map((line, i) => (
                  <Reveal key={line} delay={0.2 + i * 0.05}>
                    <div style={{ padding: "14px 16px", border: `1px solid ${C.border}`, background: "rgba(0,0,0,0.02)" }}>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.text }}>{line}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Reveal>
            <Tag>What Makes Us Different</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, marginTop: "16px", lineHeight: 1 }}>
              VibeCircles is built as an ecosystem — not a feature.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: C.dim, lineHeight: 1.8, marginTop: "16px" }}>
              We integrate location intelligence, live streaming integration, community-driven content, business tools, event infrastructure, and discovery algorithms.
              This allows VibeCircles to function as more than a social platform — it becomes a digital layer over real-world culture.
            </p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "22px" }}>
            {[
              "Location intelligence",
              "Live streaming integration",
              "Community-driven content",
              "Business tools",
              "Event infrastructure",
              "Discovery algorithms",
            ].map((line, i) => (
              <Reveal key={line} delay={0.15 + i * 0.05}>
                <div style={{ padding: "16px 18px", border: `1px solid ${C.border}`, background: "rgba(0,0,0,0.02)" }}>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.text }}>{line}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Reveal>
            <Tag>Our Philosophy</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,56px)", color: C.text, marginTop: "16px", lineHeight: 1 }}>
              Technology should:
            </h2>
          </Reveal>
          <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
            {[
              "Connect, not isolate.",
              "Empower, not exploit.",
              "Enable growth, not distraction.",
            ].map((line, i) => (
              <Reveal key={line} delay={0.1 + i * 0.05}>
                <div style={{ padding: "16px 18px", border: `1px solid ${C.border}`, background: "rgba(0,0,0,0.02)" }}>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.text }}>{line}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "17px", color: C.dim, lineHeight: 1.8, marginTop: "22px" }}>
              VibeCircles is designed to evolve with culture, not chase trends. We are building long-term infrastructure for creators, communities, and cities.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
