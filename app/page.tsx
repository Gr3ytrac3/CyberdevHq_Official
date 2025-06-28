"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal, Shield, Zap, Target } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"

export default function HomePage() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Ethical Hacker | Penetration Tester | Red Team Operator"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative">
      <MatrixRain />

      {/* Navigation */}
      <nav className="border-b border-green-400/30 p-4 relative z-10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">CyberDevHq</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-300 transition-colors">
              About
            </Link>
            <Link href="/skills" className="hover:text-green-300 transition-colors">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-green-300 transition-colors">
              Projects
            </Link>
            <Link href="/services" className="hover:text-green-300 transition-colors">
              Services
            </Link>
            <Link href="/terminal" className="hover:text-green-300 transition-colors">
              Terminal
            </Link>
            <Link href="/contact" className="hover:text-green-300 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-green-300 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-sm text-green-300">$ whoami</div>
            <h1 className="text-5xl md:text-7xl font-bold">CyberDevHq</h1>
            <div className="text-lg text-green-300">The Ghost in the Machine</div>
          </div>

          <div className="border border-green-400/50 p-8 max-w-4xl mx-auto bg-black/60 backdrop-blur-sm">
            <div className="text-sm text-green-300 mb-4">$ cat /proc/expertise</div>
            <div className="text-xl md:text-2xl">
              {text}
              {showCursor && <span className="animate-pulse">|</span>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-green-400 text-black hover:bg-green-300 font-bold">
              <Link href="/skills">
                <Shield className="w-4 h-4 mr-2" />
                Security Arsenal
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent font-bold"
            >
              <Link href="/contact">
                <Terminal className="w-4 h-4 mr-2" />
                Initiate Contact
              </Link>
            </Button>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="border border-green-400/50 p-6 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Penetration Testing</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Web Application Security</li>
              <li>• Network Infrastructure</li>
              <li>• OWASP Top 10</li>
            </ul>
          </div>

          <div className="border border-green-400/50 p-6 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm">
            <Target className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Red Team Operations</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Attack Simulation</li>
              <li>• Social Engineering</li>
              <li>• Advanced Persistent Threats</li>
            </ul>
          </div>

          <div className="border border-green-400/50 p-6 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm">
            <Zap className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Vulnerability Research</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Zero-Day Discovery</li>
              <li>• Exploit Development</li>
              <li>• Security Research</li>
            </ul>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-green-300 text-sm">Vulnerabilities Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-green-300 text-sm">Security Assessments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-green-300 text-sm">Threat Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-green-300 text-sm">Ethical Standards</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
