"use client"

import { useState, useEffect } from "react"

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
    <div className="w-full h-80 rounded-lg overflow-hidden border bg-white">
      <iframe
        src="/widgets/countdown/index.html"
        className="w-full h-full border-0"
        title="Countdown Timer Widget"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}
