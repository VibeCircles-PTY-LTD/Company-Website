import AppShell from "@/components/AppShell";
import JobsPage from "@/components/pages/JobsPage";

export const metadata = {
  title: "Jobs and Internships - VibeCircles",
  description: "Careers at VibeCircles. We have no open vacancies right now; check back for future roles in engineering, design, marketing, and more.",
};

export default function JobsPageRoute() {
  return (
    <AppShell>
      <JobsPage />
    </AppShell>
  );
}
