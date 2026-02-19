"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Advertise", "Business", "Jobs", "Contact"];

const MANIFESTO = [
  "Culture should be visible.",
  "Creators deserve gravity.",
  "Businesses should feel human.",
  "Maps are more powerful than feeds.",
  "Real life matters.",
];

const JOBS = [
  { title: "Frontend Engineers", tag: "Engineering" },
  { title: "Backend Engineers", tag: "Engineering" },
  { title: "UX Designers", tag: "Design" },
  { title: "Growth Marketers", tag: "Marketing" },
  { title: "Campus Ambassadors", tag: "Community" },
  { title: "Creator Partnership Interns", tag: "Creators" },
];

const BRAND_WORDS = ["Pulse", "Gravity", "Energy", "Discovery", "Movement", "Culture", "Alive"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function PulsingOrb({ style }) {
  return (
    <div style={{
      borderRadius: "50%",
      position: "absolute",
      pointerEvents: "none",
      ...style,
      animation: "orbPulse 6s ease-in-out infinite",
    }} />
  );
}

function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px",
      height: "68px",
      background: scrolled ? "rgba(5,5,10,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,120,0,0.12)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", letterSpacing: "3px", color: "#FF6B00" }}>
        VIBECIRCLE
      </div>
      <div style={{ display: "flex", gap: "36px" }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            onClick={() => setActive(l)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
              color: active === l ? "#FF6B00" : "rgba(255,255,255,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.target.style.color = "#FF6B00"}
            onMouseLeave={e => e.target.style.color = active === l ? "#FF6B00" : "rgba(255,255,255,0.6)"}
          >{l}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "#05050A",
      padding: "120px 24px 80px",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }} />
      <PulsingOrb style={{ width: 500, height: 500, top: "10%", left: "-10%", background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)" }} />
      <PulsingOrb style={{ width: 400, height: 400, bottom: "5%", right: "-8%", background: "radial-gradient(circle, rgba(255,50,150,0.12) 0%, transparent 70%)", animationDelay: "3s" }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "900px" }}>
        {/* Rotating brand word */}
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(13px,1.5vw,15px)",
          letterSpacing: "5px", color: "#FF6B00",
          marginBottom: "24px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "16px",
        }}>
          <span style={{ width: 32, height: 1, background: "#FF6B00", display: "inline-block" }} />
          <span style={{
            display: "inline-block", overflow: "hidden", height: "20px",
          }}>
            <span key={tick} style={{
              display: "inline-block",
              animation: "wordSlide 0.4s ease forwards",
            }}>
              {BRAND_WORDS[tick % BRAND_WORDS.length]}
            </span>
          </span>
          <span style={{ width: 32, height: 1, background: "#FF6B00", display: "inline-block" }} />
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(52px,9vw,110px)",
          lineHeight: 0.92,
          margin: "0 0 12px",
          color: "#FFFFFF",
          letterSpacing: "2px",
        }}>
          IT'S NOT<br />
          <span style={{ WebkitTextStroke: "2px #FF6B00", color: "transparent" }}>SOCIAL MEDIA.</span><br />
          IT'S SOCIAL<br />
          <span style={{ color: "#FF6B00" }}>GRAVITY.</span>
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(16px,2vw,20px)",
          color: "rgba(255,255,255,0.5)",
          margin: "32px auto 48px",
          maxWidth: "560px",
          lineHeight: 1.7,
        }}>
          Where creators, cities, events, and businesses connect in real time.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "17px", letterSpacing: "3px",
            padding: "16px 44px",
            background: "#FF6B00", color: "#05050A",
            border: "none", borderRadius: "2px",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(255,107,0,0.45)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
          >
            Join the Movement
          </button>
          <button style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "17px", letterSpacing: "3px",
            padding: "16px 44px",
            background: "transparent", color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.25)", borderRadius: "2px",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.color = "#FF6B00"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
          >
            Explore the Map
          </button>
        </div>

        <p style={{
          marginTop: "56px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}>
          Find your people. Find your place. Feel the vibe.
        </p>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "bobDown 2s ease-in-out infinite",
      }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(#FF6B00, transparent)" }} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#080810", padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>
            --- ABOUT VIBECIRCLE
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px,6vw,72px)",
            color: "#fff",
            lineHeight: 1,
            marginBottom: "64px",
          }}>
            Infrastructure for<br />
            <span style={{ color: "#FF6B00" }}>modern city culture.</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
          <AnimatedSection delay={0.1}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px", lineHeight: 1.8,
              color: "rgba(255,255,255,0.65)",
            }}>
              VibeCircle is a location-powered social discovery platform. We combine social feeds, live events, interactive maps, creator tools, business advertising, and community groups --- all inside one ecosystem.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px", lineHeight: 1.8,
              color: "rgba(255,255,255,0.65)",
              marginTop: "24px",
            }}>
              From campus pop-ups to club nights. From digital livestreams to street markets. From creators to brands. VibeCircle makes energy visible.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Social Feeds", "Live Events", "Interactive Maps", "Creator Tools", "Business Advertising", "Community Groups"].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 24px",
                  background: "rgba(255,107,0,0.04)",
                  border: "1px solid rgba(255,107,0,0.12)",
                  borderRadius: "4px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px", color: "rgba(255,255,255,0.8)",
                  transition: "border-color 0.3s, background 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.background = "rgba(255,107,0,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.12)"; e.currentTarget.style.background = "rgba(255,107,0,0.04)"; }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B00", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section style={{ background: "#FF6B00", padding: "100px 48px", overflow: "hidden", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 50%)",
        backgroundSize: "20px 20px",
      }} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "rgba(0,0,0,0.5)", marginBottom: "48px" }}>
            --- WE BELIEVE
          </p>
        </AnimatedSection>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {MANIFESTO.map((line, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(28px,4.5vw,58px)",
                letterSpacing: "1px",
                color: "#05050A",
                lineHeight: 1.15,
                display: "flex", alignItems: "center", gap: "20px",
              }}>
                <span style={{ fontSize: "14px", fontFamily: "'DM Sans', sans-serif", opacity: 0.4, minWidth: "28px" }}>0{i + 1}</span>
                {line}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section style={{ background: "#05050A", padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <PulsingOrb style={{ width: 600, height: 600, top: "50%", right: "-15%", transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(255,50,150,0.08) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>
            --- FOUNDER'S STORY
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px,5.5vw,66px)",
            color: "#fff", lineHeight: 1.05,
            marginBottom: "48px",
          }}>
            What if maps<br /><span style={{ color: "#FF6B00" }}>were alive?</span>
          </h2>
        </AnimatedSection>
        {[
          "VibeCircle started with a simple realization: social media shows opinions --- but not what's happening around you.",
          "Scrolling felt endless. Cities felt invisible. Events felt disconnected.",
          "So we imagined something different. What if social media had a pulse? What if creators could light up a city?",
          "VibeCircle was built to connect digital expression to physical reality. We're not chasing trends. We're building infrastructure for culture.",
        ].map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px", lineHeight: 1.8,
              color: i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
              marginBottom: "24px",
              fontStyle: i === 1 ? "italic" : "normal",
            }}>{p}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function Advertise() {
  const features = [
    ["----", "Geo-targeted Campaigns", "Reach exactly who's near you, when they're near you."],
    ["---", "Sponsor Creator Moments", "Put your brand inside the culture, not outside it."],
    ["----", "Boost Local Visibility", "Make your location pulse on the map."],
    ["----", "Promote Live Experiences", "Turn foot traffic into digital gravity."],
  ];
  return (
    <section id="advertise" style={{ background: "#080810", padding: "120px 48px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>--- ADVERTISE</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px,5.5vw,64px)",
            color: "#fff", lineHeight: 1.05,
            marginBottom: "24px",
          }}>
            Ads that integrate,<br />not <span style={{ color: "#FF6B00" }}>interrupt.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.5)", marginBottom: "72px", maxWidth: "500px", lineHeight: 1.7 }}>
            We power discovery, not distraction. Perfect for restaurants, clubs, campuses, retail, and event organizers.
          </p>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {features.map(([icon, title, desc], i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                padding: "36px 28px",
                background: "rgba(255,107,0,0.03)",
                border: "1px solid rgba(255,107,0,0.1)",
                borderRadius: "4px", height: "100%",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,0,0.08)"; e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,107,0,0.03)"; e.currentTarget.style.borderColor = "rgba(255,107,0,0.1)"; e.currentTarget.style.transform = ""; }}
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{icon}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px", letterSpacing: "1px", color: "#fff", marginBottom: "12px" }}>{title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Business() {
  const tools = ["Claim Locations", "Run Promotions", "Host Events", "Go Live", "Track Engagement", "Launch Campaigns"];
  return (
    <section id="business" style={{ background: "#05050A", padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div>
          <AnimatedSection>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>--- FOR BUSINESS</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,5vw,60px)", color: "#fff", lineHeight: 1.05, marginBottom: "24px" }}>
              When your location<br /><span style={{ color: "#FF6B00" }}>pulses on the map,</span><br />people find you.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "40px" }}>
              Turn foot traffic into digital gravity with VibeCircle Business Tools.
            </p>
            <button style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", letterSpacing: "3px",
              padding: "14px 36px", background: "#FF6B00", color: "#05050A",
              border: "none", borderRadius: "2px", cursor: "pointer",
            }}>Get Started</button>
          </AnimatedSection>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tools.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div style={{
                display: "flex", alignItems: "center", gap: "20px",
                padding: "20px 28px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)",
                transition: "all 0.3s", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B00", boxShadow: "0 0 8px #FF6B00" }} />
                {t}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jobs() {
  return (
    <section id="jobs" style={{ background: "#080810", padding: "120px 48px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>--- CAREERS</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,5.5vw,64px)", color: "#fff", lineHeight: 1.05, marginBottom: "16px" }}>
            We don't hire for roles.<br /><span style={{ color: "#FF6B00" }}>We hire builders.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.45)", marginBottom: "72px", maxWidth: "480px", lineHeight: 1.7 }}>
            Ambitious, fast-moving, impact-driven. Real ownership. Real responsibility. Equity opportunities.
          </p>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {JOBS.map((job, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div style={{
                padding: "28px 32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                transition: "all 0.3s", cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.background = "rgba(255,107,0,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#fff", fontWeight: 600, marginBottom: "6px" }}>{job.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "1.5px", color: "#FF6B00", textTransform: "uppercase" }}>{job.tag}</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "20px" }}>---</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" style={{ background: "#05050A", padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <PulsingOrb style={{ width: 500, height: 500, bottom: "-20%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
        <AnimatedSection>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "5px", color: "#FF6B00", marginBottom: "16px" }}>--- CONTACT</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,6vw,72px)", color: "#fff", lineHeight: 1, marginBottom: "16px" }}>
            Let's build<br /><span style={{ color: "#FF6B00" }}>something real.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "60px" }}>
            info@vibecircle.com -- partners@vibecircle.com -- careers@vibecircle.com
          </p>
        </AnimatedSection>
        {sent ? (
          <AnimatedSection>
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "24px" }}>---</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", color: "#FF6B00", marginBottom: "12px" }}>Vibe Sent.</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)" }}>We'll be in touch soon.</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[["name", "Name"], ["email", "Email"]].map(([key, label]) => (
                <input key={key} placeholder={label}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "2px", padding: "18px 20px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "16px",
                    color: "#fff", outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "#FF6B00"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              ))}
              <textarea placeholder="Message" rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "2px", padding: "18px 20px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "16px",
                  color: "#fff", outline: "none", resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "#FF6B00"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => { if (form.name && form.email) setSent(true); }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif", fontSize: "17px", letterSpacing: "4px",
                  padding: "18px", background: "#FF6B00", color: "#05050A",
                  border: "none", borderRadius: "2px", cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(255,107,0,0.4)"; }}
                onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
              >
                Send the Vibe
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#02020A",
      borderTop: "1px solid rgba(255,107,0,0.12)",
      padding: "48px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "24px",
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "3px", color: "#FF6B00" }}>VIBECIRCLE</div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.25)", letterSpacing: "1px" }}>
        -(c) 2026 VibeCircle. Making energy visible.
      </p>
      <div style={{ display: "flex", gap: "28px" }}>
        {["info", "partners", "careers", "support"].map(e => (
          <a key={e} href={`mailto:${e}@vibecircle.com`} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
            letterSpacing: "1px", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={ev => ev.target.style.color = "#FF6B00"}
            onMouseLeave={ev => ev.target.style.color = "rgba(255,255,255,0.3)"}
          >{e}</a>
        ))}
      </div>
    </footer>
  );
}

export default function VibeCircle() {
  const [active, setActive] = useState("");

  return (
    <div style={{ background: "#05050A", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #05050A; }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes wordSlide {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bobDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        ::selection { background: rgba(255,107,0,0.3); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #05050A; }
        ::-webkit-scrollbar-thumb { background: #FF6B00; border-radius: 2px; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
      <Nav active={active} setActive={setActive} />
      <Hero />
      <About />
      <Manifesto />
      <FounderStory />
      <Advertise />
      <Business />
      <Jobs />
      <Contact />
      <Footer />
    </div>
  );
}




