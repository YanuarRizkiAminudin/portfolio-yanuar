"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

const roles = ["Front-end Developer", "IoT Engineer", "AI/ML Enthusiast", "UI/UX Designer"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden border-b bg-card">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:gap-16 items-center">
          <div
            className="space-y-6"
            style={{ animation: "fadeInUp 0.6s ease both" }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-green-500" style={{ animation: "pulse 2s infinite" }} />
              <span className="text-sm text-muted-foreground">Tersedia untuk magang</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Yanuar Rizki
                <br />
                <span className="text-primary">Aminudin</span>
              </h1>
              <div className="mt-3 h-8 flex items-center">
                <span
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    fontSize: "1.125rem",
                    color: "var(--muted-foreground)",
                    fontWeight: 500,
                    display: "block",
                  }}
                >
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Mahasiswa D-IV Teknik Informatika Polinema · Semester 6 · IPK{" "}
              <span className="font-semibold text-foreground">3.63</span>. Berpengalaman membangun
              dashboard IoT real-time, model AI dengan akurasi 96%, serta antarmuka pengguna interaktif.
            </p>

            <div className="flex flex-wrap gap-2">
              {["IoT & Digital Twin", "AI/ML", "React (TypeScript)", "Laravel", "Flutter"].map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#proyek">
                <Button size="lg" className="font-semibold shadow-sm">Lihat Proyek</Button>
              </a>
              <a href="#kontak">
                <Button size="lg" variant="outline" className="font-semibold">Hubungi Saya</Button>
              </a>
              <a href="https://github.com/YanuarRizkiAminudin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost" className="font-semibold">GitHub ↗</Button>
              </a>
            </div>
          </div>

          <div
            className="flex flex-col items-center gap-5"
            style={{ animation: "fadeInUp 0.6s ease 0.15s both" }}
          >
            <div className="relative">
              <Image
                src="/potret-profesional-untuk-portofolio-min.png"
                alt="Yanuar Rizki Aminudin"
                width={240}
                height={240}
                className="rounded-full border-4 border-border shadow-lg object-cover"
                style={{ aspectRatio: "1/1" }}
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { label: "IPK", value: "3.63" },
                { label: "Proyek", value: "4+" },
                { label: "Akurasi ML", value: "96%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border bg-background p-3 text-center shadow-sm">
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
