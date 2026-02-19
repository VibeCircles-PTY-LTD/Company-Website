import AppShell from "@/components/AppShell";
import { LegalPage } from "@/components/shared/LegalPage";
import { COOKIES_SECTIONS } from "@/components/data/legal";

export const metadata = { title: "Cookie Policy - VibeCircle" };

export default function CookiesPageRoute() {
  return (
    <AppShell>
      <LegalPage title="Cookie Policy" tag="Legal" lastUpdated="February 18, 2026" sections={COOKIES_SECTIONS} />
    </AppShell>
  );
}
