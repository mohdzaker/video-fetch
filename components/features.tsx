import { Shield, Zap, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "Lightning Fast",
      description: "Download videos at maximum speed with our optimized servers"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-400" />,
      title: "Secure Downloads",
      description: "Your privacy is our priority. All downloads are encrypted and secure"
    },
    {
      icon: <Download className="h-12 w-12 text-green-400" />,
      title: "Multiple Formats",
      description: "Choose from various formats and quality options for your downloads"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Why Choose VideoFetch?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the best video downloading service with our premium features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-none bg-card/50 backdrop-blur">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}