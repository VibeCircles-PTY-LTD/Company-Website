"use client";

import { Children, cloneElement, isValidElement, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GLOBAL_CSS, PAGE_TO_PATH, PATH_TO_PAGE } from "@/components/shared/vibeTheme";
import { Nav, Footer } from "@/components/shared/layout";
import { BackToTop, CookieBanner, ToastContainer, WaitlistModal } from "@/components/shared/overlays";

export default function AppShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistContext, setWaitlistContext] = useState("");
  const [toasts, setToasts] = useState([]);
  const [cookieState, setCookieState] = useState("pending");
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.storage
      ?.get("vc_cookie_consent")
      .then((r) => {
        if (r) setCookieState(r.value);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setTransitionKey((k) => k + 1);
  }, [pathname]);

  const openWaitlist = useCallback((ctx = "") => {
    setWaitlistContext(ctx);
    setWaitlistOpen(true);
  }, []);
  const addToast = useCallback((t) => setToasts((prev) => [...prev, { ...t, id: Date.now() + Math.random() }]), []);
  const removeToast = useCallback((id) => setToasts((prev) => prev.filter((t) => t.id !== id)), []);

  const goPage = (p) => {
    const nextPath = PAGE_TO_PATH[p] || "/";
    if (pathname !== nextPath) router.push(nextPath);
    window.scrollTo(0, 0);
  };

  const acceptCookies = () => {
    setCookieState("accepted");
    window.storage?.set("vc_cookie_consent", "accepted").catch(() => {});
    addToast({ type: "info", title: "Cookies accepted", message: "Your preferences have been saved." });
  };
  const declineCookies = () => {
    setCookieState("declined");
    window.storage?.set("vc_cookie_consent", "declined").catch(() => {});
  };

  const sharedProps = { setPage: goPage, openWaitlist, addToast };
  const content = Children.map(children, (child) => (isValidElement(child) ? cloneElement(child, sharedProps) : child));
  const currentPage = PATH_TO_PAGE[pathname] || "home";

  if (!mounted) return null;

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Nav current={currentPage} setPage={goPage} openWaitlist={openWaitlist} />
      <main key={transitionKey} className="page-enter">
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
