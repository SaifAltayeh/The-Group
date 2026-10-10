import type { Metadata } from "next";
import { DemoPage } from "@/components/layout/DemoPage";

export const metadata: Metadata = {
  title: "Join the Club",
  robots: { index: false, follow: false },
};

export default function JoinPage() {
  return (
    <DemoPage
      eyebrow="Private Club"
      title="Enrollment is not open in this demonstration."
      body="Joining The Group Private Club will require membership records, verification, and a dedicated registration flow. Those systems are not connected to this landing page."
      note="No application has been submitted, and no membership has been created."
    />
  );
}
