import { NextResponse } from "next/server"
import { PrismaClient } from "../../../generated/prisma"
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Search query is required" }, { status: 400 })
  }

  try {
    // Search for transcripts that match the query in either patient or counselor text
    const results = await prisma.counselingTranscript.findMany({
      where: {
        OR: [
          { patientText: { contains: query, mode: "insensitive" } },
          { counselorText: { contains: query, mode: "insensitive" } },
          { mainIssue: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    return NextResponse.json(results)
  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json(
      { error: "Failed to search transcripts" },
      { status: 500 }
    )
  }
} 