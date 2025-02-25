import Image from "next/image"

interface MovieRowProps {
    title: string
}

export function MovieRow({ title }: MovieRowProps) {
    // This would typically come from an API
    const movies = Array.from({ length: 6 }, (_, i) => i + 1)

    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                {movies.map((movie) => (
                    <div key={movie} className="flex-none w-40 md:w-48">
                        <Image
                            src={`/placeholder.svg?height=270&width=480&text=Movie ${movie}`}
                            alt={`Movie ${movie}`}
                            width={480}
                            height={270}
                            className="rounded-md hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

