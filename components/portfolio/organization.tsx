import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Organization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forum Daerah — Media Sosial (Non-formal)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Pengelolaan konten dan publikasi kegiatan.</li>
          <li>Dokumentasi digital dan koordinasi tim.</li>
          <li>Meningkatkan keterlibatan peserta dan audiens.</li>
        </ul>
      </CardContent>
    </Card>
  )
}
