import AppShell from "@/components/AppShell";
import JobsPage from "@/components/pages/JobsPage";

export const metadata = { title: "Jobs and Internships - VibeCircle" };

export default function JobsPageRoute() {
  return (
    <AppShell>
      <JobsPage />
    </AppShell>
  );
}
