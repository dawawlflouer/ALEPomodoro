"use client"

import type { NotionWidget } from "../../data/integrations"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

type IntegrationCardProps = {
  integration: NotionWidget
  onPreview?: (widget: NotionWidget) => void
}

export default function IntegrationCard({ integration, onPreview }: IntegrationCardProps) {
  const Icon = integration.icon

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "deprecated":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 group h-full cursor-pointer bg-card text-card-foreground"
      onClick={() => onPreview?.(integration)}
    >
      <CardContent className="p-3 md:p-4 flex flex-col h-full">
        <div className="flex flex-col items-center text-center space-y-2 mb-3">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${integration.color}20` }}
          >
            <Icon
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
              style={{ color: integration.color }}
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-xs md:text-sm leading-tight">{integration.name}</h3>
            <Badge className={`text-xs ${getStatusColor(integration.status)}`}>{integration.status}</Badge>
          </div>
        </div>

        <p className="text-xs text-muted-foreground flex-grow overflow-hidden mb-3 line-clamp-3">
          {integration.description.length > 100
            ? `${integration.description.substring(0, 100)}...`
            : integration.description}
        </p>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="truncate">Updated: {new Date(integration.lastUpdated).toLocaleDateString()}</span>
            <Github className="w-3 h-3 flex-shrink-0" />
          </div>
          <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded truncate">
            {integration.repoPath}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
