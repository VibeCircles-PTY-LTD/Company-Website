import AppShell from "@/components/AppShell";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = { title: "About - VibeCircle" };

export default function AboutPageRoute() {
  return (
    <AppShell>
      <AboutPage />
    </AppShell>
  );
}
