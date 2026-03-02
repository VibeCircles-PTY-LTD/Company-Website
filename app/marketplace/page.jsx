import AppShell from "@/components/AppShell";
import MarketplacePage from "@/components/pages/MarketplacePage";

export const metadata = {
  title: "Marketplace - VibeCircle",
  description: "Where brands meet creators who live it. Browse brand deals, apply in seconds, and turn your city presence into paid partnerships.",
};

export default function MarketplacePageRoute() {
  return (
    <AppShell>
      <MarketplacePage />
    </AppShell>
  );
}
