"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Calendar, Clock, ArrowRight, Shield, Target, Eye, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "Advanced SQL Injection Techniques in 2024",
      excerpt:
        "Exploring modern SQL injection vectors and bypass techniques that every penetration tester should know.",
      content:
        "Deep dive into advanced SQL injection techniques including blind SQL injection, time-based attacks, and WAF bypass methods...",
      category: "penetration",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["SQL Injection", "Web Security", "OWASP"],
      icon: Shield,
      featured: true,
    },
    {
      id: 2,
      title: "Red Team Tactics: Living Off The Land",
      excerpt: "How to use legitimate system tools for malicious purposes during red team engagements.",
      content: "Living off the land techniques allow attackers to blend in with normal system activity...",
      category: "redteam",
      date: "2024-01-10",
      readTime: "12 min",
      tags: ["Red Team", "LOLBAS", "Post-Exploitation"],
      icon: Target,
      featured: false,
    },
    {
      id: 3,
      title: "Memory Forensics: Analyzing Malware in RAM",
      excerpt: "Step-by-step guide to analyzing malware artifacts in memory dumps using Volatility.",
      content: "Memory forensics is crucial for incident response and malware analysis...",
      category: "forensics",
      date: "2024-01-05",
      readTime: "15 min",
      tags: ["Forensics", "Volatility", "Malware Analysis"],
      icon: Eye,
      featured: false,
    },
    {
      id: 4,
      title: "Breaking Modern Encryption: A Practical Guide",
      excerpt: "Understanding cryptographic weaknesses and how to exploit them in real-world scenarios.",
      content: "Modern encryption can have implementation flaws that lead to vulnerabilities...",
      category: "crypto",
      date: "2024-01-01",
      readTime: "10 min",
      tags: ["Cryptography", "Hash Cracking", "SSL/TLS"],
      icon: Lock,
      featured: true,
    },
    {
      id: 5,
      title: "OWASP Top 10 2024: What's New?",
      excerpt: "Analysis of the latest OWASP Top 10 vulnerabilities and how to test for them.",
      content: "The OWASP Top 10 has been updated with new vulnerability categories...",
      category: "penetration",
      date: "2023-12-28",
      readTime: "6 min",
      tags: ["OWASP", "Web Security", "Vulnerability Assessment"],
      icon: Shield,
      featured: false,
    },
    {
      id: 6,
      title: "Building a Home Cyber Range",
      excerpt: "Complete guide to setting up your own cybersecurity lab for practice and learning.",
      content: "A home cyber range is essential for practicing cybersecurity skills safely...",
      category: "tutorial",
      date: "2023-12-20",
      readTime: "20 min",
      tags: ["Lab Setup", "VirtualBox", "Kali Linux"],
      icon: Target,
      featured: false,
    },
    {
      id: 6,
      title: "Building a Home Cyber Range",
      excerpt: "Complete guide to setting up your own cybersecurity lab for practice and learning.",
      content: "A home cyber range is essential for practicing cybersecurity skills safely...",
      category: "tutorial",
      date: "2023-12-20",
      readTime: "20 min",
      tags: ["Lab Setup", "VirtualBox", "Kali Linux"],
      icon: Target,
      featured: false,
    },
    {
      id: 6,
      title: "Building a Home Cyber Range",
      excerpt: "Complete guide to setting up your own cybersecurity lab for practice and learning.",
      content: "A home cyber range is essential for practicing cybersecurity skills safely...",
      category: "tutorial",
      date: "2023-12-20",
      readTime: "20 min",
      tags: ["Lab Setup", "VirtualBox", "Kali Linux"],
      icon: Target,
      featured: false,
    },
    {
      id: 6,
      title: "Building a Home Cyber Range",
      excerpt: "Complete guide to setting up your own cybersecurity lab for practice and learning.",
      content: "A home cyber range is essential for practicing cybersecurity skills safely...",
      category: "tutorial",
      date: "2023-12-20",
      readTime: "20 min",
      tags: ["Lab Setup", "VirtualBox", "Kali Linux"],
      icon: Target,
      featured: false,
    },
  ]

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "penetration",
      name: "Penetration Testing",
      count: blogPosts.filter((p) => p.category === "penetration").length,
    },
    { id: "redteam", name: "Red Team", count: blogPosts.filter((p) => p.category === "redteam").length },
    { id: "forensics", name: "Digital Forensics", count: blogPosts.filter((p) => p.category === "forensics").length },
    { id: "crypto", name: "Cryptography", count: blogPosts.filter((p) => p.category === "crypto").length },
    { id: "tutorial", name: "Tutorials", count: blogPosts.filter((p) => p.category === "tutorial").length },
  ]

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter((post) => post.featured)

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
            <Link href="/contact" className="hover:text-green-300 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-green-300">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Security Blog</h1>
          <div className="text-green-300 mb-4">$ cat /var/log/security_research.log</div>
          <p className="text-green-300 max-w-2xl mx-auto">
            Latest insights, techniques, and discoveries in cybersecurity and ethical hacking.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="border border-green-400/50 p-6 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-3">
                    <post.icon className="w-6 h-6 mr-2" />
                    <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 border border-green-400/30">
                      FEATURED
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-green-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-green-300 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-400/10 text-green-300 px-2 py-1 border border-green-400/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild size="sm" className="bg-green-400 text-black hover:bg-green-300">
                    <Link href={`/blog/${post.id}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 border text-sm ${
                  selectedCategory === category.id
                    ? "bg-green-400 text-black border-green-400"
                    : "border-green-400/30 text-green-400 hover:border-green-400"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="border border-green-400/50 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <post.icon className="w-5 h-5 mr-2" />
                  <span className="text-xs text-green-300 capitalize">{post.category}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-green-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-green-300 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-green-400/10 text-green-300 px-2 py-1 border border-green-400/30"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && <span className="text-xs text-green-300">+{post.tags.length - 2}</span>}
                </div>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-green-300 mb-6">
            Get the latest cybersecurity insights and techniques delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@domain.com"
              className="flex-1 bg-black border border-green-400/30 p-3 text-green-400 focus:border-green-400 focus:outline-none"
            />
            <Button className="bg-green-400 text-black hover:bg-green-300 ml-2">Subscribe</Button>
          </div>
          <p className="text-xs text-green-300 mt-2">No spam, only quality security content. Unsubscribe anytime.</p>
        </div>
      </main>
    </div>
  )
}
