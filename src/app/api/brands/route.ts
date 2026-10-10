import { apiJson, apiOptions } from "@/server/http";
import { getBrands } from "@/server/membership";

export function GET() {
  return apiJson(getBrands());
}

export function OPTIONS() {
  return apiOptions();
}
