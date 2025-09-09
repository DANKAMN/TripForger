// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind class names safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Server-only Arcjet wrapper
 * Must only be called inside API routes or server actions
 */
export async function getAj() {
  const { default: arcjet, tokenBucket } = await import("@arcjet/next");

  return arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
      tokenBucket({
        mode: "LIVE",
        characteristics: ["userId"],
        refillRate: 5,
        interval: 86400,
        capacity: 10,
      }),
    ],
  });
}
