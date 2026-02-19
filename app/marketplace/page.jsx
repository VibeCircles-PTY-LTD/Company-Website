import AppShell from "@/components/AppShell";
import MarketplacePage from "@/components/pages/MarketplacePage";

export const metadata = { title: "Marketplace - VibeCircle" };

export default function MarketplacePageRoute() {
  return (
    <AppShell>
      <MarketplacePage />
    </AppShell>
  );
}
