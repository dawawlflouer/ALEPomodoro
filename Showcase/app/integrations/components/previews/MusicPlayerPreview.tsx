"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react"

export default function MusicPlayerPreview() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState([45])
  const [volume, setVolume] = useState([75])
  const [currentSong] = useState({
    title: "Focus Ambient",
    artist: "Study Beats",
    duration: "3:24",
  })

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="p-6 max-w-sm mx-auto space-y-4">
      <div className="text-center space-y-2">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mx-auto flex items-center justify-center">
          <div className="text-white text-4xl">🎵</div>
        </div>
        <div>
          <h3 className="font-semibold">{currentSong.title}</h3>
          <p className="text-sm text-gray-500">{currentSong.artist}</p>
        </div>
      </div>

      <div className="space-y-2">
        <Slider value={currentTime} onValueChange={setCurrentTime} max={204} step={1} className="w-full" />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatTime(currentTime[0])}</span>
          <span>{currentSong.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Button variant="ghost" size="sm">
          <Shuffle className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <SkipBack className="w-4 h-4" />
        </Button>
        <Button onClick={() => setIsPlaying(!isPlaying)} size="sm" className="w-10 h-10 rounded-full">
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button variant="ghost" size="sm">
          <SkipForward className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Repeat className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Volume2 className="w-4 h-4 text-gray-500" />
        <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="flex-1" />
      </div>
    </div>
  )
}
