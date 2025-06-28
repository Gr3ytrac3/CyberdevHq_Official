"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Shield, Terminal, Target, Zap, Eye, Lock } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("penetration")

  const skillCategories = {
    penetration: {
      title: "Penetration Testing",
      icon: Shield,
      skills: [
        { name: "Web Application Testing", level: 95, tools: ["Burp Suite", "OWASP ZAP", "SQLMap"] },
        { name: "Network Penetration", level: 90, tools: ["Nmap", "Metasploit", "Nessus"] },
        { name: "Wireless Security", level: 85, tools: ["Aircrack-ng", "Kismet", "Reaver"] },
        { name: "Mobile App Security", level: 80, tools: ["MobSF", "Frida", "Objection"] },
      ],
    },
    redteam: {
      title: "Red Team Operations",
      icon: Target,
      skills: [
        { name: "Social Engineering", level: 88, tools: ["SET", "Gophish", "BeEF"] },
        { name: "Post-Exploitation", level: 92, tools: ["Cobalt Strike", "Empire", "Meterpreter"] },
        { name: "Persistence Techniques", level: 85, tools: ["PowerShell", "WMI", "Registry"] },
        { name: "Lateral Movement", level: 87, tools: ["BloodHound", "Mimikatz", "PsExec"] },
      ],
    },
    forensics: {
      title: "Digital Forensics",
      icon: Eye,
      skills: [
        { name: "Incident Response", level: 83, tools: ["Volatility", "Autopsy", "YARA"] },
        { name: "Malware Analysis", level: 80, tools: ["IDA Pro", "Ghidra", "Wireshark"] },
        { name: "Memory Forensics", level: 78, tools: ["Rekall", "Volatility", "WinDbg"] },
        { name: "Network Forensics", level: 85, tools: ["NetworkMiner", "Xplico", "Tcpdump"] },
      ],
    },
    crypto: {
      title: "Cryptography & Reverse Engineering",
      icon: Lock,
      skills: [
        { name: "Cryptographic Attacks", level: 82, tools: ["Hashcat", "John", "CyberChef"] },
        { name: "Binary Analysis", level: 85, tools: ["Ghidra", "Radare2", "x64dbg"] },
        { name: "Protocol Analysis", level: 80, tools: ["Wireshark", "Scapy", "Burp"] },
        { name: "Steganography", level: 75, tools: ["Steghide", "Binwalk", "Foremost"] },
      ],
    },
  }

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
            <Link href="/skills" className="text-green-300">
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
          <h1 className="text-4xl font-bold mb-4">Security Arsenal</h1>
          <div className="text-green-300">$ ls -la /skills/cybersecurity/</div>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-8">
          <div className="border border-green-400/50 inline-flex bg-black/60 backdrop-blur-sm">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-3 flex items-center space-x-2 ${
                  activeCategory === key ? "bg-green-400 text-black" : "hover:bg-green-400/10"
                } ${key !== "penetration" ? "border-l border-green-400/30" : ""}`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
              className: "w-8 h-8 mr-3",
            })}
            <h2 className="text-2xl font-bold">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="border border-green-400/30 p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold">{skill.name}</h3>
                  <span className="text-sm text-green-300">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-800 h-2 border border-green-400/30 mb-3">
                  <div
                    className="bg-green-400 h-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div>
                  <div className="text-sm text-green-300 mb-1">Tools:</div>
                  <div className="flex flex-wrap gap-1">
                    {skill.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-green-400/10 text-green-300 px-2 py-1 border border-green-400/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Training */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              Active Certifications
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>• CEH (Certified Ethical Hacker)</span>
                <span className="text-green-300">2024</span>
              </div>
              <div className="flex justify-between">
                <span>• OSCP (Offensive Security)</span>
                <span className="text-yellow-400">In Progress</span>
              </div>
              <div className="flex justify-between">
                <span>• CompTIA Security+</span>
                <span className="text-green-300">2023</span>
              </div>
              <div className="flex justify-between">
                <span>• CISSP</span>
                <span className="text-yellow-400">Planned</span>
              </div>
            </div>
          </div>

          <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Training Platforms
            </h2>
            <div className="space-y-2 text-sm">
              <div>• TryHackMe - Top 1% Ranking</div>
              <div>• HackTheBox - Pro Labs Completed</div>
              <div>• VulnHub - 100+ Machines Rooted</div>
              <div>• PortSwigger Academy - All Labs</div>
              <div>• SANS Training - Multiple Courses</div>
            </div>
          </div>
        </div>

        {/* Operating Systems */}
        <div className="mt-8 border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4">Operating Systems Mastery</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="border border-green-400/30 p-4">
              <div className="text-2xl font-bold text-green-400">Kali Linux</div>
              <div className="text-sm text-green-300">Primary OS</div>
            </div>
            <div className="border border-green-400/30 p-4">
              <div className="text-2xl font-bold text-green-400">Parrot OS</div>
              <div className="text-sm text-green-300">Forensics</div>
            </div>
            <div className="border border-green-400/30 p-4">
              <div className="text-2xl font-bold text-green-400">Windows</div>
              <div className="text-sm text-green-300">AD Pentesting</div>
            </div>
            <div className="border border-green-400/30 p-4">
              <div className="text-2xl font-bold text-green-400">Ubuntu</div>
              <div className="text-sm text-green-300">Development</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
