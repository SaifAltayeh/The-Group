import { apiJson, apiOptions } from "@/server/http";
import { getMembershipCard } from "@/server/membership";

export function GET() {
  return apiJson(getMembershipCard());
}

export function OPTIONS() {
  return apiOptions();
}
