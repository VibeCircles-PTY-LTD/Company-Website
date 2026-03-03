import AppShell from "@/components/AppShell";
import AdvertisePage from "@/components/pages/AdvertisePage";

export const metadata = { title: "Advertise - VibeCircles" };

export default function AdvertisePageRoute() {
  return (
    <AppShell>
      <AdvertisePage />
    </AppShell>
  );
}
