import { apiJson, apiOptions } from "@/server/http";
import { verifyMembership } from "@/server/membership";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return apiJson(verifyMembership(searchParams.get("id")), {
    cache: "no-store",
  });
}

export function OPTIONS() {
  return apiOptions();
}
