import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { Hero } from "@/components/portfolio/hero"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Organization } from "@/components/portfolio/organization"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <header className="border-b bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold">
              YR
            </div>
            <span className="font-semibold">Yanuar Rizki Aminudin</span>
          </div>
          <nav className="hidden md:flex items-center gap-3">
            <a className="text-sm hover:text-primary" href="#profil">
              Profil
            </a>
            <a className="text-sm hover:text-primary" href="#keterampilan">
              Keterampilan
            </a>
            <a className="text-sm hover:text-primary" href="#proyek">
              Proyek
            </a>
            <a className="text-sm hover:text-primary" href="#pendidikan">
              Pendidikan
            </a>
            <a className="text-sm hover:text-primary" href="#organisasi">
              Organisasi
            </a>
            <a className="text-sm hover:text-primary" href="#kontak">
              Kontak
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:yanuarrizky24@gmail.com">
              <Button variant="default">Hubungi Saya</Button>
            </a>
          </div>
        </div>
      </header>

      <Hero />

      <section id="profil" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Profil" subtitle="Tentang saya secara singkat" />
        <Card>
          <CardContent className="grid gap-6 md:grid-cols-[1fr_280px] md:gap-10 py-6">
            <div className="space-y-4">
              <p className="text-pretty leading-relaxed">
                Mahasiswa Teknik Informatika Polinema angkatan 2023 dengan minat kuat di desain antarmuka pengguna
                (UI/UX) dan pengembangan web front-end. Terbiasa bekerja dalam tim, cepat beradaptasi, dan memiliki
                pengalaman merancang antarmuka interaktif serta mendokumentasikan proyek digital secara profesional.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Front End Coding</Badge>
                <Badge variant="secondary">Desain & Dokumentasi</Badge>
              </div>
            </div>
            <div className="flex items-start justify-center">
              <Image
                src="/potret-profesional-untuk-portofolio.png"
                alt="Potret profesional"
                width={280}
                height={280}
                className="rounded-xl border"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="keterampilan" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Keterampilan" subtitle="Kemampuan & alat yang digunakan" />
        <Skills />
      </section>

      <section id="proyek" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Proyek Kampus" subtitle="Kontribusi & hasil yang dicapai" />
        <Projects />
      </section>

      <section id="pendidikan" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Pendidikan" subtitle="Riwayat pendidikan" />
        <Education />
      </section>

      <section id="organisasi" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Organisasi" subtitle="Aktivitas & tanggung jawab" />
        <Organization />
      </section>

      <section id="kontak" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <SectionHeading title="Kontak" subtitle="Mari terhubung dan berkolaborasi" />
        <Contact />
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 flex items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} Yanuar Rizki Aminudin</span>
          <div className="flex gap-3">
            <a className="hover:text-primary" href="mailto:yanuarrizky24@gmail.com">
              Email
            </a>
            <a className="hover:text-primary" href="tel:089666832419">
              Telepon
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
