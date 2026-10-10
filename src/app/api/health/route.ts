import { apiJson, apiOptions } from "@/server/http";

export function GET() {
  return apiJson(
    {
      ok: true,
      service: "the-group-api",
      timestamp: new Date().toISOString(),
    },
    { cache: "no-store" },
  );
}

export function OPTIONS() {
  return apiOptions();
}
