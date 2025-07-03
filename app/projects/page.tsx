"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ExternalLink, Github, Shield, Target, Eye, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Advanced Web App Scanner",
      category: "security",
      description: "Custom vulnerability scanner with ML-based detection capabilities.",
      technologies: ["Python", "Selenium", "TensorFlow", "SQLite"],
      impact: "Discovered 200+ unique vulnerabilities",
      status: "Active",
      github: "#",
      demo: "#",
      icon: Shield,
    },
    {
      id: 2,
      title: "Red Team Automation Framework",
      category: "redteam",
      description: "Automated post-exploitation and lateral movement toolkit.",
      technologies: ["PowerShell", "C#", "Python", "Metasploit"],
      impact: "Reduced assessment time by 60%",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: Target,
    },
    {
      id: 3,
      title: "Incident Response Platform",
      category: "forensics",
      description: "Real-time threat detection and forensic analysis system.",
      technologies: ["ELK Stack", "Python", "YARA", "Volatility"],
      impact: "Analyzed 1000+ security incidents",
      status: "In Progress",
      github: "#",
      demo: "#",
      icon: Eye,
    },
    {
      id: 4,
      title: "Cryptographic Attack Suite",
      category: "crypto",
      description: "Collection of tools for cryptographic analysis and attacks.",
      technologies: ["C++", "Python", "OpenSSL", "SageMath"],
      impact: "Cracked 50+ encryption challenges",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: Lock,
    },
    {
      id: 4,
      title: "Cryptographic Attack Suite",
      category: "crypto",
      description: "Collection of tools for cryptographic analysis and attacks.",
      technologies: ["C++", "Python", "OpenSSL", "SageMath"],
      impact: "Cracked 50+ encryption challenges",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: Lock,
    },
    {
      id: 4,
      title: "Cryptographic Attack Suite",
      category: "crypto",
      description: "Collection of tools for cryptographic analysis and attacks.",
      technologies: ["C++", "Python", "OpenSSL", "SageMath"],
      impact: "Cracked 50+ encryption challenges",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: Lock,
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

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
            <Link href="/about" className="hover:text-green-300 transition-colors">
              About
            </Link>
            <Link href="/skills" className="hover:text-green-300 transition-colors">
              Skills
            </Link>
            <Link href="/projects" className="text-green-300">
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
          <h1 className="text-4xl font-bold mb-4">Security Projects</h1>
          <div className="text-green-300">$ find ./projects -name "*.exploit"</div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="border border-green-400/50 inline-flex bg-black/60 backdrop-blur-sm">
            {["all", "security", "redteam", "forensics", "crypto"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-3 capitalize ${
                  filter === category ? "bg-green-400 text-black" : "hover:bg-green-400/10"
                } ${category !== "all" ? "border-l border-green-400/30" : ""}`}
              >
                {category === "redteam" ? "Red Team" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-green-400/50 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className="w-8 h-8 mr-3" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 border ${
                      project.status === "Completed"
                        ? "border-green-400 text-green-400"
                        : project.status === "Active"
                          ? "border-blue-400 text-blue-400"
                          : "border-yellow-400 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-green-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2 text-green-300">Impact:</div>
                  <div className="text-sm text-green-400">{project.impact}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2 text-green-300">Technologies:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-400/10 text-green-300 px-2 py-1 border border-green-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-green-400 text-black hover:bg-green-300">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Need Security Assessment?</h2>
          <p className="text-green-300 mb-6">
            Let's discuss how I can help secure your applications and infrastructure.
          </p>
          <Button asChild className="bg-green-400 text-black hover:bg-green-300">
            <Link href="/contact">Start Security Audit</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
