import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Smart Traffic Light – IoT & React",
    period: "2026 – Sekarang",
    org: "Politeknik Negeri Malang",
    tags: ["IoT", "React", "TypeScript", "Digital Twin"],
    variant: "default" as const,
    image: "/smartraf-dashboard.png",
    imageAlt: "Dashboard SMARTRAF Smart Traffic Light",
    points: [
      "Membangun dashboard monitoring real-time menggunakan React (TypeScript) terkoneksi perangkat IoT.",
      "Mengintegrasikan data sensor HC-SR04, ESP8266, dan Arduino Nano ke tampilan web.",
      "Menerapkan konsep Digital Twin untuk representasi virtual sistem fisik traffic light.",
    ],
    github: "https://github.com/alfbrynn/pbl-kel6-smarttraffic",
  },
  {
    title: "Klasifikasi Cuaca – AI & Computer Vision",
    period: "September 2025",
    org: "Politeknik Negeri Malang · Kelompok 6",
    tags: ["AI/ML", "Flutter", "OpenCV", "XGBoost"],
    variant: "default" as const,
    image: "/weatherai-app.png",
    imageAlt: "WeatherAI Aplikasi Klasifikasi Cuaca Flutter",
    points: [
      "Model ML (KNN + Manhattan Distance) dengan 29 fitur GLCM, LBP, HSV untuk 4 kondisi cuaca.",
      "Akurasi 88.44% (KNN) dan 96% (XGBoost) dari 225 data uji · F1-Score Rain: 0.97.",
      "Integrasi model ke aplikasi Flutter untuk prediksi near real-time via kamera pengguna.",
    ],
    github: "https://github.com/weather-classification-kelompok6",
  },
  {
    title: "Website Sistem Rekomendasi Magang",
    period: "Mei – Juli 2025",
    org: "Politeknik Negeri Malang · PBL Semester 4",
    tags: ["Laravel", "Front End", "GitHub PR"],
    variant: "secondary" as const,
    image: "/simagang-app.png",
    imageAlt: "SIMAgang Website Sistem Rekomendasi Magang",
    points: [
      "Membangun front-end website rekomendasi magang menggunakan Laravel (HTML, CSS, JS).",
      "Merancang user flow dan UI interaktif, mengintegrasikan tampilan dengan backend.",
      "Berkontribusi aktif via GitHub Pull Request dalam tim 5 orang.",
    ],
    github: "https://github.com/syaifulmain/PBL-Sistem-Rekomendasi-Magang-Semester-4",
  },
  {
    title: "Sistem Pencatatan Prestasi Mahasiswa",
    period: "Oktober – Desember 2024",
    org: "Politeknik Negeri Malang · PBL Semester 3",
    tags: ["UI/UX", "Figma", "Dokumentasi"],
    variant: "secondary" as const,
    image: null,
    imageAlt: "",
    points: [
      "Merancang UI interaktif dengan Figma — wireframe, mockup, hingga prototipe.",
      "Menyusun dokumentasi teknis lengkap: Project Charter, WBS, RAB, Risk Management.",
      "Proyek diterapkan di lingkungan kampus untuk mempermudah pencatatan prestasi mahasiswa.",
    ],
    github: "https://github.com/YanuarRizkiAminudin/SAN-SIGMA",
  },
]

export function Projects() {
  return (
    <div className="grid gap-6">
      {projects.map((project, i) => (
        <Card
          key={project.title}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s both` }}
        >
          {project.image && (
            <div className="relative w-full overflow-hidden bg-muted flex items-center justify-center" style={{ minHeight: "200px", maxHeight: "360px" }}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={900}
                height={600}
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                style={{ maxHeight: "360px" }}
              />
            </div>
          )}
          <CardHeader className="pb-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.period} · {project.org}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 shrink-0">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant={project.variant} className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="space-y-1.5">
              {project.points.map((point, j) => (
                <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
                  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Lihat di GitHub
                </Button>
              </a>
            </div>
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
