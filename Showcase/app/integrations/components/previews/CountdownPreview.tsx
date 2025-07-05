"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export default function CountdownPreview() {
  const [targetDate, setTargetDate] = useState("2024-12-31T23:59:59")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="p-6 text-center space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Countdown to:</label>
        <Input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="max-w-xs mx-auto"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{timeLeft.days}</div>
          <div className="text-xs text-yellow-500">Days</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{timeLeft.hours}</div>
          <div className="text-xs text-yellow-500">Hours</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{timeLeft.minutes}</div>
          <div className="text-xs text-yellow-500">Minutes</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{timeLeft.seconds}</div>
          <div className="text-xs text-yellow-500">Seconds</div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
          ? "🎉 Time's up!"
          : "Time remaining until your event"}
      </div>
    </div>
  )
}
