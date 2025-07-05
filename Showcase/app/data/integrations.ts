import {
  Calendar,
  FileText,
  BarChart,
  CheckSquare,
  Clock,
  Users,
  Bookmark,
  ImageIcon,
  Calculator,
  Timer,
  Zap,
  Database,
  Globe,
  Heart,
  Star,
  Target,
  Lightbulb,
  Coffee,
  Book,
  Music,
  Camera,
  Map,
  Briefcase,
  Mail,
  Phone,
  Video,
  Cloud,
  Shield,
  Key,
  Cpu,
} from "lucide-react"
import type React from "react"

export type NotionWidget = {
  id: string
  name: string
  description: string
  category: string
  icon: React.ComponentType
  color: string
  repoPath: string
  status: "active" | "beta" | "deprecated"
  lastUpdated: string
}

export type Integration = NotionWidget

export const categories = ["All", "Productivity", "Calendar & Time", "Utilities"]

const iconMap = {
  Calendar,
  FileText,
  BarChart,
  CheckSquare,
  Clock,
  Users,
  Bookmark,
  ImageIcon,
  Calculator,
  Timer,
  Zap,
  Database,
  Globe,
  Heart,
  Star,
  Target,
  Lightbulb,
  Coffee,
  Book,
  Music,
  Camera,
  Map,
  Briefcase,
  Mail,
  Phone,
  Video,
  Cloud,
  Shield,
  Key,
  Cpu,
}

// Sample Notion widgets - replace with your actual widgets
export const notionWidgets: NotionWidget[] = [
  {
    id: "pomodoro-widget",
    name: "Pomodoro Timer",
    description:
      "Focus-enhancing Pomodoro timer widget with customizable work and break intervals. Perfect for productivity tracking directly in your Notion workspace with session statistics and progress monitoring.",
    category: "Productivity",
    icon: Timer,
    color: "#FF6348",
    repoPath: "packages/pomodoro",
    status: "active",
    lastUpdated: "2024-01-15",
  },
  {
    id: "calendar-widget",
    name: "Calendar Widget",
    description:
      "Beautiful calendar widget that integrates seamlessly with your Notion pages. Display dates, events, and important milestones with customizable styling and interactive date selection.",
    category: "Calendar & Time",
    icon: Calendar,
    color: "#4ECDC4",
    repoPath: "packages/calendar",
    status: "active",
    lastUpdated: "2024-01-12",
  },
  {
    id: "countdown-widget",
    name: "Countdown Timer",
    description:
      "Dynamic countdown widget for tracking important deadlines, events, and milestones. Features real-time updates, customizable display formats, and visual progress indicators.",
    category: "Calendar & Time",
    icon: Clock,
    color: "#FECA57",
    repoPath: "packages/countdown",
    status: "active",
    lastUpdated: "2024-01-10",
  },
  {
    id: "music-player-widget",
    name: "Music Player",
    description:
      "Embedded music player widget that brings audio functionality to your Notion pages. Support for playlists, controls, and ambient background music while you work or study.",
    category: "Utilities",
    icon: Music,
    color: "#9B59B6",
    repoPath: "packages/music-player",
    status: "active",
    lastUpdated: "2024-01-08",
  },
]

export const integrations = notionWidgets
