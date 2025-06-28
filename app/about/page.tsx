"use client"

import Link from "next/link"
import { ChevronRight, User, Shield, Target, Code } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative">
      <MatrixRain />

      {/* Navigation */}
      <nav className="border-b border-green-400/30 p-4 relative z-10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-6 h-6 text-green-400" />
            <Link href="/" className="text-xl font-bold">
              CyberDevHq
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-green-300">
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

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="text-green-300">$ cat /proc/self/status</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile */}
          <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="w-6 h-6 mr-2" />
              Profile
            </h2>
            <div className="space-y-4 text-green-300">
              <p>
                Ethical hacker and cybersecurity specialist with expertise in penetration testing, red team operations,
                and secure development practices.
              </p>
              <p>
                Passionate about finding vulnerabilities before the bad guys do and helping organizations strengthen
                their security posture.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Mission
            </h2>
            <div className="space-y-4 text-green-300">
              <p>
                To make the digital world safer by identifying security weaknesses and providing actionable solutions.
              </p>
              <div className="border-l-2 border-green-400 pl-4">
                <p className="italic">"The best defense is a good offense - know your enemy."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8 border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ethical Standards</h3>
              <p className="text-green-300 text-sm">Always operating within legal boundaries and ethical guidelines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-green-300 text-sm">Staying updated with the latest threats and security techniques.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results Driven</h3>
              <p className="text-green-300 text-sm">
                Focused on delivering actionable insights and measurable improvements.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-8 border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-green-400 pl-6">
              <div className="text-green-300 text-sm">2024 - Present</div>
              <h3 className="text-xl font-bold">Senior Penetration Tester</h3>
              <p className="text-green-300">Leading security assessments for enterprise clients</p>
            </div>
            <div className="border-l-2 border-green-400 pl-6">
              <div className="text-green-300 text-sm">2023 - 2024</div>
              <h3 className="text-xl font-bold">Cybersecurity Analyst</h3>
              <p className="text-green-300">Vulnerability research and incident response</p>
            </div>
            <div className="border-l-2 border-green-400 pl-6">
              <div className="text-green-300 text-sm">2022 - 2023</div>
              <h3 className="text-xl font-bold">Junior Security Researcher</h3>
              <p className="text-green-300">Web application security testing and analysis</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
