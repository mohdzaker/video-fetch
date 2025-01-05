import { cn } from "@/lib/utils"

interface NavLinksProps {
  className?: string
}

export function NavLinks({ className }: NavLinksProps) {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <div className={cn("text-muted-foreground", className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}