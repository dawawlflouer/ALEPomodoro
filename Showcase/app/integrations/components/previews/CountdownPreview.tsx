"use client"

import { useEffect, useRef } from "react"

export default function CountdownPreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const iframe = iframeRef.current
      if (!iframe) return

      // Send message to child iframe to post back its height
      iframe.contentWindow?.postMessage("getHeight", "*")
    }

    window.addEventListener("message", (event) => {
      if (typeof event.data === "string" && event.data.startsWith("widgetHeight:")) {
        const height = parseInt(event.data.replace("widgetHeight:", ""), 10)
        if (iframeRef.current) {
          iframeRef.current.style.height = `${height}px`
        }
      }
    })

    // Call on first load and whenever iframe reloads
    handleResize()
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://alestudyhub-countdown.vercel.app/?theme=light"
        title="Countdown Widget Preview"
        className="w-full rounded"
        style={{ border: "none" }}
        onLoad={() => {
          iframeRef.current?.contentWindow?.postMessage("getHeight", "*")
        }}
      />
    </div>
  )
}
