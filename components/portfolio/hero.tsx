import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 grid gap-6 md:grid-cols-[1fr_auto] md:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">Yanuar Rizki Aminudin</h1>
          <p className="text-muted-foreground">Front-end Developer · IoT & AI Enthusiast · UI/UX Designer</p>
          <p className="leading-relaxed text-pretty">
            Mahasiswa D-IV Teknik Informatika Polinema yang antusias di bidang IoT, Digital Twin, dan AI.
            Berpengalaman membangun dashboard React terintegrasi sensor IoT, mengembangkan model machine learning,
            serta merancang antarmuka pengguna yang interaktif.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#proyek">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Lihat Proyek</Button>
            </a>
            <a href="#kontak">
              <Button variant="secondary">Kontak</Button>
            </a>
          </div>
        </div>
        <div className="grid content-start">
          <div className="rounded-xl border p-4 bg-primary text-primary-foreground">
            <p className="text-sm opacity-90">Status</p>
            <p className="font-medium">Mahasiswa TI Polinema (2023 — Sekarang)</p>
            <p className="text-sm opacity-75 mt-1">IPK 3.63 · Semester 6</p>
          </div>
        </div>
      </div>
    </section>
  )
}
