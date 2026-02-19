import AppShell from "@/components/AppShell";
import ContactPage from "@/components/pages/ContactPage";

export const metadata = { title: "Contact - VibeCircle" };

export default function ContactPageRoute() {
  return (
    <AppShell>
      <ContactPage />
    </AppShell>
  );
}
