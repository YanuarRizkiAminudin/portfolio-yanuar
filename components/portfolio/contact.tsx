import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Kontak</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p>
            <span className="text-muted-foreground">Alamat:</span> Jl. Ronggojalu Gg. Ky Arjo 219, Probolinggo
          </p>
          <p>
            <span className="text-muted-foreground">Telepon:</span> 0896-6683-2419
          </p>
          <p>
            <span className="text-muted-foreground">Email:</span> yanuarrizky24@gmail.com
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:yanuarrizky24@gmail.com">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Kirim Email</Button>
          </a>
          <a href="tel:089666832419">
            <Button variant="secondary">Telepon</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
