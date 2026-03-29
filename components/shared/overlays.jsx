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
  const icons = { success: "✓", error: "✕", info: "i" };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px 20px",
        background: C.bg2,
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
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "14px", letterSpacing: "1px", color: C.text, marginBottom: "3px" }}>
          {toast.title}
        </div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.dim, lineHeight: 1.5 }}>{toast.message}</div>
      </div>
      <button
        onClick={() => {
          setExit(true);
          setTimeout(() => onRemove(toast.id), 400);
        }}
        aria-label="Dismiss notification"
        style={{ background: "none", border: "none", color: C.dimmer, cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0", flexShrink: 0 }}
      >
        ×
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
      const payload = { name: form.name, email: form.email, city: form.city || undefined, role, context: context || "Website" };
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Signup failed");
      try {
        await fetch("https://formsubmit.co/ajax/info@vibecircles.co.za", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: `New Waitlist Signup – ${role}`, name: form.name, email: form.email, city: form.city, role, context: context || "Website", _template: "table" }),
        });
      } catch (_) {}
      setStep(2);
      addToast({ type: "success", title: "You're on the list!", message: `We'll be in touch at ${form.email} soon.` });
    } catch (e) {
      addToast({ type: "error", title: "Something went wrong", message: "Please try again or email us at info@vibecircles.co.za." });
    } finally {
      setLoading(false);
    }
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
          background: C.bg,
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
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: "18px", right: "20px", background: "none", border: "none", color: C.dim, fontSize: "22px", cursor: "pointer", lineHeight: 1 }}>
          ×
        </button>
        {step === 1 ? (
          <>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,4vw,40px)", color: C.text, lineHeight: 1, marginBottom: "8px" }}>
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
                      background: role === r ? `${C.orange}18` : "rgba(0,0,0,0.03)",
                      border: `1px solid ${role === r ? C.orange + "60" : C.border}`,
                      borderRadius: "3px",
                      color: role === r ? C.textOnAccent : C.dim,
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
                    style={{ width: "100%", background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "3px", padding: "13px 14px 13px 40px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.text, outline: "none", transition: "border-color .2s" }}
                    onFocus={(e) => (e.target.style.borderColor = C.orange)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={submit}
              disabled={loading || !form.name || !form.email || !role}
              className="vc-btn vc-btn--primary vc-btn--block"
              style={{ fontSize: "14px", padding: "16px", gap: "10px" }}
            >
              {loading ? <span className="vc-btn__spinner" style={{ width: 16, height: 16 }} aria-hidden /> : null}
              {loading ? "Joining..." : "Secure My Spot →"}
            </button>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, textAlign: "center", marginTop: "12px" }}>No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "56px", marginBottom: "20px", animation: "checkPop .5s ease" }}>✓</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: C.orange, lineHeight: 1, marginBottom: "12px" }}>You're on the list.</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", color: C.dim, lineHeight: 1.7, marginBottom: "8px" }}>
              Welcome to VibeCircle, <span style={{ color: C.text, fontWeight: 600 }}>{form.name}</span>.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dimmer, lineHeight: 1.7, marginBottom: "32px" }}>
              We'll email you at <span style={{ color: C.orange }}>{form.email}</span> the moment we launch in your city.
            </p>
            <button type="button" onClick={onClose} className="vc-btn vc-btn--primary">
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
        background: "rgba(246,246,249,0.98)",
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
        <button type="button" onClick={onDecline} className="vc-btn vc-btn--outline-muted vc-btn--sm">
          Decline
        </button>
        <button type="button" onClick={onAccept} className="vc-btn vc-btn--primary vc-btn--sm">
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
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="vc-btn vc-btn--fab"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        zIndex: 400,
        animation: "fadeIn .3s ease",
      }}
    >
      ↑
    </button>
  );
}
