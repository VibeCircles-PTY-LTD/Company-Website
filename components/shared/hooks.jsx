"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export function useInView(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: t }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

export function useCounter(target, dur = 1800, active = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setV(Math.floor(cur));
      if (cur >= target) clearInterval(id);
    }, dur / steps);
    return () => clearInterval(id);
  }, [active, target, dur]);
  return v;
}

function subscribeWindowWidth(onStoreChange) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

function getWindowWidthSnapshot() {
  return window.innerWidth;
}

function getWindowWidthServerSnapshot() {
  return 1200;
}

export function useWindowWidth() {
  return useSyncExternalStore(
    subscribeWindowWidth,
    getWindowWidthSnapshot,
    getWindowWidthServerSnapshot
  );
}
