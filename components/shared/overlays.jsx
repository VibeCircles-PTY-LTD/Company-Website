"use client";

import { useEffect, useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { useWindowWidth } from "@/components/shared/hooks";

function Toast({ toast, onRemove }) {
  const [exit, setExit] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setExit(true);
      setTimeout(() => onRemove(toast.id), 400);
    }, toast.duration || 4000);
    return () => clearTimeout(t);
  }, [toast, onRemove]);
  const colors = { success: C.orange, error: C.pink, info: C.blue };
  const icons = { success: "---", error: "---", info: "i" };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px 20px",
        background: "#0F0F1E",
        border: `1px solid ${colors[toast.type] || C.orange}40`,
        borderLeft: `3px solid ${colors[toast.type] || C.orange}`,
        borderRadius: "4px",
        maxWidth: "340px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        animation: exit ? "toastOut .4s ease forwards" : "toastIn .4s ease forwards",
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: `${colors[toast.type] || C.orange}20`,
          border: `1px solid ${colors[toast.type] || C.orange}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          color: colors[toast.type] || C.orange,
          flexShrink: 0,
          fontWeight: "bold",
        }}
      >
        {icons[toast.type] || "i"}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "1px", color: C.white, marginBottom: "3px" }}>
          {toast.title}
        </div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim, lineHeight: 1.5 }}>{toast.message}</div>
      </div>
      <button
        onClick={() => {
          setExit(true);
          setTimeout(() => onRemove(toast.id), 400);
        }}
        style={{ background: "none", border: "none", color: C.dimmer, cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0", flexShrink: 0 }}
      >
        --
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div style={{ position: "fixed", bottom: "80px", right: "24px", zIndex: 9999, display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onRemove={removeToast} />
      ))}
    </div>
  );
}

export function WaitlistModal({ open, onClose, context, addToast }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [form, setForm] = useState({ name: "", email: "", city: "", role: "" });
  const roles = ["Creator", "Business Owner", "Brand / Agency", "Just Curious"];

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setRole("");
        setForm({ name: "", email: "", city: "", role: "" });
      }, 300);
    }
  }, [open]);

  const submit = async () => {
    if (!form.name || !form.email || !role) return;
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@vibecircle.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Waitlist Signup --- ${role}`,
          name: form.name,
          email: form.email,
          city: form.city,
          role,
          context: context || "Website",
          _template: "table",
        }),
      });
    } catch (e) {
      // ignore
    }
    setLoading(false);
    setStep(2);
    addToast({ type: "success", title: "You're on the list!", message: `We'll be in touch at ${form.email} soon.` });
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn .2s ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#0A0A16",
          border: `1px solid ${C.orange}35`,
          borderRadius: "6px",
          padding: "48px",
          maxWidth: "480px",
          width: "100%",
          position: "relative",
          animation: "fadeUp .3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button onClick={onClose} style={{ position: "absolute", top: "18px", right: "20px", background: "none", border: "none", color: C.dim, fontSize: "22px", cursor: "pointer", lineHeight: 1 }}>
          --
        </button>
        {step === 1 ? (
          <>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,4vw,40px)", color: C.white, lineHeight: 1, marginBottom: "8px" }}>
              Join the <span style={{ color: C.orange }}>Movement.</span>
            </div>
            {context && <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", letterSpacing: "1px", color: C.orange, textTransform: "uppercase", marginBottom: "16px" }}>{context}</div>}
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "28px" }}>
              VibeCircle is launching city by city. Be first in your city when we open access.
            </p>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: C.dimmer, marginBottom: "10px" }}>I am a...</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {roles.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setForm((f) => ({ ...f, role: r }));
                    }}
                    style={{
                      padding: "12px 10px",
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "13px",
                      background: role === r ? `${C.orange}18` : "rgba(255,255,255,0.03)",
                      border: `1px solid ${role === r ? C.orange + "60" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: "3px",
                      color: role === r ? C.white : C.dim,
                      cursor: "pointer",
                      transition: "all .2s",
                      textAlign: "left",
                    }}
                  >
                    {r === roles[0] && "--- "}
                    {r === roles[1] && "---- "}
                    {r === roles[2] && "------- "}
                    {r === roles[3] && "---- "}
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
              {[
                ["name", "Your Name", "----"],
                ["email", "Email Address", "------"],
                ["city", "Your City (optional)", "----"],
              ].map(([k, ph, ic]) => (
                <div key={k} style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", opacity: 0.4 }}>{ic}</span>
                  <input
                    placeholder={ph}
                    value={form[k]}
                    onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
                    style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px", padding: "13px 14px 13px 40px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.white, outline: "none", transition: "border-color .2s" }}
                    onFocus={(e) => (e.target.style.borderColor = C.orange)}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={submit}
              disabled={loading || !form.name || !form.email || !role}
              style={{
                width: "100%",
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "16px",
                letterSpacing: "3px",
                padding: "16px",
                background: !form.name || !form.email || !role ? "rgba(255,107,0,0.3)" : C.orange,
                color: C.bg,
                border: "none",
                borderRadius: "3px",
                cursor: !form.name || !form.email || !role ? "not-allowed" : "pointer",
                transition: "box-shadow .2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              onMouseEnter={(e) => {
                if (!loading && form.name && form.email && role) e.target.style.boxShadow = `0 10px 32px ${C.orange}45`;
              }}
              onMouseLeave={(e) => (e.target.style.boxShadow = "")}
            >
              {loading ? (
                <span
                  style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid rgba(5,5,10,0.4)", borderTopColor: "#05050A", borderRadius: "50%", animation: "spin 0.6s linear infinite" }}
                />
              ) : (
                ""
              )}
              {loading ? "Joining..." : "Secure My Spot ---"}
            </button>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "12px" }}>No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "56px", marginBottom: "20px", animation: "checkPop .5s ease" }}>----</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: C.orange, lineHeight: 1, marginBottom: "12px" }}>You're on the list.</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.7, marginBottom: "8px" }}>
              Welcome to VibeCircle, <span style={{ color: C.white, fontWeight: 600 }}>{form.name}</span>.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dimmer, lineHeight: 1.7, marginBottom: "32px" }}>
              We'll email you at <span style={{ color: C.orange }}>{form.email}</span> the moment we launch in your city.
            </p>
            <button onClick={onClose} style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "3px", padding: "13px 36px", background: C.orange, color: C.bg, border: "none", borderRadius: "3px", cursor: "pointer" }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CookieBanner({ onAccept, onDecline, setPage }) {
  const w = useWindowWidth();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        background: "rgba(8,8,18,0.98)",
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${C.border}`,
        padding: w < 600 ? "20px" : "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
        animation: "cookieUp .4s ease",
      }}
    >
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.dim, flex: 1, minWidth: "240px", lineHeight: 1.6 }}>
        We use cookies to improve your experience, personalise content, and analyse site traffic.{" "}
        <button onClick={() => setPage("Privacy")} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", padding: 0, textDecoration: "underline" }}>
          Learn more
        </button>
      </p>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={onDecline}
          style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", padding: "10px 22px", background: "transparent", color: C.dimmer, border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", cursor: "pointer", transition: "all .2s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = C.white;
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = C.dimmer;
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          }}
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "13px", letterSpacing: "2px", padding: "10px 22px", background: C.orange, color: C.bg, border: "none", borderRadius: "2px", cursor: "pointer", transition: "box-shadow .2s" }}
          onMouseEnter={(e) => (e.target.style.boxShadow = `0 4px 16px ${C.orange}40`)}
          onMouseLeave={(e) => (e.target.style.boxShadow = "")}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        zIndex: 400,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: C.orange,
        color: C.bg,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        boxShadow: `0 4px 20px ${C.orange}50`,
        transition: "transform .2s,box-shadow .2s",
        animation: "fadeIn .3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = `0 8px 28px ${C.orange}60`;
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "";
        e.target.style.boxShadow = `0 4px 20px ${C.orange}50`;
      }}
    >
      ---
    </button>
  );
}
