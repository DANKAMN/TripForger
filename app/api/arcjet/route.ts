import { NextResponse } from "next/server";
import { getAj } from "@/lib/utils";

export async function GET(req: Request) {
  // Lazy-load Arcjet only on the server
  const aj = await getAj();

  const userId = "user123"; // Replace with your authenticated user ID
  const decision = await aj.protect(req, { userId, requested: 5 }); // Deduct 5 tokens from the bucket
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 }
    );
  }

  return NextResponse.json({ message: "Hello world" });
}
