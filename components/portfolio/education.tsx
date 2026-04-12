import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <div className="space-y-4">
      <Card className="transition-all duration-300 hover:shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                TI
              </div>
              <div>
                <h3 className="font-semibold text-base text-foreground">Politeknik Negeri Malang</h3>
                <p className="text-sm text-muted-foreground">2023 – Sekarang</p>
              </div>
            </div>
            <Badge variant="secondary" className="self-start shrink-0">IPK 3.63</Badge>
          </div>

          <div className="mt-4 pl-13 space-y-3" style={{ paddingLeft: "52px" }}>
            <p className="text-sm font-semibold text-foreground">D-IV Teknik Informatika · Jurusan Teknologi Informasi</p>
            <p className="text-sm text-muted-foreground">Semester 6 · Aktif</p>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-2">Mata Kuliah Relevan</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Internet of Things",
                  "Pengolahan Citra & Vision Komputer",
                  "Laravel & React (PBF)",
                  "Kecerdasan Buatan",
                  "Basis Data",
                  "Mobile App (Flutter)",
                ].map((mk) => (
                  <Badge key={mk} variant="outline" className="text-xs font-normal">
                    {mk}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
