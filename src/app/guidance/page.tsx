"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function GuidancePage() {
  const [situation, setSituation] = useState("")
  const [guidance, setGuidance] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<{ message: string; details?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch("/api/guidance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ situation }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to get guidance")
      }
      
      setGuidance(data.guidance)
    } catch (error: any) {
      console.error("Failed to get guidance:", error)
      setError({
        message: error.message || "An unexpected error occurred",
        details: error.details
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">AI Guidance</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Describe Your Situation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="situation" className="block text-sm font-medium mb-2">
                What challenge are you facing with your patient?
              </label>
              <textarea
                id="situation"
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder="Describe the patient's situation, their concerns, and what you're looking for guidance on..."
                className="w-full h-48 p-3 rounded-md border bg-background"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !situation.trim()}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Getting Guidance...
                </span>
              ) : (
                "Get Guidance"
              )}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">AI Suggestions</h2>
          <div className="rounded-lg border p-6 min-h-[300px]">
            {error ? (
              <div className="text-red-600">
                <p className="font-medium">{error.message}</p>
                {error.details && (
                  <p className="text-sm mt-2 text-muted-foreground">{error.details}</p>
                )}
              </div>
            ) : guidance ? (
              <div className="prose prose-sm max-w-none">
                {guidance.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                Enter your situation on the left to receive AI-powered guidance based on counseling best practices and real examples.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 