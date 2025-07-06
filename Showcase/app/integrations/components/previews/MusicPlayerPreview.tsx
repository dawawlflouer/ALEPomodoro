"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export default function MusicPlayerPreview() {
  const { resolvedTheme } = useTheme()

  const imageSrc =
    resolvedTheme === "dark"
      ? "/previews/musicplayer-dark.png"
      : "/previews/musicplayer-light.png"

  return (
    <div className="w-full max-w-sm aspect-[4/5] mx-auto border rounded overflow-hidden bg-muted">
      <Image
        src={imageSrc}
        alt="Music Player Widget Preview"
        width={400}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
