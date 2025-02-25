import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MovieRow } from "@/components/movie-row"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <div className="px-4 md:px-8 pb-8 space-y-8">
        <MovieRow title="Trending Now" />
        <MovieRow title="New Releases" />
        <MovieRow title="Popular on Netflix" />
      </div>
    </main>
  )
}

