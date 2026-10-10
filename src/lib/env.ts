export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

export function getLoyaltyCardUrl() {
  return (
    process.env.LOYALTY_CARD_URL ||
    process.env.NEXT_PUBLIC_LOYALTY_CARD_URL ||
    "https://www.clicksloyalty.com/card/258"
  );
}

export function getCorsOrigin() {
  return process.env.CORS_ORIGIN || "*";
}
