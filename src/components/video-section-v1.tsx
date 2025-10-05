"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoSectionV1Props {
  videoUrl: string
  thumbnailUrl: string
  title: string
  description?: string
}

export function VideoSectionV1({ videoUrl, thumbnailUrl, title, description }: VideoSectionV1Props) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            {!isPlaying ? (
              <>
                <img src={thumbnailUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" onClick={() => setIsPlaying(true)} className="w-20 h-20 rounded-full">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </>
            ) : (
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
