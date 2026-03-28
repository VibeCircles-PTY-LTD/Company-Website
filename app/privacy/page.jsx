import AppShell from "@/components/AppShell";
import { LegalPage } from "@/components/shared/LegalPage";
import { PRIVACY_SECTIONS } from "@/components/data/legal";

export const metadata = { title: "Privacy Policy - VibeCircles" };

export default function PrivacyPageRoute() {
  return (
    <AppShell>
      <LegalPage title="Privacy Policy" tag="Legal" lastUpdated="February 18, 2026" sections={PRIVACY_SECTIONS} />
    </AppShell>
  );
}
