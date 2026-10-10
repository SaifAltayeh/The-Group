export type NavItem = {
  label: string;
  href: string;
  kind: "section" | "page";
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/#home", kind: "section" },
  { label: "Our Brands", href: "/#our-brands", kind: "section" },
  { label: "Membership", href: "/#membership", kind: "section" },
];

export const ACCOUNT_NAV = {
  join: { label: "Join the Club", href: "/#membership" },
} as const;
