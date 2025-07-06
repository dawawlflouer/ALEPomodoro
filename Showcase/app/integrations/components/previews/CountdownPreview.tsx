"use client"

export default function CalendarPreview() {
  return (
    <div className="w-full max-w-sm aspect-[4/5] mx-auto border rounded overflow-hidden bg-muted">
      <iframe
        src="https://alestudyhub-countdown.vercel.app/"
        title="Calendar Widget Preview"
        className="w-full h-full"
        style={{ border: "none" }}
      />
    </div>
  )
}
