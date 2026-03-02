import AppShell from "@/components/AppShell";
import ContactPage from "@/components/pages/ContactPage";

export const metadata = {
  title: "Contact - VibeCircle",
  description: "Get in touch with VibeCircle. General inquiries, partnerships, careers, support, and press.",
};

export default function ContactPageRoute() {
  return (
    <AppShell>
      <ContactPage />
    </AppShell>
  );
}
