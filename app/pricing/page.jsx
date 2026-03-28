import AppShell from "@/components/AppShell";
import PricingPage from "@/components/pages/PricingPage";

export const metadata = {
  title: "Pricing - VibeCircles",
  description: "Creator plans, advertising packages, and business tools. Transparent pricing for every level of gravity.",
};

export default function PricingPageRoute() {
  return (
    <AppShell>
      <PricingPage />
    </AppShell>
  );
}
