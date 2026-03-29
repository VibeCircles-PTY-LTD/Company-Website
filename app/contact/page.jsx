import AppShell from "@/components/AppShell";
import ContactPage from "@/components/pages/ContactPage";

export const metadata = {
  title: "Contact - VibeCircles",
  description: "Get in touch with VibeCircles. General inquiries, partnerships, careers, support, and press.",
};

export default function ContactPageRoute() {
  return (
    <AppShell>
      <ContactPage />
    </AppShell>
  );
}
