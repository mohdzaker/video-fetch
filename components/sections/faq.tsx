import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Which platforms are supported?",
      answer: "We currently support YouTube videos and Instagram Reels. More platforms will be added soon!"
    },
    {
      question: "Is it free to use?",
      answer: "Yes, VideoFetch is completely free to use for basic downloads. Premium features are available for enhanced quality and faster downloads."
    },
    {
      question: "What formats are available?",
      answer: "We support MP4 video downloads and MP3/WAV audio extractions. Video quality options depend on the source material."
    },
    {
      question: "Is it legal to download videos?",
      answer: "VideoFetch is legal for downloading videos for personal use. Please respect copyright laws and platform terms of service."
    }
  ]

  return (
    <section id="faq" className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about VideoFetch
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}