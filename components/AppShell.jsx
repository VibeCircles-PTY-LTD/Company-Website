"use client";

import { Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GLOBAL_CSS, PAGE_TO_PATH, PATH_TO_PAGE } from "@/components/shared/vibeTheme";
import { Nav, Footer } from "@/components/shared/layout";
import { BackToTop, CookieBanner, ToastContainer, WaitlistModal } from "@/components/shared/overlays";

function smoothScrollToTop(durationMs = 400) {
  let rafId = null;
  let cancel = () => {};
  const startStep = () => {
    const start = performance.now();
    const startY = typeof window !== "undefined" ? window.scrollY : 0;
    if (startY <= 0) return;
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - t) ** 2;
      if (typeof window !== "undefined") window.scrollTo(0, startY * (1 - eased));
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    cancel = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = null;
    };
  };
  requestAnimationFrame(startStep);
  return () => cancel();
}

export default function AppShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistContext, setWaitlistContext] = useState("");
  const [toasts, setToasts] = useState([]);
  const [cookieState, setCookieState] = useState("pending");
  const scrollCancelRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        if (typeof window.storage?.get === "function") {
          const r = await window.storage.get("vc_cookie_consent");
          if (r?.value) setCookieState(r.value);
        } else if (typeof localStorage !== "undefined") {
          const v = localStorage.getItem("vc_cookie_consent");
          if (v) setCookieState(v);
        }
      } catch (_) {}
    };
    load();
  }, []);

  const openWaitlist = useCallback((ctx = "") => {
    setWaitlistContext(ctx);
    setWaitlistOpen(true);
  }, []);
  const addToast = useCallback((t) => setToasts((prev) => [...prev, { ...t, id: Date.now() + Math.random() }]), []);
  const removeToast = useCallback((id) => setToasts((prev) => prev.filter((t) => t.id !== id)), []);

  const goPage = (p) => {
    const nextPath = PAGE_TO_PATH[p] || "/";
    if (scrollCancelRef.current) scrollCancelRef.current();
    if (pathname !== nextPath) {
      scrollCancelRef.current = smoothScrollToTop(380);
      router.push(nextPath);
    } else {
      scrollCancelRef.current = smoothScrollToTop(480);
    }
  };

  const acceptCookies = () => {
    setCookieState("accepted");
    try {
      if (typeof window.storage?.set === "function") {
        window.storage.set("vc_cookie_consent", "accepted").catch(() => {});
      } else if (typeof localStorage !== "undefined") {
        localStorage.setItem("vc_cookie_consent", "accepted");
      }
    } catch (_) {}
    addToast({ type: "info", title: "Cookies accepted", message: "Your preferences have been saved." });
  };
  const declineCookies = () => {
    setCookieState("declined");
    try {
      if (typeof window.storage?.set === "function") {
        window.storage.set("vc_cookie_consent", "declined").catch(() => {});
      } else if (typeof localStorage !== "undefined") {
        localStorage.setItem("vc_cookie_consent", "declined");
      }
    } catch (_) {}
  };

  const sharedProps = { setPage: goPage, openWaitlist, addToast };
  const content = Children.map(children, (child) => (isValidElement(child) ? cloneElement(child, sharedProps) : child));
  const currentPage = PATH_TO_PAGE[pathname] || "home";

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Nav current={currentPage} setPage={goPage} openWaitlist={openWaitlist} />
      <main key={pathname} className="page-enter">
        {content}
      </main>
      <Footer setPage={goPage} openWaitlist={openWaitlist} />
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        context={waitlistContext}
        addToast={addToast}
      />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <BackToTop />
      {cookieState === "pending" && <CookieBanner onAccept={acceptCookies} onDecline={declineCookies} setPage={goPage} />}
    </>
  );
}
