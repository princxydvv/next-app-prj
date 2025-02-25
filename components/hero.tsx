import Image from "next/image"
import { PlayCircle, InfoIcon as InfoCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative h-[56.25vw]">
            <Image
                src="/placeholder.svg?height=800&width=1422"
                alt="Featured Movie"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">Movie Title</h1>
                <p className="text-lg md:text-xl max-w-md">
                    A brief description of the movie that captures the viewer's attention and makes them want to watch.
                </p>
                <div className="space-x-4">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Play
                    </Button>
                    <Button size="lg" variant="secondary">
                        <InfoCircle className="mr-2 h-5 w-5" />
                        More Info
                    </Button>
                </div>
            </div>
        </div>
    )
}

