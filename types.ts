import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'current' | 'coming-soon';
}

export interface AnalysisPoint {
  timestamp: string;
  comment: string;
  type: 'correction' | 'praise';
}

export interface Review {
  name: string;
  role: string; // e.g., "Student" or "Instructor"
  avatar: string;
  content: string;
  rating: number;
}