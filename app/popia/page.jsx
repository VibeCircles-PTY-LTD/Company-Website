import AppShell from "@/components/AppShell";
import { LegalPage } from "@/components/shared/LegalPage";
import { POPIA_SECTIONS } from "@/components/data/legal";

export const metadata = { title: "POPIA Notice - VibeCircles" };

export default function PopiaPageRoute() {
  return (
    <AppShell>
      <LegalPage
        title="Protection of Personal Information (POPIA)"
        tag="Legal"
        lastUpdated="Coming soon"
        sections={POPIA_SECTIONS}
      />
    </AppShell>
  );
}
