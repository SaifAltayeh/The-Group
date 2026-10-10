export const GROUP = {
  name: "The Group®",
  shortName: "The Group",
  src: "/logos/the-group.png",
  symbolSrc: "/logos/the-group.png",
  alt: "The Group®",
  width: 1001,
  height: 373,
} as const;

export type HouseBrand = {
  id: "moustache" | "moustache-women" | "delfino" | "ipo";
  name: string;
  src: string;
  darkSrc: string;
  alt: string;
  maxHeight: number;
  width: number;
  height: number;
  label: string;
};

export const HOUSES: HouseBrand[] = [
  {
    id: "moustache",
    name: "moustache",
    src: "/logos/moustache.png",
    darkSrc: "/logos/moustache.png",
    alt: "moustache",
    maxHeight: 40,
    width: 914,
    height: 242,
    label: "Moustache",
  },
  {
    id: "delfino",
    name: "Delfino",
    src: "/logos/delfino.png",
    darkSrc: "/logos/delfino-white.png",
    alt: "Delfino",
    maxHeight: 48,
    width: 694,
    height: 289,
    label: "Delfino",
  },
  {
    id: "ipo",
    name: "ipo",
    src: "/logos/ipo.png",
    darkSrc: "/logos/ipo-white.png",
    alt: "ipo",
    maxHeight: 64,
    width: 896,
    height: 808,
    label: "ipo",
  },
  {
    id: "moustache-women",
    name: "moustache women",
    src: "/logos/moustache-women.png",
    darkSrc: "/logos/moustache-women.png",
    alt: "moustache women",
    maxHeight: 48,
    width: 962,
    height: 273,
    label: "Moustache Women",
  },
];

export const HERO_EDITORIAL = {
  src: null as string | null,
  alt: "The Group editorial campaign portrait",
};

export const COPY = {
  eyebrow: "The House of Brands",
  heroLines: ["Beyond", "A Single", "Identity."],
  heroSupport:
    "The Group® is a collective of distinctive brands, connected by a shared vision of style, individuality, and exceptional experiences.",
  housesLabel: "Our Houses",
  membershipEyebrow: "The Group Private Membership",
  membershipLines: ["Belong to", "Something", "Exceptional."],
  membershipLead:
    "More than a membership. A connection to a world of distinctive brands, curated experiences, and exclusive privileges.",
  membershipBody:
    "Your digital membership brings The Group® closer to you, with convenient access and recognition across participating brands.",
} as const;

export const MEMBERSHIP_CARD = {
  id: "#18720004",
  nameLabel: "Name",
  memberName: "Saif Altayeh",
  pointsLabel: "Points",
  points: "20000",
  demoPath: "/membership/demo",
  enrollUrl: "https://www.clicksloyalty.com/card/258",
} as const;
