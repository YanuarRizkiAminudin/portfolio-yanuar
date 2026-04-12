import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import { Hero } from "@/components/portfolio/hero"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Organization } from "@/components/portfolio/organization"
import { Certificates } from "@/components/portfolio/certificates"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-all">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm">
              YR
            </div>
            <span className="font-semibold text-sm hidden sm:block">Yanuar Rizki Aminudin</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {[
              ["#profil", "Profil"],
              ["#keterampilan", "Keterampilan"],
              ["#proyek", "Proyek"],
              ["#pendidikan", "Pendidikan"],
              ["#sertifikat", "Sertifikat"],
              ["#organisasi", "Organisasi"],
              ["#kontak", "Kontak"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm px-3 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="mailto:yanuariyan24@gmail.com">
            <Button size="sm" className="font-semibold">Hubungi Saya</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Profil */}
      <section id="profil" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <SectionHeading title="Profil" subtitle="Tentang saya secara singkat" />
        <Card>
          <CardContent className="grid gap-8 md:grid-cols-[1fr_240px] md:gap-12 py-8">
            <div className="space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Mahasiswa D-IV Teknik Informatika Politeknik Negeri Malang (Semester 5) dengan IPK{" "}
                <span className="font-semibold text-foreground">3.63</span> yang antusias di bidang IoT,
                Digital Twin, dan AI. Berpengalaman mengaplikasikan Laravel dan React untuk pengembangan
                web, mengintegrasikan sensor IoT ke dashboard real-time, dan membangun model machine
                learning dengan akurasi tinggi. Siap berkontribusi dalam pengembangan aset tracker dan
                simulasi layout penempatan mesin di lingkungan industri.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-2">
                {[
                  { label: "IPK", value: "3.63" },
                  { label: "Semester", value: "5" },
                  { label: "Proyek", value: "4+" },
                  { label: "Akurasi ML", value: "96%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border bg-muted/40 p-3 text-center">
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/potret-profesional-untuk-portofolio-min.jpg"
                alt="Yanuar Rizki Aminudin"
                width={220}
                height={220}
                className="rounded-2xl border shadow-md object-cover aspect-square"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Keterampilan */}
      <section id="keterampilan" className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <SectionHeading title="Keterampilan" subtitle="Kemampuan & alat yang digunakan" />
          <Skills />
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <SectionHeading title="Proyek Kampus" subtitle="Kontribusi & hasil yang dicapai" />
        <Projects />
      </section>

      {/* Pendidikan */}
      <section id="pendidikan" className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <SectionHeading title="Pendidikan" subtitle="Riwayat pendidikan" />
          <Education />
        </div>
      </section>

      {/* Sertifikat */}
      <section id="sertifikat" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <SectionHeading title="Sertifikat" subtitle="Pencapaian & bukti kompetensi" />
        <Certificates />
      </section>

      {/* Organisasi */}
      <section id="organisasi" className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <SectionHeading title="Organisasi" subtitle="Aktivitas & tanggung jawab" />
          <Organization />
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <SectionHeading title="Kontak" subtitle="Mari terhubung dan berkolaborasi" />
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Yanuar Rizki Aminudin</span>
          <div className="flex gap-4">
            <a className="hover:text-foreground transition-colors" href="mailto:yanuariyan24@gmail.com">Email</a>
            <a className="hover:text-foreground transition-colors" href="tel:089666832419">Telepon</a>
            <a className="hover:text-foreground transition-colors" href="https://github.com/YanuarRizkiAminudin" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
