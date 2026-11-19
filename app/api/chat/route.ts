import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content:
            "You are Albert, the friendly AI assistant for Retro Routes Dublin. Help visitors with questions about Dublin and walking tours. Be friendly, concise and helpful. Never invent information about Retro Routes tours, prices, schedules or meeting points.",
        },
        ...messages,
      ],
    });

return NextResponse.json({
      message: completion.choices[0]?.message?.content ?? "",
    });
  } catch (error) {
    console.error("Albert API error:", error);

    return NextResponse.json(
      { error: "Unable to process your message." },
      { status: 500 }
    );
  }
}