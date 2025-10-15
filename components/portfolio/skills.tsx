import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>UI/UX Design</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Figma</Badge>
          <Badge variant="outline">Adobe XD</Badge>
          <Badge variant="outline">Prototyping</Badge>
          <Badge variant="outline">User Flow</Badge>
          <Badge variant="outline">Usability Testing</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Front End Development</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">HTML</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">React (dasar)</Badge>
          <Badge variant="outline">Responsive Design</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Desain & Dokumentasi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Wireframing</Badge>
          <Badge variant="outline">Mockup</Badge>
          <Badge variant="outline">User Documentation</Badge>
          <Badge variant="outline">Style Guide</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
