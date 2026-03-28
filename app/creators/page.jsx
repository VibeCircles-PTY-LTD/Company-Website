import AppShell from "@/components/AppShell";
import CreatorsPage from "@/components/pages/CreatorsPage";

export const metadata = { title: "Creators - VibeCircles" };

export default function CreatorsPageRoute() {
  return (
    <AppShell>
      <CreatorsPage />
    </AppShell>
  );
}
