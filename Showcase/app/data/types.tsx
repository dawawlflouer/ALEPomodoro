export type NotionWidget = {
  id: string
  name: string
  description: string
  category: string
  icon: any // React.ComponentType is breaking the build
  color: string
  repoPath: string
  status: "active" | "beta" | "deprecated"
  lastUpdated: string
}
