"use client";

import { useEffect } from "react";
import VibeCircle from "@/components/VibeCircle";

export default function SectionShell({ sectionId }) {
  useEffect(() => {
    const t = setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [sectionId]);

  return <VibeCircle />;
}
