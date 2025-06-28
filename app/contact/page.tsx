"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Mail, MessageSquare, Shield, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            <Link href="/contact" className="text-green-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Initiate Contact</h1>
          <div className="text-green-300">$ netcat -l 1337</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2" />
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-400/30 p-3 text-green-400 focus:border-green-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-400/30 p-3 text-green-400 focus:border-green-400 focus:outline-none"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-400/30 p-3 text-green-400 focus:border-green-400 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="penetration-testing">Penetration Testing</option>
                  <option value="security-audit">Security Audit</option>
                  <option value="red-team">Red Team Assessment</option>
                  <option value="consultation">Security Consultation</option>
                  <option value="training">Security Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black border border-green-400/30 p-3 text-green-400 focus:border-green-400 focus:outline-none resize-none"
                  placeholder="Describe your security needs..."
                />
              </div>

              <Button type="submit" className="w-full bg-green-400 text-black hover:bg-green-300 font-bold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                Direct Contact
              </h2>
              <div className="space-y-3 text-green-300">
                <div>
                  <div className="font-semibold">Email:</div>
                  <div>contact@cyberdevhq.com</div>
                </div>
                <div>
                  <div className="font-semibold">Response Time:</div>
                  <div>Within 24 hours</div>
                </div>
                <div>
                  <div className="font-semibold">Availability:</div>
                  <div>Mon-Fri, 9AM-6PM UTC</div>
                </div>
              </div>
            </div>

            <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Security Services
              </h2>
              <ul className="space-y-2 text-green-300 text-sm">
                <li>• Web Application Penetration Testing</li>
                <li>• Network Security Assessment</li>
                <li>• Red Team Operations</li>
                <li>• Security Code Review</li>
                <li>• Incident Response</li>
                <li>• Security Training & Workshops</li>
              </ul>
            </div>

            <div className="border border-green-400/50 p-6 bg-black/60 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4">PGP Public Key</h2>
              <div className="text-xs text-green-300 font-mono bg-gray-900 p-3 border border-green-400/30">
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                <br />
                mQENBF... [TRUNCATED FOR DISPLAY]
                <br />
                -----END PGP PUBLIC KEY BLOCK-----
              </div>
              <div className="text-xs text-green-300 mt-2">For sensitive communications</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
