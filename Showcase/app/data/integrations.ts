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
    repoPath: "PomodoroTimer",
    status: "active",
    lastUpdated: "2025-07-03",
  },
  {
    id: "calendar-widget",
    name: "Calendar Widget",
    description:
      "A clean, minimalistic monthly calendar widget built with HTML, CSS, and JS — featuring dark mode support, responsive layout, and a preserved classic calendar structure. Designed to integrate smoothly in Notion dashboards or any personal workspace.",
    category: "Calendar & Time",
    icon: Calendar,
    color: "#4ECDC4",
    repoPath: "Calendar",
    status: "active",
    lastUpdated: "2025-07-05",
  },
  {
    id: "countdown-widget",
    name: "Countdown Timer",
    description:
      "Dynamic countdown widget for tracking important deadlines, events, and milestones. Features real-time updates, customizable display formats, and visual progress indicators.",
    category: "Calendar & Time",
    icon: Clock,
    color: "#FECA57",
    repoPath: "Countdown",
    status: "active",
    lastUpdated: "2025-07-03",
  },
  {
    id: "music-player-widget",
    name: "Music Player",
    description:
      "Embedded music player widget that brings audio functionality to your Notion pages. Support for playlists, controls, and ambient background music while you work or study.",
    category: "Utilities",
    icon: Music,
    color: "#9B59B6",
    repoPath: "MusicPlayer",
    status: "active",
    lastUpdated: "2025-07-04",
  },
]

export const integrations = notionWidgets