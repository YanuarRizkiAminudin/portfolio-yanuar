import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  return (
    <div className="grid gap-4">
      {/* Smart Traffic Light */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Smart Traffic Light – IoT & React (PBF)
          </CardTitle>
          <div className="flex gap-2">
            <Badge>IoT</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Digital Twin</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">2026 – Sekarang · Politeknik Negeri Malang</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Membangun dashboard monitoring Smart Traffic Light menggunakan React (TypeScript) yang terkoneksi ke perangkat IoT secara real-time.</li>
            <li>Mengintegrasikan data sensor hardware ke tampilan web untuk simulasi dan kontrol lampu lalu lintas otomatis.</li>
            <li>Menerapkan konsep Digital Twin — representasi virtual sistem fisik traffic light — untuk monitoring dan pengembangan.</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            <a href="https://github.com/alfbrynn/pbl-kel6-smarttraffic.git" className="text-blue-500 underline">
              Lihat di GitHub
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Klasifikasi Cuaca */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Klasifikasi Cuaca – AI & Computer Vision (PCVK)
          </CardTitle>
          <div className="flex gap-2">
            <Badge>AI/ML</Badge>
            <Badge variant="secondary">Flutter</Badge>
            <Badge variant="secondary">Computer Vision</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">September 2025 · Politeknik Negeri Malang · Kelompok 6</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mengembangkan model ML (KNN + Manhattan Distance) dengan 29 fitur GLCM, LBP, dan HSV untuk klasifikasi 4 kondisi cuaca.</li>
            <li>Mencapai akurasi 88.44% dari 225 data uji (F1-Score Rain: 0.97).</li>
            <li>Mengintegrasikan model ke aplikasi mobile Flutter untuk prediksi near real-time dari kamera pengguna.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Sistem Rekomendasi Magang */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Website Sistem Rekomendasi Magang – Laravel
          </CardTitle>
          <div className="flex gap-2">
            <Badge>Front End</Badge>
            <Badge variant="secondary">Laravel</Badge>
            <Badge variant="secondary">Prototyping</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">Mei – Juli 2025 · Politeknik Negeri Malang · PBL Semester 4</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Membangun front-end website rekomendasi magang menggunakan Laravel (HTML, CSS, JS).</li>
            <li>Merancang user flow dan UI interaktif, serta mengintegrasikan tampilan dengan backend.</li>
            <li>Berkontribusi aktif melalui GitHub Pull Request dalam tim pengembang 5 orang.</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Hasil: Tampilan responsif dan mudah digunakan oleh mahasiswa.
            <br />
            <a href="https://github.com/syaifulmain/PBL-Sistem-Rekomendasi-Magang-Semester-4" className="text-blue-500 underline">
              Lihat di GitHub
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Sistem Pencatatan Prestasi Mahasiswa */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Sistem Pencatatan Prestasi Mahasiswa – UI/UX & Manajemen Proyek
          </CardTitle>
          <div className="flex gap-2">
            <Badge>UI/UX</Badge>
            <Badge variant="secondary">Figma</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">Oktober – Desember 2024 · Politeknik Negeri Malang · PBL Semester 3</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Merancang UI interaktif dengan Figma — wireframe, mockup, hingga prototipe yang meningkatkan navigasi sistem.</li>
            <li>Menyusun dokumentasi teknis (Project Charter, WBS, RAB, Risk Management) bersama tim backend.</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Hasil: Proyek diterapkan di lingkungan kampus dan mempermudah pencatatan prestasi mahasiswa.
            <br />
            <a href="https://github.com/YanuarRizkiAminudin/SAN-SIGMA" className="text-blue-500 underline">
              Lihat di GitHub
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
