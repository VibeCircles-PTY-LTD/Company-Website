import AppShell from "@/components/AppShell";
import { LegalPage } from "@/components/shared/LegalPage";
import { TERMS_SECTIONS } from "@/components/data/legal";

export const metadata = { title: "Terms of Service - VibeCircle" };

export default function TermsPageRoute() {
  return (
    <AppShell>
      <LegalPage title="Terms of Service" tag="Legal" lastUpdated="February 18, 2026" sections={TERMS_SECTIONS} />
    </AppShell>
  );
}
