import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const responseData = {
    status: "success",
    code: 0,
    data: { message: "Hello Fonts!" },
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(responseData), {
    headers: { "Content-Type": "application/json" },
  });
}
