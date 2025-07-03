import Link from "next/link"
import { ChevronRight, Shield, Code, Search, FileText, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessment of your web applications and infrastructure.",
      features: [
        "Web Application Security Testing",
        "Network Infrastructure Assessment",
        "Vulnerability Identification",
        "Detailed Security Reports",
        "Remediation Recommendations",
      ],
      pricing: "Starting at $2,500",
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Full-stack web development with security built-in from the ground up.",
      features: [
        "React.js & Next.js Applications",
        "Secure API Development",
        "Database Design & Security",
        "Authentication Systems",
        "Performance Optimization",
      ],
      pricing: "Starting at $5,000",
    },
    {
      icon: Search,
      title: "Security Auditing",
      description: "In-depth code review and security analysis of existing applications.",
      features: [
        "Source Code Security Review",
        "Architecture Security Assessment",
        "OWASP Compliance Check",
        "Security Best Practices Guide",
        "Implementation Support",
      ],
      pricing: "Starting at $1,500",
    },
    {
      icon: FileText,
      title: "Security Consulting",
      description: "Strategic cybersecurity guidance and implementation planning.",
      features: [
        "Security Strategy Development",
        "Risk Assessment & Management",
        "Compliance Consulting",
        "Security Training & Workshops",
        "Incident Response Planning",
      ],
      pricing: "$150/hour",
    },
    {
      icon: Zap,
      title: "DevSecOps Integration",
      description: "Integrate security practices into your development and deployment pipeline.",
      features: [
        "CI/CD Security Integration",
        "Automated Security Testing",
        "Container Security",
        "Infrastructure as Code Security",
        "Security Monitoring Setup",
      ],
      pricing: "Starting at $3,000",
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive cybersecurity training for development teams.",
      features: [
        "Secure Coding Practices",
        "OWASP Top 10 Training",
        "Security Awareness Sessions",
        "Hands-on Workshops",
        "Custom Training Programs",
      ],
      pricing: "$200/hour per session",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative">
            <MatrixRain />
      {/* Navigation */}
      <nav className="border-b border-green-400/30 p-4">
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
            <Link href="/services" className="text-green-300">
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

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Services & Solutions</h1>
          <div className="text-green-300 mb-6">$ systemctl list-units --type=service</div>
          <p className="text-green-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity and development services to protect and enhance your digital assets. From
            penetration testing to secure application development, I provide end-to-end security solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="border border-green-400/30 p-6 hover:border-green-400 transition-colors">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              <p className="text-green-300 mb-4">{service.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-1 text-sm text-green-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-green-400/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-300">{service.pricing}</span>
                  <Button size="sm" className="bg-green-400 text-black hover:bg-green-300">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="border border-green-400/30 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">My Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-green-300 text-sm">
                Understanding your requirements, goals, and current security posture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-green-300 text-sm">
                Developing a comprehensive strategy and timeline for your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-green-300 text-sm">
                Implementing solutions with regular updates and transparent communication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 border border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Delivery</h3>
              <p className="text-green-300 text-sm">Providing detailed documentation and ongoing support as needed.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="border border-green-400/30 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose My Services?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-green-300">Unique Dual Expertise</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Combined development and security background
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Understanding of both attack and defense perspectives
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Practical, real-world security solutions
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-green-300">Quality Assurance</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Thorough testing and validation processes
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Detailed documentation and reporting
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5" />
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center border border-green-400/30 p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
          <p className="text-green-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your security needs and how I can help protect and enhance your applications and
            infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-400 text-black hover:bg-green-300">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
