import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getAj } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs/server";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMPT = `
You are an AI Trip Planner Agent. Your mission is to assist the user by collecting specific trip details in a strict, step-by-step sequence. Your tone should be friendly and conversational.

**The Seven Pieces of Information to Collect in Order:**
1.  Starting Location (Source)
2.  Destination City or Country
3.  Group Size (Solo, Couple, Family, Friends)
4.  Budget (Low, Medium, High)
5.  Trip Duration (number of days)
6.  Travel Interests (e.g., adventure, cultural, nightlife)
7.  Special Requirements or Preferences (if any)

**Crucial Rules for Each Response:**
-   **Always review the entire conversation history** to identify which information has already been provided.
-   **Ask for only the next *missing* piece of information** from the sequence.
-   Never ask multiple questions at once.
-   Your response must be a single, strict JSON object with two keys: \`resp\` for the text and \`ui\` for the UI component.
-   **NEVER include any text or explanations outside of the JSON object.**

**UI Component Mapping (STRICTLY ADHERE TO THIS):**
-   If the next question is "Group Size," \`ui\` MUST be \`"groupSize"\`.
-   If the next question is "Budget," \`ui\` MUST be \`"budget"\`.
-   If the next question is "Trip Duration," \`ui\` MUST be \`"tripDuration"\`.
-   For all other questions (Starting Location, Destination, Travel Interests, Special Requirements), \`ui\` MUST be \`null\`.

**Example Conversation Flow (User providing multiple details at once):**
-   **User:** "I want to take a trip from New York to Madrid."
-   **Your Expected JSON Response:**
    \`\`\`json
    {
      "resp": "That sounds fantastic! To help me plan this, could you tell me about your group size?",
      "ui": "groupSize"
    }
    \`\`\`

**Final Output:**
-   After collecting all seven details, and only then, generate a complete trip plan.
-   The final response MUST be a strict JSON object with \`ui\` set to \`"final"\`.
    \`\`\`json
    {
      "resp": "Your detailed trip plan here, including itinerary, accommodation, and activities...",
      "ui": "final"
    }
    \`\`\`
`

const FINAL_PROMPT = `Generate Travel Plan with give details, give me Hotels options list with HotelName, 

Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and  suggest itinerary with placeName, Place Details, Place Image Url,

 Geo Coordinates,Place address, ticket Pricing, Time travel each of the location , with each day plan with best time to visit in JSON format.

 Output Schema:

 {

  "trip_plan": {

    "destination": "string",

    "duration": "string",

    "origin": "string",

    "budget": "string",

    "group_size": "string",

    "hotels": [

      {

        "hotel_name": "string",

        "hotel_address": "string",

        "price_per_night": "string",

        "hotel_image_url": "string",

        "geo_coordinates": {

          "latitude": "number",

          "longitude": "number"

        },

        "rating": "number",

        "description": "string"

      }

    ],

    "itinerary": [

      {

        "day": "number",

        "day_plan": "string",

        "best_time_to_visit_day": "string",

        "activities": [

          {

            "place_name": "string",

            "place_details": "string",

            "place_image_url": "string",

            "geo_coordinates": {

              "latitude": "number",

              "longitude": "number"

            },

            "place_address": "string",

            "ticket_pricing": "string",

            "time_travel_each_location": "string",

            "best_time_to_visit": "string"

          }

        ]

      }

    ]

  }

}`

export async function POST(req: NextRequest) {
  const { messages, isFinal } = await req.json();

  const user = await currentUser();
  const { has } = await auth();
  const hasPremiumAccess = has({ plan: "monthly" });
  console.log("hasPremiumAccess", hasPremiumAccess);

  // Lazy-load Arcjet to prevent client-side bundling issues
  const aj = await getAj();

  const decision = await aj.protect(req, {
    userId: user?.primaryEmailAddress?.emailAddress ?? "",
    requested: isFinal ? 5 : 0,
  });

  //@ts-ignore
  if (decision?.reason?.remaining === 0 && !hasPremiumAccess) {
    return NextResponse.json({
      resp: "You’ve used up today’s free credits.",
      ui: "limit",
    });
  }

  console.log("Decision result:", decision);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: isFinal ? FINAL_PROMPT : PROMPT },
        ...messages,
      ],
    });

    const message = completion.choices[0].message;
    console.log("AI completion message:", message);

    return NextResponse.json(JSON.parse(message.content ?? ""));
  } catch (error) {
    console.error("AI completion error:", error);
    return NextResponse.json({ error: "Failed to generate AI response", details: error });
  }
}
