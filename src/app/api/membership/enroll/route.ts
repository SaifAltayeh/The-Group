import { NextResponse } from "next/server";
import { getCorsOrigin, getLoyaltyCardUrl } from "@/lib/env";
import { apiOptions } from "@/server/http";

export function GET() {
  return NextResponse.redirect(getLoyaltyCardUrl(), {
    headers: {
      "Access-Control-Allow-Origin": getCorsOrigin(),
    },
  });
}

export function OPTIONS() {
  return apiOptions();
}
