"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function PomodoroPreview() {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      setIsBreak(!isBreak)
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60) // Switch between work and break
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft, isBreak])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(25 * 60)
    setIsBreak(false)
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{isBreak ? "Break Time" : "Focus Time"}</h3>
        <div className="text-4xl font-mono font-bold text-red-500">{formatTime(timeLeft)}</div>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setIsRunning(!isRunning)} variant={isRunning ? "secondary" : "default"} size="sm">
          {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button onClick={resetTimer} variant="outline" size="sm">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full transition-all duration-1000"
          style={{
            width: `${(((isBreak ? 5 * 60 : 25 * 60) - timeLeft) / (isBreak ? 5 * 60 : 25 * 60)) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
