import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { situation } = await request.json()

    if (!situation) {
      return NextResponse.json(
        { error: "Situation description is required" },
        { status: 400 }
      )
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an experienced mental health counselor providing guidance to other counselors. 
            Your responses should be:
            1. Professional and evidence-based
            2. Focused on practical strategies and techniques
            3. Empathetic and supportive
            4. Clear and structured
            
            Format your response in clear paragraphs with specific suggestions.`,
          },
          {
            role: "user",
            content: `I need guidance on the following situation with a patient:
            
            ${situation}
            
            Please provide specific suggestions on how to best help this patient, including:
            1. Immediate response strategies
            2. Long-term approaches
            3. Potential techniques to use
            4. Things to be mindful of`,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      })

      const guidance = completion.choices[0]?.message?.content || "No guidance available"
      return NextResponse.json({ guidance })
    } catch (error: unknown) {
      // Handle specific OpenAI API errors
      if (error instanceof OpenAI.APIError) {
        if (error.status === 429) {
          return NextResponse.json(
            { 
              error: "We're currently experiencing high demand. Please try again in a few minutes.",
              details: "The AI service is temporarily unavailable due to high usage."
            },
            { status: 429 }
          )
        }
        
        // Handle other API errors
        return NextResponse.json(
          { 
            error: "Unable to generate guidance at this time.",
            details: "Please try again later or contact support if the issue persists."
          },
          { status: 500 }
        )
      }
      
      throw error; // Re-throw if it's not an OpenAI error
    }
  } catch (error) {
    console.error("Guidance generation error:", error)
    return NextResponse.json(
      { 
        error: "An unexpected error occurred",
        details: "Please try again later"
      },
      { status: 500 }
    )
  }
} 