"use client"

export default function PomodoroPreview() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border bg-white">
      <iframe
        src="/widgets/pomodoro/index.html"
        className="w-full h-full border-0"
        title="Pomodoro Timer Widget"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}
