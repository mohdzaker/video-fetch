import { Navbar } from "@/components/nav/navbar"
import { VideoDownloader } from "@/components/video-downloader"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 space-y-24">
          <VideoDownloader />
          <Features />
          <HowItWorks />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  )
}