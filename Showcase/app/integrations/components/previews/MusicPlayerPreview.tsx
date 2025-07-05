"use client"

export default function MusicPlayerPreview() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border bg-white">
      <iframe
        src="/widgets/music-player/index.html"
        className="w-full h-full border-0"
        title="Music Player Widget"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}
