"use client"

import { useState, useMemo } from "react"
import { categories, integrations } from "../data/integrations"
import CategoryFilter from "../components/CategoryFilter"
import SearchBar from "../components/SearchBar"
import IntegrationGrid from "../components/IntegrationGrid"
import Pagination from "../components/Pagination"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import WidgetPreview from "../components/WidgetPreview"
import type { NotionWidget } from "../data/types"
import { ThemeToggle } from "../components/ThemeToggle"
import MobileCategoryFilter from "../components/MobileCategoryFilter"
import { ThemeProvider } from "@/components/theme-provider"

const ITEMS_PER_PAGE = 30

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [previewWidget, setPreviewWidget] = useState<NotionWidget | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const categoryMatch =
        selectedCategory === "All" || integration.category === selectedCategory
      const searchMatch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredIntegrations.length / ITEMS_PER_PAGE)
  const paginatedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePreview = (widget: NotionWidget) => {
    setPreviewWidget(widget)
    setIsPreviewOpen(true)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col lg:flex-row h-screen bg-background overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden bg-card border-b p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold">ALE Study Hub Widgets</h1>
              <p className="text-muted-foreground text-xs">
                Custom widgets for Smart Cards Architecture
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 bg-transparent"
                onClick={() =>
                  window.open("https://github.com/dawawlflouer/ALEStudyHub", "_blank")
                }
              >
                <Github className="w-3 h-3" />
                <span className="hidden xs:inline">GitHub</span>
              </Button>
            </div>
          </div>
          <MobileCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
          />
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
          />
        </div>

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop header */}
          <div className="hidden lg:block p-4 md:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">ALE Study Hub Widgets</h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Collection of custom widgets for Smart Card Architecture
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                  onClick={() =>
                    window.open("https://github.com/dawawlflouer/ALEStudyHub", "_blank")
                  }
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <SearchBar
              onSearch={(query) => {
                setSearchQuery(query)
                setCurrentPage(1)
              }}
            />
          </div>

          {/* Mobile search */}
          <div className="lg:hidden p-4">
            <SearchBar
              onSearch={(query) => {
                setSearchQuery(query)
                setCurrentPage(1)
              }}
            />
          </div>

          <div className="flex-1 overflow-auto px-4 md:px-6">
            <IntegrationGrid integrations={paginatedIntegrations} onPreview={handlePreview} />
          </div>
          <div className="p-4 md:p-6 border-t">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          <WidgetPreview
            widget={previewWidget}
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
          />
        </main>
      </div>
    </ThemeProvider>
  )
}
