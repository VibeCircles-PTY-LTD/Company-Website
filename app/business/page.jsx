import AppShell from "@/components/AppShell";
import BusinessPage from "@/components/pages/BusinessPage";

export const metadata = { title: "VibeCircle for Business" };

export default function BusinessPageRoute() {
  return (
    <AppShell>
      <BusinessPage />
    </AppShell>
  );
}
