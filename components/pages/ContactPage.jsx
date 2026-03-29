"use client";

import { useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { Divider, PageHero, Reveal, Tag } from "@/components/shared/ui";

const CONTACT_DEPTS = [
  { key: "general", label: "General Inquiry", email: "info@vibecircles.co.za", icon: "----", desc: "Questions about VibeCircles, the platform, or anything else." },
  { key: "partnerships", label: "Partnerships", email: "partners@vibecircles.co.za", icon: "----", desc: "Brand deals, platform integrations, and strategic alliances." },
  { key: "careers", label: "Careers", email: "careers@vibecircles.co.za", icon: "----", desc: "Job applications, internship inquiries, and hiring questions." },
  { key: "support", label: "Support", email: "support@vibecircles.co.za", icon: "----", desc: "Technical issues, account help, and bug reports." },
  { key: "press", label: "Press & Media", email: "press@vibecircles.co.za", icon: "----", desc: "Media inquiries, press kits, and interview requests." },
];
export default function ContactPage({ addToast }) {
  const [dept, setDept] = useState("general");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const selectedDept = CONTACT_DEPTS.find(d => d.key === dept);
  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const payload = { name: form.name, email: form.email, subject: form.subject || undefined, message: form.message, department: dept };
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Send failed");
      try {
        await fetch("https://formsubmit.co/ajax/info@vibecircles.co.za", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ _subject: `[${selectedDept?.label}] ${form.subject || "New Message"}`, _template: "table", name: form.name, email: form.email, subject: form.subject, message: form.message, department: selectedDept?.label, replyTo: selectedDept?.email }) });
      } catch (_) { }
      setSent(true);
      addToast({ type: "success", title: "Message sent!", message: `The ${selectedDept?.label} team will respond within 24–48 hours.` });
    } catch (e) {
      addToast({ type: "error", title: "Something went wrong", message: "Please try again or email us directly." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ background: C.bg, color: C.text }}>
      <PageHero tag="Contact" title="Let's build" accent="something real." sub="Whether you're a creator, a business, or a curious human --- we're here." />
      <Divider />
      <section className="sec-pad" style={{ background: C.bg2 }}><div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid-2">
        <div>
          <Reveal style={{ marginBottom: "28px" }}><Tag>Choose Department</Tag></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
            {CONTACT_DEPTS.map((d, i) => <Reveal key={d.key} delay={i * .07}><div onClick={() => setDept(d.key)} style={{ padding: "16px 20px", background: dept === d.key ? "rgba(255,107,0,0.1)" : "rgba(0,0,0,0.02)", border: `1px solid ${dept === d.key ? C.orange + "50" : C.border}`, borderRadius: "4px", cursor: "pointer", transition: "all .25s", display: "flex", alignItems: "flex-start", gap: "12px" }} onMouseEnter={e => { if (dept !== d.key) { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = C.border; } }} onMouseLeave={e => { if (dept !== d.key) { e.currentTarget.style.background = "rgba(0,0,0,0.02)"; e.currentTarget.style.borderColor = C.border; } }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>{d.icon}</span><div style={{ flex: 1 }}><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "15px", color: dept === d.key ? C.orange : C.text, letterSpacing: ".5px" }}>{d.label}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, marginTop: "2px" }}>{d.desc}</div></div>{dept === d.key && <div style={{ color: C.orange, fontSize: "13px", flexShrink: 0 }}>---</div>}
            </div></Reveal>)}
          </div>
          <Reveal><div style={{ padding: "24px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "12px", letterSpacing: "3px", color: C.orange, marginBottom: "10px" }}>All contacts</div>
            {CONTACT_DEPTS.map(d => <div key={d.key} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>{d.label}</span><a href={`mailto:${d.email}`} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dim, textDecoration: "none", transition: "color .2s" }} onMouseEnter={e => e.target.style.color = C.orange} onMouseLeave={e => e.target.style.color = C.dim}>{d.email}</a></div>)}
          </div></Reveal>
        </div>
        <Reveal delay={.1}><div style={{ padding: "40px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", position: "sticky", top: "80px" }}>
          {sent ? (<div style={{ textAlign: "center", padding: "36px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px", animation: "checkPop .5s ease" }}>✓</div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "30px", color: C.orange, marginBottom: "10px" }}>Message Sent.</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: C.dim, lineHeight: 1.7, marginBottom: "24px" }}>The {selectedDept?.label} team will get back to you at <span style={{ color: C.orange }}>{form.email}</span> within 24–48 hours.</p>
            <button type="button" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "", }); }} className="vc-btn vc-btn--primary vc-btn--sm">Send Another</button>
          </div>) : (<>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}><span style={{ fontSize: "20px" }}>{selectedDept?.icon}</span><div><div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "18px", color: C.orange }}>{selectedDept?.label}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer }}>{selectedDept?.email}</div></div></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[["name", "Your Name"], ["email", "Email Address"]].map(([k, ph]) => <input key={k} placeholder={ph} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />)}
              </div>
              <input placeholder="Subject" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
              <textarea placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: "2px", padding: "12px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.text, outline: "none", resize: "vertical", transition: "border-color .2s" }} onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
              <button type="button" onClick={submit} disabled={loading || !form.name || !form.email || !form.message} className="vc-btn vc-btn--primary vc-btn--block" style={{ fontSize: "13px", padding: "16px" }}>
                {loading && <span className="vc-btn__spinner" aria-hidden />}
                {loading ? "Sending..." : "Send message"}
              </button>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dimmer, textAlign: "center" }}>Typical response: 24–48 hours</p>
            </div>
          </>)}
        </div></Reveal>
      </div></section>
      <Divider />
      <section className="sec-pad"><div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal style={{ marginBottom: "44px" }}><Tag>Find Us</Tag><h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(26px,4vw,46px)", color: C.text, lineHeight: 1, marginTop: "16px" }}>We're in the <span style={{ color: C.orange }}>cities we're building for.</span></h2></Reveal>
        <div className="grid-4">
          {[{ city: "Gauteng", addr: "HQ - Pretoria", emoji: "HQ", status: "Main Office" }].map((o, i) => <Reveal key={i} delay={i * .1}>
            <div style={{ padding: "26px 22px", background: "rgba(0,0,0,0.02)", border: `1px solid ${C.border}`, borderRadius: "4px", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = "rgba(255,107,0,0.06)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}>
              <div style={{ fontSize: "26px", marginBottom: "10px" }}>{o.emoji}</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "19px", color: C.text, marginBottom: "3px" }}>{o.city}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.dim, marginBottom: "10px" }}>{o.addr}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: C.orange, animation: "dotPulse 2s infinite" }} /><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "1px", color: C.orange, textTransform: "uppercase" }}>{o.status}</span></div>
            </div>
          </Reveal>)}
        </div>
      </div></section>
    </div>
  );
}
