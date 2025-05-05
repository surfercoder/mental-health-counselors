import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          AI-Powered Guidance for Mental Health Counselors
        </h1>
        <p className="text-lg text-muted-foreground">
          Access a wealth of counseling knowledge and get AI-powered suggestions to help your patients more effectively.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Search Transcripts
          </Link>
          <Link
            href="/guidance"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Get AI Guidance
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Search Counseling Transcripts</h3>
          <p className="mt-2 text-muted-foreground">
            Find relevant counseling examples from our database to help guide your approach.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">AI-Powered Guidance</h3>
          <p className="mt-2 text-muted-foreground">
            Get personalized suggestions based on your specific patient situation.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Evidence-Based Approach</h3>
          <p className="mt-2 text-muted-foreground">
            All suggestions are based on real counseling transcripts and best practices.
          </p>
        </div>
      </div>
    </div>
  )
}
