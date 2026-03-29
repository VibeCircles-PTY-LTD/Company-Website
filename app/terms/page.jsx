import AppShell from "@/components/AppShell";
import { LegalPage } from "@/components/shared/LegalPage";
import { TERMS_SECTIONS } from "@/components/data/legal";

export const metadata = { title: "Terms of Service - VibeCircles" };

export default function TermsPageRoute() {
  return (
    <AppShell>
      <LegalPage title="Terms of Service" tag="Legal" lastUpdated="Coming soon" sections={TERMS_SECTIONS} />
    </AppShell>
  );
}
