import AppShell from "@/components/AppShell";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About - VibeCircle",
  description: "VibeCircle is infrastructure for modern city culture. Where creators, businesses, and communities meet in real life.",
};

export default function AboutPageRoute() {
  return (
    <AppShell>
      <AboutPage />
    </AppShell>
  );
}
