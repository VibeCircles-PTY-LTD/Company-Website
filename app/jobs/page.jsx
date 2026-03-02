import AppShell from "@/components/AppShell";
import JobsPage from "@/components/pages/JobsPage";

export const metadata = {
  title: "Jobs and Internships - VibeCircle",
  description: "Join VibeCircle. Open roles in engineering, design, marketing, community, and creator partnerships.",
};

export default function JobsPageRoute() {
  return (
    <AppShell>
      <JobsPage />
    </AppShell>
  );
}
