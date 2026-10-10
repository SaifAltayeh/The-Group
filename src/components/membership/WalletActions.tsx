import { ArrowRight } from "lucide-react";

export function WalletActions() {
  return (
    <div data-reveal="wallets" className="lg:mt-8">
      <a
        href="/api/membership/enroll"
        target="_blank"
        rel="noopener noreferrer"
        className="wallet-btn group inline-flex items-center gap-4 border border-gold px-5 py-3 text-gold transition-colors duration-500"
      >
        <span className="relative z-10 font-sans text-[10px] uppercase tracking-[0.28em] sm:text-[11px]">
          Add Your Loyalty Card Here
        </span>
        <ArrowRight className="relative z-10 h-3.5 w-3.5 stroke-[1.25] transition-transform duration-500 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
