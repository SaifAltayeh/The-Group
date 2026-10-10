import { HOUSES } from "@/lib/constants/brands";
import { HouseLogo } from "@/components/brand/HouseLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BrandCollection() {
  return (
    <div id="our-brands" className="scroll-mt-28">
      <div data-reveal="label" className="flex justify-center">
        <SectionLabel line="both">Our Houses</SectionLabel>
      </div>
      <ul className="mt-8 grid grid-cols-2 items-center gap-x-4 gap-y-10 sm:mt-10 sm:gap-x-8 sm:gap-y-14 md:grid-cols-4 md:gap-x-6 lg:mt-14 lg:gap-x-10">
        {HOUSES.map((brand, index) => (
          <li
            key={brand.id}
            data-house
            className="relative flex min-w-0 items-center justify-center overflow-hidden"
          >
            {index > 0 ? (
              <span
                className="pointer-events-none absolute -left-3 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gold-muted lg:-left-5 lg:block"
                aria-hidden
              />
            ) : null}
            <a
              href="#our-brands"
              className="house-link min-h-[88px] w-full px-1 py-2"
              aria-label={brand.label}
            >
              <HouseLogo brand={brand} className="!max-h-8 sm:!max-h-none" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
