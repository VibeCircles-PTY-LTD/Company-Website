"use client";

import { C } from "@/components/shared/vibeTheme";
import { useInView, useWindowWidth } from "@/components/shared/hooks";

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(32px)",
        transition: `opacity .75s ease ${delay}s,transform .75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Orb({
  top,
  left,
  right,
  bottom,
  size = 500,
  color = C.orange,
  opacity = 0.12,
  delay = "0s",
}) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle,${color}${Math.round(
          opacity * 255
        )
          .toString(16)
          .padStart(2, "0")} 0%,transparent 70%)`,
        animation: `orbFloat 8s ease-in-out ${delay} infinite`,
        pointerEvents: "none",
      }}
    />
  );
}

export function Tag({ children, color = C.orange }) {
  return (
    <span
      style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: "11px",
        letterSpacing: "4px",
        color,
        textTransform: "uppercase",
        border: `1px solid ${color}40`,
        padding: "6px 14px",
        borderRadius: "2px",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function Divider() {
  const w = useWindowWidth();
  return (
    <div
      style={{
        height: "1px",
        background: `linear-gradient(90deg,${C.orange}40,transparent)`,
        margin: `0 ${w < 600 ? "20px" : "64px"}`,
      }}
    />
  );
}

export function PageHero({ tag, title, accent, sub, children }) {
  const w = useWindowWidth();
  const p =
    w < 600
      ? "100px 20px 60px"
      : w < 960
        ? "120px 28px 64px"
        : "140px 64px 80px";
  return (
    <section
      style={{
        minHeight: "52vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: p,
        position: "relative",
        overflow: "hidden",
        background: C.bg,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <Orb top="-10%" right="-5%" size={500} />
      <Orb bottom="-20%" left="30%" size={400} color={C.pink} opacity={0.07} delay="3s" />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{ animation: "fadeUp .6s ease forwards", opacity: 0, marginBottom: "20px" }}
        >
          <Tag>{tag}</Tag>
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(44px,8vw,96px)",
            lineHeight: 0.95,
            color: C.text,
            animation: "fadeUp .6s .1s ease forwards",
            opacity: 0,
            marginBottom: "24px",
          }}
        >
          {title}
          <br />
          <span style={{ color: C.orange }}>{accent}</span>
        </h1>
        {sub && (
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "clamp(15px,2vw,19px)",
              color: C.dim,
              maxWidth: "560px",
              lineHeight: 1.75,
              animation: "fadeUp .6s .2s ease forwards",
              opacity: 0,
            }}
          >
            {sub}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PricingCard({
  plan,
  price,
  period = "/mo",
  desc,
  features,
  cta,
  highlight = false,
  color = C.orange,
  onCta,
  annual = false,
  annualPrice,
}) {
  const displayPrice = annual && annualPrice ? annualPrice : price;
  const isDisabled = !onCta || String(cta || "").toLowerCase() === "coming soon";
  return (
    <Reveal>
      <div
        style={{
          padding: "40px 32px",
          background: highlight ? `linear-gradient(160deg,${color}14,transparent)` : "rgba(0,0,0,0.02)",
          border: `1px solid ${highlight ? color + "50" : C.border}`,
          borderRadius: "4px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "transform .3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
        }}
      >
        {highlight && (
          <div
            style={{
              position: "absolute",
              top: "-1px",
              left: "50%",
              transform: "translateX(-50%)",
              background: color,
              color: C.textOnAccent,
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "11px",
              letterSpacing: "3px",
              padding: "4px 16px",
              borderRadius: "0 0 4px 4px",
            }}
          >
            MOST POPULAR
          </div>
        )}
        <div
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "14px",
            letterSpacing: "3px",
            color,
            marginBottom: "16px",
          }}
        >
          {plan}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
          <span
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(40px,5vw,56px)",
              color: C.text,
              lineHeight: 1,
            }}
          >
            {displayPrice}
          </span>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim }}>
            {displayPrice === "Free" || displayPrice === "Custom" ? "" : period}
          </span>
        </div>
        {annual && annualPrice && (
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color, marginBottom: "8px" }}>
            Save 20% -- billed annually
          </p>
        )}
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "28px" }}>
          {desc}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, marginBottom: "32px" }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color, fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>---</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim }}>{f}</span>
            </div>
          ))}
        </div>
        <button
          onClick={isDisabled ? undefined : onCta}
          disabled={isDisabled}
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "15px",
            letterSpacing: "3px",
            padding: "14px",
            background: highlight ? color : "transparent",
            color: highlight ? C.textOnAccent : C.text,
            border: `1px solid ${highlight ? color : C.border}`,
            borderRadius: "2px",
            cursor: isDisabled ? "not-allowed" : "pointer",
            transition: "all .2s",
            width: "100%",
            opacity: isDisabled ? 0.6 : 1,
          }}
          onMouseEnter={(e) => {
            if (isDisabled) return;
            if (!highlight) {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.color = color;
            } else {
              e.currentTarget.style.boxShadow = `0 8px 28px ${color}45`;
            }
          }}
          onMouseLeave={(e) => {
            if (isDisabled) return;
            if (!highlight) {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.color = C.text;
            } else {
              e.currentTarget.style.boxShadow = "";
            }
          }}
        >
          {cta}
        </button>
      </div>
    </Reveal>
  );
}

export function TestimonialCard({ quote, name, role, avatar, color = C.orange }) {
  return (
    <div
      style={{
        padding: "30px 26px",
        background: "rgba(0,0,0,0.02)",
        border: `1px solid ${C.border}`,
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        height: "100%",
        transition: "all .3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color + "50";
        e.currentTarget.style.background = `${color}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.background = "rgba(0,0,0,0.02)";
      }}
    >
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color, lineHeight: 1, opacity: 0.5 }}>
        "
      </div>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.8, flex: 1 }}>
        {quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: `${color}20`,
            border: `1px solid ${color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "17px",
            flexShrink: 0,
          }}
        >
          {avatar}
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 600, color: C.text }}>{name}</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, marginTop: "2px" }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
