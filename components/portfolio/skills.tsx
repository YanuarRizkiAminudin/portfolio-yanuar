"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillGroups = [
  {
    title: "IoT & Digital Twin",
    icon: "📡",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    skills: ["Sensor Integration", "Digital Twin", "Real-time Monitoring", "ESP8266/NodeMCU", "Arduino", "React (TypeScript)"],
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    skills: ["KNN", "XGBoost", "SVM", "GLCM / LBP / HSV", "scikit-learn", "OpenCV", "Jupyter Notebook", "Google Colab"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    skills: ["React (TypeScript)", "Laravel (PHP)", "HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    skills: ["Flutter (Dart)", "Integrasi Model ML", "Camera API"],
  },
  {
    title: "Data & Analitik",
    icon: "📊",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    skills: ["Microsoft Excel", "Looker", "Confusion Matrix", "MinMaxScaler", "F1-Score Analysis"],
  },
  {
    title: "Design & Kolaborasi",
    icon: "🎨",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    skills: ["Figma", "Wireframing", "Prototyping", "Git", "GitHub (PR & Branching)", "Canva", "Adobe Photoshop"],
  },
  {
    title: "Bahasa",
    icon: "💬",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    skills: ["Indonesia (Native)", "English (Passive – B1)", "Mandarin (Beginner – TBCL 2)"],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    color: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    skills: ["Kerja Tim", "GitHub Pull Request", "Dokumentasi Teknis", "Problem Solving", "Manajemen Proyek"],
  },
]

export function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Card
          key={group.title}
          className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          style={{ animation: `fadeInUp 0.5s ease ${i * 0.07}s both` }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <span className={`text-xl p-1.5 rounded-lg ${group.color}`}>{group.icon}</span>
              {group.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-xs font-normal transition-colors duration-200 group-hover:border-primary/40"
              >
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
