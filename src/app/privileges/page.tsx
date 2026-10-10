import type { Metadata } from "next";
import { DemoPage } from "@/components/layout/DemoPage";

export const metadata: Metadata = {
  title: "Privileges",
  robots: { index: false, follow: false },
};

export default function PrivilegesPage() {
  return (
    <DemoPage
      eyebrow="Privileges"
      title="A world reserved for members."
      body="Exclusive access, recognition across participating houses, and curated experiences will be detailed here. This page is an intentional placeholder until the privileges programme is published."
    />
  );
}
