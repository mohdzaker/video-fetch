import { ArrowRight, Youtube, Instagram, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      icon: <Youtube className="h-8 w-8 text-red-500" />,
      title: "Copy URL",
      description: "Copy the video URL from YouTube or Instagram"
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-blue-400" />,
      title: "Paste & Select",
      description: "Paste the URL and choose your preferred format"
    },
    {
      icon: <Download className="h-8 w-8 text-green-400" />,
      title: "Download",
      description: "Click download and get your video instantly"
    }
  ]

  return (
    <section id="how-it-works" className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download your favorite videos in three simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="border-none bg-card/50 backdrop-blur">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-xl">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}