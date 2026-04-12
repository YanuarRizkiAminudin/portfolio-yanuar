import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Politeknik Negeri Malang (2023 – Sekarang)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p>D-IV Teknik Informatika · Jurusan Teknologi Informasi</p>
        <p className="text-muted-foreground text-sm">IPK: 3.63</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge variant="secondary">Internet of Things</Badge>
          <Badge variant="secondary">Pengolahan Citra & Vision Komputer</Badge>
          <Badge variant="secondary">Laravel & React (PBF)</Badge>
          <Badge variant="secondary">Kecerdasan Buatan</Badge>
          <Badge variant="secondary">Basis Data</Badge>
          <Badge variant="secondary">Mobile App (Flutter)</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
