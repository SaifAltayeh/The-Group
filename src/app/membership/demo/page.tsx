import type { Metadata } from "next";
import { DemoPage } from "@/components/layout/DemoPage";

export const metadata: Metadata = {
  title: "Membership Demonstration",
  robots: { index: false, follow: false },
};

export default function MembershipDemoPage() {
  return (
    <DemoPage
      eyebrow="Demonstration"
      title="This is a demo membership route."
      body="The QR code on the digital membership card points here so it can be scanned and verified as a working demonstration. It does not represent a registered member, and it contains no personal data."
      note="A production membership QR would resolve to an authenticated member record issued by The Group®."
    />
  );
}
