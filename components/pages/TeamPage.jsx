"use client";

import { useState } from "react";
import Image from "next/image";
import { C } from "@/components/shared/vibeTheme";
import { Divider, PageHero, Reveal, Tag } from "@/components/shared/ui";

const TEAM = [
  {
    name: "Kojo Papo",
    role: "CEO & Co-Founder",
    dept: "Leadership",
    photo: "/team/kojopapo.jpg",
    socials: {
      facebook: "https://www.facebook.com/kagisolesibakojo.papo",
      twitter: "https://x.com/kojopapo",
      github: "https://github.com/KojoPapo-Hub",
      linkedin: "https://www.linkedin.com/in/kojopapo/",
    },
    quote: "We're not building an app. We're building the infrastructure for how cities feel alive.",
    bio: "Just a very passionate versionary building the future of urban experiences.",
    color: C.orange,
  },

];

export default function TeamPage({ openWaitlist, setPage }) {
  const [active, setActive] = useState(null);
  const iconStyle = {
    width: "16px",
    height: "16px",
    display: "block",
  };
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="The Team" title="Meet the builders" accent="of the vibe." sub="Developers, designers, strategists, creatives --- building a living ecosystem, not just an app." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ marginBottom: "52px" }}>
            <Tag>Core Team</Tag>
          </Reveal>
          <div className="grid-3" style={{ gap: "18px" }}>
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  onClick={() => setActive(active === i ? null : i)}
                  style={{
                    padding: "30px 26px",
                    background: active === i ? `${m.color}0A` : "rgba(0,0,0,0.02)",
                    border: `1px solid ${active === i ? m.color + "50" : C.border}`,
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all .3s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== i) {
                      e.currentTarget.style.borderColor = m.color + "30";
                      e.currentTarget.style.background = `${m.color}05`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== i) {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: `${m.color}10`,
                        border: `2px solid ${m.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={m.photo}
                        alt={`${m.name} portrait`}
                        width={48}
                        height={48}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 600, color: C.text }}>{m.name}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: m.color, marginTop: "2px" }}>{m.role}</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontStyle: "italic", color: C.dim, lineHeight: 1.7, marginBottom: active === i ? "14px" : "0" }}>
                    "{m.quote}"
                  </p>
                  {active === i && (
                    <div style={{ animation: "fadeUp .3s ease" }}>
                      <div style={{ height: "1px", background: `${m.color}30`, margin: "14px 0" }} />
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, lineHeight: 1.7 }}>{m.bio}</p>
                      <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                        {m.socials?.facebook && (
                          <a
                            href={m.socials.facebook}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: C.text,
                              border: `1px solid ${m.color}40`,
                              padding: "6px",
                              borderRadius: "2px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "28px",
                              height: "28px",
                            }}
                            aria-label={`${m.name} on Facebook`}
                            title="Facebook"
                          >
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle} fill="currentColor">
                              <path d="M13.5 8.5V6.6c0-.9.2-1.3 1.2-1.3h1.7V2.5h-2.4c-2.6 0-3.5 1.1-3.5 3.1v2.9H8.8v2.9h1.7V21h3V11.4h2.3l.3-2.9h-2.6z" />
                            </svg>
                          </a>
                        )}
                        {m.socials?.twitter && (
                          <a
                            href={m.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: C.text,
                              border: `1px solid ${m.color}40`,
                              padding: "6px",
                              borderRadius: "2px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "28px",
                              height: "28px",
                            }}
                            aria-label={`${m.name} on X`}
                            title="X / Twitter"
                          >
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle} fill="currentColor">
                              <path d="M18.9 2.5h2.3l-5 5.7 5.8 7.8h-4.6l-3.6-4.8-4.3 4.8H7.2l5.3-5.9L7 2.5h4.7l3.2 4.3 4-4.3zm-.8 12.9h1.3L9.9 4.9H8.5l9.6 10.5z" />
                            </svg>
                          </a>
                        )}
                        {m.socials?.github && (
                          <a
                            href={m.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: C.text,
                              border: `1px solid ${m.color}40`,
                              padding: "6px",
                              borderRadius: "2px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "28px",
                              height: "28px",
                            }}
                            aria-label={`${m.name} on GitHub`}
                            title="GitHub"
                          >
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle} fill="currentColor">
                              <path d="M12 2.5a9.5 9.5 0 0 0-3 18.6c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9 1.9 2.9 1.3.1-.8.4-1.3.7-1.6-2.3-.3-4.7-1.2-4.7-5.2 0-1.2.4-2.1 1-2.9-.1-.2-.4-1.3.1-2.6 0 0 .9-.3 2.9 1.1a9.7 9.7 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.5 1.3.2 2.4.1 2.6.6.7 1 1.7 1 2.9 0 4-2.4 4.9-4.7 5.2.4.3.8 1 .8 2.1v3.1c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z" />
                            </svg>
                          </a>
                        )}
                        {m.socials?.linkedin && (
                          <a
                            href={m.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: C.text,
                              border: `1px solid ${m.color}40`,
                              padding: "6px",
                              borderRadius: "2px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "28px",
                              height: "28px",
                            }}
                            aria-label={`${m.name} on LinkedIn`}
                            title="LinkedIn"
                          >
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle} fill="currentColor">
                              <path d="M4.9 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zM3.3 9h3.2v11.5H3.3V9zm6 0h3.1v1.6h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5v6.6h-3.2v-5.9c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6h-3.2V9z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2">
          <div>
            <Reveal>
              <Tag>How we work</Tag>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,52px)", color: C.text, lineHeight: 1, margin: "16px 0 20px" }}>
                Culture isn't built in
                <br />
                <span style={{ color: C.orange }}>conference rooms.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: C.dim, lineHeight: 1.8 }}>
                We work embedded in cities. We ship fast. We talk to creators and businesses every day. We build what we'd actually want to use.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              ["----", "Remote-first", "Work from wherever you’re most effective."],
              ["---", "Ship weekly", "Small releases. Constant improvement."],
              ["----", "Direct impact", "Fewer layers. Faster decisions."],
              ["----", "Long-term incentives", "Structured around shared success."],
            ].map(([ic, t, d], i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "18px 22px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", transition: "all .3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.orange;
                    e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{ic}</span>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "16px", color: C.text }}>{t}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim, marginTop: "3px" }}>{d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <section className="sec-pad-sm" style={{ background: C.bg2, textAlign: "center" }}>
        <Reveal>
          <Tag>Join us</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,5vw,52px)", color: C.text, lineHeight: 1, margin: "16px auto 20px", maxWidth: "500px" }}>
            Want to be on this page?
            <br />
            <span style={{ color: C.orange }}>No open roles right now.</span>
          </h2>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                setPage("Jobs");
                window.scrollTo(0, 0);
              }}
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 32px", background: C.orange, color: C.textOnAccent, border: "none", borderRadius: "2px", cursor: "pointer" }}
            >
              Careers
            </button>
            <button
              onClick={() => openWaitlist("Team Interest")}
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
              Join Waitlist
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
