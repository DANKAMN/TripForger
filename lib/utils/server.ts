
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
