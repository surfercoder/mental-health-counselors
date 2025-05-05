"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Search Counseling Transcripts</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for counseling scenarios, techniques, or patient issues..."
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {results.map((result: any) => (
          <div key={result.id} className="rounded-lg border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Session Type: {result.sessionType}</h3>
                <p className="text-sm text-muted-foreground">
                  Main Issue: {result.mainIssue}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                Patient Age: {result.patientAge}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Patient:</h4>
                <p className="text-sm text-muted-foreground">{result.patientText}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Counselor Response:</h4>
                <p className="text-sm text-muted-foreground">{result.counselorText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 