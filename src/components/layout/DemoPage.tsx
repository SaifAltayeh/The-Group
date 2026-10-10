import Link from "next/link";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

type DemoPageProps = {
  eyebrow: string;
  title: string;
  body: string;
  note?: string;
};

export function DemoPage({ eyebrow, title, body, note }: DemoPageProps) {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end bg-ivory px-[6vw] pb-20 pt-36 sm:justify-center">
      <div className="page-max max-w-3xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-8 font-sans text-headline font-light leading-[1.05] text-ink">
          {title}
        </h1>
        <p className="mt-8 max-w-[46ch] font-sans text-[16px] leading-8 text-ink/65">
          {body}
        </p>
        {note ? (
          <p className="mt-5 max-w-[46ch] font-sans text-[13px] leading-7 text-ink/42">
            {note}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <LuxuryButton href="/#membership">Return to Membership</LuxuryButton>
          <Link
            href="/#home"
            className="nav-link font-sans text-[11px] uppercase tracking-[0.28em]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
