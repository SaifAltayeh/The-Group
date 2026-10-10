import { HOUSES, MEMBERSHIP_CARD } from "@/lib/constants/brands";
import { getLoyaltyCardUrl, getSiteUrl } from "@/lib/env";

export type MembershipCardPayload = {
  id: string;
  nameLabel: string;
  memberName: string;
  pointsLabel: string;
  points: string;
  enrollUrl: string;
  qrUrl: string;
};

export function getMembershipCard(): MembershipCardPayload {
  const siteUrl = getSiteUrl();

  return {
    id: MEMBERSHIP_CARD.id,
    nameLabel: MEMBERSHIP_CARD.nameLabel,
    memberName: MEMBERSHIP_CARD.memberName,
    pointsLabel: MEMBERSHIP_CARD.pointsLabel,
    points: MEMBERSHIP_CARD.points,
    enrollUrl: getLoyaltyCardUrl(),
    qrUrl: `${siteUrl}${MEMBERSHIP_CARD.demoPath}`,
  };
}

export function verifyMembership(id?: string | null) {
  const card = getMembershipCard();
  const normalized = (id ?? "").replace(/^#/, "");
  const expected = card.id.replace(/^#/, "");
  const valid = !id || normalized === expected;

  return {
    valid,
    demo: true,
    id: card.id,
    memberName: valid ? card.memberName : null,
    points: valid ? card.points : null,
  };
}

export function getBrands() {
  return {
    group: "The Group®",
    houses: HOUSES.map((house) => ({
      id: house.id,
      name: house.name,
      label: house.label,
      src: house.src,
      darkSrc: house.darkSrc,
    })),
  };
}
