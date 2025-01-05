"use client"

import { Download, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"
import { NavLinks } from "./nav-links"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Download className="h-6 w-6 text-blue-400" />
          <span className="font-bold text-xl">VideoFetch</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks className="flex items-center space-x-6" />
          <Button variant="default" size="sm">Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Video Fetch</SheetTitle>
            <NavLinks className="flex flex-col space-y-4 mt-6" />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}