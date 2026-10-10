import { NextResponse } from "next/server";
import { getCorsOrigin } from "@/lib/env";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": getCorsOrigin(),
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export function apiJson<T>(data: T, init?: { status?: number; cache?: string }) {
  return NextResponse.json(data, {
    status: init?.status ?? 200,
    headers: {
      ...corsHeaders(),
      "Cache-Control":
        init?.cache ?? "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}

export function apiOptions() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}
