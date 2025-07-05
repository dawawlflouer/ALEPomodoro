import type { Integration } from "../../data/integrations"
import IntegrationCard from "./IntegrationCard"

type IntegrationGridProps = {
  integrations: Integration[]
  onPreview?: (widget: Integration) => void
}

export default function IntegrationGrid({ integrations, onPreview }: IntegrationGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
      {integrations.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} onPreview={onPreview} />
      ))}
    </div>
  )
}
