declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL?: string;
    NEXT_PUBLIC_LOYALTY_CARD_URL?: string;
    LOYALTY_CARD_URL?: string;
    CORS_ORIGIN?: string;
    VERCEL_URL?: string;
    VERCEL_PROJECT_PRODUCTION_URL?: string;
  }
}
