import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import type { NotionWidget } from "../../data/integrations"
import PomodoroPreview from "./previews/PomodoroPreview"
import CalendarPreview from "./previews/CalendarPreview"
import CountdownPreview from "./previews/CountdownPreview"
import MusicPlayerPreview from "./previews/MusicPlayerPreview"

type WidgetPreviewProps = {
  widget: NotionWidget | null
  isOpen: boolean
  onClose: () => void
}

export default function WidgetPreview({ widget, isOpen, onClose }: WidgetPreviewProps) {
  if (!widget) return null

  const renderPreview = () => {
    switch (widget.id) {
      case "pomodoro-widget":
        return <PomodoroPreview />
      case "calendar-widget":
        return <CalendarPreview />
      case "countdown-widget":
        return <CountdownPreview />
      case "music-player-widget":
        return <MusicPlayerPreview />
      default:
        return <div className="text-center text-gray-500 py-8">Preview not available</div>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "beta":
        return "bg-yellow-100 text-yellow-800"
      case "deprecated":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full sm:max-w-4xl max-h-[95vh] h-auto overflow-hidden mx-auto my-auto p-0 gap-0">
        <div className="flex flex-col h-full max-h-[95vh]">
          <DialogHeader className="p-4 sm:p-6 border-b flex-shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${widget.color}20` }}
                >
                  <widget.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: widget.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <DialogTitle className="text-lg md:text-xl truncate">{widget.name}</DialogTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                    <Badge className={`text-xs ${getStatusColor(widget.status)} w-fit`}>{widget.status}</Badge>
                    <span className="text-xs md:text-sm text-gray-500 truncate">{widget.repoPath}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">View </span>Code
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto p-4 sm:p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">{widget.description}</p>

              <div className="border rounded-lg p-3 md:p-4 bg-muted/50">
                <h3 className="font-semibold mb-3 text-sm md:text-base">Live Preview</h3>
                <div className="bg-card rounded border overflow-hidden">
                  <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">{renderPreview()}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Category:</span> {widget.category}
                </div>
                <div>
                  <span className="font-medium">Last Updated:</span> {new Date(widget.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
