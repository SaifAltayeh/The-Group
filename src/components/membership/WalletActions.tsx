import { ArrowRight } from "lucide-react";

export function WalletActions() {
  return (
    <div data-reveal="wallets" className="w-full lg:mt-8">
      <a
        href="/api/membership/enroll"
        target="_blank"
        rel="noopener noreferrer"
        className="wallet-btn group inline-flex w-full items-center justify-center gap-3 border border-gold px-4 py-3 text-gold transition-colors duration-500 sm:w-auto sm:gap-4 sm:px-5"
      >
        <span className="relative z-10 text-center font-sans text-[9px] uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.28em]">
          Add Your Loyalty Card Here
        </span>
        <ArrowRight className="relative z-10 h-3.5 w-3.5 shrink-0 stroke-[1.25] transition-transform duration-500 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
