import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>IoT & Digital Twin</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Sensor Integration</Badge>
          <Badge variant="outline">Digital Twin</Badge>
          <Badge variant="outline">Real-time Monitoring</Badge>
          <Badge variant="outline">React (TypeScript)</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI & Machine Learning</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">KNN</Badge>
          <Badge variant="outline">GLCM / LBP / HSV</Badge>
          <Badge variant="outline">scikit-learn</Badge>
          <Badge variant="outline">XGBoost</Badge>
          <Badge variant="outline">OpenCV</Badge>
          <Badge variant="outline">Jupyter Notebook</Badge>
          <Badge variant="outline">Google Colab</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Web Development</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">React (TypeScript)</Badge>
          <Badge variant="outline">Laravel (PHP)</Badge>
          <Badge variant="outline">HTML</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">JavaScript</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mobile Development</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Flutter (Dart)</Badge>
          <Badge variant="outline">Integrasi Model ML</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data & Analitik</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Microsoft Excel</Badge>
          <Badge variant="outline">Looker</Badge>
          <Badge variant="outline">Confusion Matrix</Badge>
          <Badge variant="outline">MinMaxScaler</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Design & Kolaborasi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="outline">Figma</Badge>
          <Badge variant="outline">Wireframing</Badge>
          <Badge variant="outline">Prototyping</Badge>
          <Badge variant="outline">Git</Badge>
          <Badge variant="outline">GitHub</Badge>
          <Badge variant="outline">Canva</Badge>
          <Badge variant="outline">Adobe Photoshop</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
