"use client"

export default function CalendarPreview() {
  return (
    <div className="w-full overflow-auto">
      <iframe
        src="https://alestudyhub-calendar.vercel.app/?theme=light"
        title="Calendar Widget Preview"
        style={{
          border: "none",
          backgroundColor: "transparent",
        }}
        className="rounded w-full"
      />
    </div>
  )
}
