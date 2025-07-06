"use client"

export default function CalendarPreview() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border bg-white">
      <iframe
        src="/widgets/calendar/index.html"
        className="w-full h-full border-0"
        title="Calendar Widget"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}
