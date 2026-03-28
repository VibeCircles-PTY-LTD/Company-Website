import AppShell from "@/components/AppShell";
import TeamPage from "@/components/pages/TeamPage";

export const metadata = { title: "Team - VibeCircles" };

export default function TeamPageRoute() {
  return (
    <AppShell>
      <TeamPage />
    </AppShell>
  );
}
