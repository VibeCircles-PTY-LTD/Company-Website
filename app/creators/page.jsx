import AppShell from "@/components/AppShell";
import CreatorsPage from "@/components/pages/CreatorsPage";

export const metadata = { title: "Creators - VibeCircle" };

export default function CreatorsPageRoute() {
  return (
    <AppShell>
      <CreatorsPage />
    </AppShell>
  );
}
