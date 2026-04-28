import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const certificates = [
  {
    title: "Ketua Divisi Creator Media – FORSIMPRO 2025/2026",
    issuer: "Forum Mahasiswa Polinema Probolinggo",
    date: "28 Maret 2026",
    image: "/sertifikat-pengurus-forsimpro.png",
    tag: "Organisasi",
  },
  {
    title: "Panitia – Sosialisasi Kampus 2024",
    issuer: "Forum Komunikasi Mahasiswa Polinema Probolinggo",
    date: "30 Desember 2024",
    image: "/sertifikat-forsimpro-sosialisasi.jpg",
    tag: "Organisasi",
  },
  {
    title: "TOCFL – Mandarin Reading S7 (CEFR B1)",
    issuer: "Steering Committee for the Test of Proficiency-Huayu",
    date: "Desember 2025",
    image: "/sertifikat-tocfl-reading.jpeg",
    tag: "Bahasa",
  },
  {
    title: "TOCFL – Mandarin Listening S2 (TBCL 2)",
    issuer: "Steering Committee for the Test of Proficiency-Huayu",
    date: "April 2026",
    image: "/sertifikat-tocfl-listening.jpeg",
    tag: "Bahasa",
  },
]

export function Certificates() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certificates.map((cert, i) => (
        <Card
          key={cert.title}
          className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
          style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s both` }}
        >
          <div className="relative overflow-hidden bg-muted flex items-center justify-center" style={{ minHeight: "160px" }}>
            <Image
              src={cert.image}
              alt={cert.title}
              width={800}
              height={500}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardContent className="pt-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-snug">{cert.title}</p>
              <Badge variant="secondary" className="text-xs shrink-0">{cert.tag}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground">{cert.date}</p>
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
