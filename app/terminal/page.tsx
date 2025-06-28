"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"

export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ type: "command" | "output"; content: string }>>([
    { type: "output", content: "CyberDevHq Security Terminal v3.0.1" },
    { type: "output", content: 'Type "help" for available commands.' },
    { type: "output", content: "" },
  ])
  const [currentPath, setCurrentPath] = useState("~/security")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "  help          - Show this help message",
      "  whoami        - Display current user info",
      "  skills        - List cybersecurity skills",
      "  tools         - Show security tools arsenal",
      "  exploits      - List recent exploits found",
      "  scan          - Simulate network scan",
      "  crack         - Password cracking demo",
      "  clear         - Clear the terminal",
      "  matrix        - Enter the matrix...",
      "  hack          - Initialize hacking sequence",
      "",
    ],
    whoami: () => [
      "cyberdevhq@security:~/$ whoami",
      "root",
      "",
      "User: CyberDevHq",
      "Role: Ethical Hacker | Penetration Tester",
      "Clearance: ████████████ [CLASSIFIED]",
      "Status: ONLINE - Ready for engagement",
      "",
    ],
    skills: () => [
      "Cybersecurity Skills Arsenal:",
      "",
      "PENETRATION TESTING    [████████████████████] 95%",
      "WEB APP SECURITY       [███████████████████ ] 90%",
      "NETWORK SECURITY       [██████████████████  ] 88%",
      "RED TEAM OPERATIONS    [█████████████████   ] 85%",
      "MALWARE ANALYSIS       [████████████████    ] 80%",
      "DIGITAL FORENSICS      [███████████████     ] 78%",
      "",
    ],
    tools: () => [
      "Security Tools Arsenal:",
      "",
      "Reconnaissance:   Nmap, Masscan, Amass, Subfinder",
      "Web Testing:      Burp Suite, OWASP ZAP, SQLMap",
      "Exploitation:     Metasploit, Cobalt Strike, Empire",
      "Post-Exploit:     Mimikatz, BloodHound, PowerView",
      "Forensics:        Volatility, Autopsy, Wireshark",
      "Crypto:           Hashcat, John, CyberChef",
      "",
    ],
    exploits: () => [
      "Recent Vulnerability Discoveries:",
      "",
      "CVE-2024-XXXX    SQL Injection in E-commerce Platform",
      "CVE-2024-YYYY    XSS in Popular CMS System",
      "CVE-2024-ZZZZ    RCE in IoT Device Firmware",
      "",
      "Total Vulnerabilities Found: 500+",
      "Critical Severity: 45",
      "High Severity: 120",
      "",
    ],
    scan: () => [
      "Initiating network scan...",
      "",
      "Nmap scan report for target network",
      "Host is up (0.0012s latency).",
      "",
      "PORT     STATE SERVICE",
      "22/tcp   open  ssh",
      "80/tcp   open  http",
      "443/tcp  open  https",
      "3306/tcp open  mysql",
      "",
      "Scan completed. 4 open ports found.",
      "",
    ],
    crack: () => [
      "Password Cracking Simulation:",
      "",
      "Loading wordlist... [████████████████████████████████████████] 100%",
      "Initializing hashcat...",
      "",
      "Hash: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
      "Cracking... [████████████████████████████████████████] 100%",
      "",
      "Password found: 'password123'",
      "Time taken: 0.003 seconds",
      "",
      "Note: This is a demonstration only!",
      "",
    ],
    clear: () => {
      setHistory([])
      return []
    },
    matrix: () => [
      "Entering the Matrix...",
      "",
      "01000011 01111001 01100010 01100101 01110010",
      "01000100 01100101 01110110 01001000 01110001",
      "",
      'Translation: "CyberDevHq"',
      "",
      "Welcome to the real world, Neo.",
      "The Matrix has you... but I have the exploits! 💊",
      "",
    ],
    hack: () => [
      "Initializing advanced hacking sequence...",
      "",
      "Bypassing firewall... [████████████████████████████████████████] 100%",
      "Escalating privileges... [████████████████████████████████████████] 100%",
      "Accessing mainframe... [████████████████████████████████████████] 100%",
      "",
      "ACCESS GRANTED",
      "Root shell acquired.",
      "",
      "Just kidding! This is ethical hacking only 😄",
      "All activities are authorized and legal.",
      "",
    ],
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (commands[trimmedCmd as keyof typeof commands]) {
      return commands[trimmedCmd as keyof typeof commands]()
    } else {
      return [`bash: ${trimmedCmd}: command not found`, 'Type "help" for available commands.', ""]
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newHistory = [
      ...history,
      { type: "command" as const, content: `${currentPath}$ ${input}` },
      ...handleCommand(input).map((line) => ({ type: "output" as const, content: line })),
    ]

    setHistory(newHistory)
    setInput("")
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
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
            <Link href="/projects" className="hover:text-green-300 transition-colors">
              Projects
            </Link>
            <Link href="/services" className="hover:text-green-300 transition-colors">
              Services
            </Link>
            <Link href="/terminal" className="text-green-300">
              Terminal
            </Link>
            <Link href="/contact" className="hover:text-green-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        <div className="border border-green-400/50 h-[600px] flex flex-col bg-black/60 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="border-b border-green-400/30 p-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm">cyberdevhq@security-terminal</div>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
            {history.map((entry, index) => (
              <div key={index} className={entry.type === "command" ? "text-green-300" : "text-green-400"}>
                {entry.content}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-green-300 mr-2">{currentPath}$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-green-400"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="animate-pulse">|</span>
            </form>
          </div>
        </div>

        {/* Terminal Instructions */}
        <div className="mt-4 text-center text-green-300 text-sm">
          <p>Interactive Security Terminal - Click to focus and start typing</p>
          <p>Try: help, skills, tools, exploits, scan, crack, hack, matrix</p>
        </div>
      </div>
    </div>
  )
}
