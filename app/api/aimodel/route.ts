import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMPT = `
You are an AI Trip Planner Agent. Your role is to guide the user through planning a trip by asking exactly one relevant trip-related question at a time, in the order below. Wait for the user's answer before moving to the next step:

1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

Rules:
- Never ask multiple questions at once.
- Do not ask irrelevant questions.
- If an answer is missing or unclear, politely ask the user to clarify before proceeding.
- Maintain a conversational and interactive tone.

UI Guidance:
With every response, include which UI component should be displayed for the user:
- "budget", "groupSize", "tripDuration", or "final"
- Use "final" only when all required details are collected and you are ready to generate the complete trip plan.

Final Output:
Once all information is collected, respond ONLY with a strict JSON object (no explanations or extra text) using the schema:

{
  "resp": "Text Resp",
  "ui": "budget/groupSize/tripDuration/final"
}
`;

export async function POST(req: NextRequest) {
    const { messages } = await req.json()

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            response_format: {
                type: 'json_object'
            },
            messages: [
                {
                    role: 'system',
                    content: PROMPT
                },
                ...messages
            ],
        });

        console.log(completion.choices[0].message)

        const message = completion.choices[0].message;

        return NextResponse.json(JSON.parse(message.content ?? ''))
    } catch (error) {
        return NextResponse.json(error)
    }
    
}