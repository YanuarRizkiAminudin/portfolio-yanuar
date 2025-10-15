import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  return (
    <div className="grid gap-4">
      {/* Sistem Pencatatan Prestasi Mahasiswa */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Project Based Learning: Pengembangan Sistem Pencatatan Prestasi Mahasiswa
          </CardTitle>
          <div className="flex gap-2">
            <Badge>UI/UX</Badge>
            <Badge variant="secondary">Front End</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Merancang dan mengimplementasikan UI/UX interaktif.</li>
            <li>Membuat wireframe, mockup, dan prototipe menggunakan Figma.</li>
            <li>Meningkatkan navigasi agar sistem lebih intuitif.</li>
            <li>Berkolaborasi dengan tim untuk menyusun dokumentasi teknis.</li>
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

      {/* Sistem Rekomendasi Magang */}
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-2">
          <CardTitle className="text-balance">
            Project Based Learning: Mengembangkan Website Sistem Rekomendasi Magang
          </CardTitle>
          <div className="flex gap-2">
            <Badge>Front End</Badge>
            <Badge variant="secondary">Prototyping</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Desain front-end, prototyping, dan styling (HTML, CSS, JS, React dasar).</li>
            <li>Membuat user flow dan UI interaktif.</li>
            <li>Mengintegrasikan tampilan dengan backend.</li>
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
    </div>
  );
}
