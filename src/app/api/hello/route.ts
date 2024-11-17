import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("Request object", request);
  // Sample data or response logic
  const data = {
    message: "Hello from the Next.js API!",
    timestamp: new Date().toISOString(),
  };

  // Return a JSON response
  return NextResponse.json(data);
}
