"use client"

import { useState } from "react"
import { Download, Youtube, Instagram, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function VideoDownloader() {
  const [url, setUrl] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [format, setFormat] = useState("mp4")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<any>(null)

  const handleDownload = async () => {
    if (!url) {
      alert("Please provide a video URL.")
      return
    }

    setLoading(true)
    setResponse(null)

    try {
      const res = await fetch("/api/downloader/insta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link: url }),
      })

      if (!res.ok) {
        throw new Error("Failed to fetch video details.")
      }

      const data = await res.json()
      setResponse(data)
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="space-y-8 text-center pt-24">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Download Videos Easily
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          Download from YouTube and Instagram in seconds. Choose your preferred format and quality.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Paste video URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instagram">
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2 text-pink-500" />
                  Instagram
                </div>
              </SelectItem>
              <SelectItem value="youtube" disabled>
                <div className="flex items-center">
                  <Youtube className="w-4 h-4 mr-2 text-red-500" />
                  YouTube
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mp4">MP4 Video</SelectItem>
              <SelectItem value="mp3" disabled>MP3 Audio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          size="lg"
          className="w-full sm:w-auto px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Download className="mr-2 h-5 w-5" />
          )}
          {loading ? "Loading..." : "Start Download"}
        </Button>
      </div>

      {response && (
        <div className="space-y-4 mt-8">
          <h2 className="text-muted-foreground text-lg">
            Video Downloaded Successfully!
          </h2>
          <img
            src={response.reel_thumbnail[0]}
            alt="Thumbnail"
            className="w-40 mx-auto rounded-lg"
          />
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <a
              href={response.reel_download_link[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Video
            </a>
          </Button>
        </div>
      )}
    </section>
  )
}
