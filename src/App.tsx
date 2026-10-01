import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Code, Globe, Briefcase } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'HTML5 semantic markup and responsive layout',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    link: '#',
    image: 'https://www.cloudnetindia.com/images/HTML5-1.png'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Modern CSS3 animations and flexbox layouts',
    tech: ['CSS3', 'Flexbox', 'Animations'],
    link: '#',
    image: 'https://banner2.kisspng.com/20180421/vdq/kisspng-css3-cascading-style-sheets-logo-html-markup-langu-5adbf15c141187.7175103915243636120822.jpg'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Interactive JavaScript functionality and DOM manipulation',
    tech: ['JavaScript', 'ES6+', 'DOM API'],
    link: '#',
    image: 'https://www.gesformacion.edu.es/img/course/247/curso-javascript.jpg'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Full-stack integration with modern tooling',
    tech: ['React', 'Node.js', 'API Integration'],
    link: '#',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIFpn9Yxd0IitFTJl4hvsXc8-GmHjoeACxkpXGVKL1XGRelGt'
  }
]

const skills = [
  { name: 'HTML5', icon: Code, color: 'text-orange-500' },
  { name: 'CSS3', icon: Globe, color: 'text-blue-500' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
  { name: 'React', icon: Code, color: 'text-cyan-500' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
  { name: 'Git', icon: Briefcase, color: 'text-orange-600' },
  { name: 'Responsive Design', icon: Globe, color: 'text-green-500' },
  { name: 'Performance', icon: Briefcase, color: 'text-purple-500' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-primary-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://image.ibb.co/jVeP4S/udacity_logo.png"
              alt="Udacity logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-primary-700 hover:text-primary-900 font-medium transition-colors">Work</a>
            <a href="#skills" className="text-primary-700 hover:text-primary-900 font-medium transition-colors">Skills</a>
            <a href="#contact" className="text-primary-700 hover:text-primary-900 font-medium transition-colors">Contact</a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200" id="mobile-menu">
            <div className="space-y-2">
              <a href="#projects" className="block px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Work</a>
              <a href="#skills" className="block px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 tracking-tight">
            LOKESH GOUNDER
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-primary-600 font-medium">
            FRONT-END WEB DEVELOPER
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="https://github.com/LOKESH10796"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lokesh-gounder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-300 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900">Featured Work</h2>
          <p className="mt-4 text-lg text-primary-600 max-w-2xl mx-auto">
            Selected projects showcasing modern front-end development practices
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-primary-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden bg-primary-50">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{project.title}</h3>
                <p className="text-primary-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-accent-500 font-medium hover:text-accent-600 transition-colors"
                >
                  View Project
                  <Code className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900">Skills & Technologies</h2>
          <p className="mt-4 text-lg text-primary-600 max-w-2xl mx-auto">
            Proficient in modern front-end development tools and practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 group-hover:bg-accent-100 transition-colors duration-300">
                <skill.icon className={`h-6 w-6 ${skill.color}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-900">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-primary-600">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-y"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3 px-6 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-green-600 font-medium" role="status">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <a
            href="https://github.com/LOKESH10796"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors"
          >
            <Github className="h-8 w-8" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="mailto:lokesh@example.com"
            className="inline-flex flex-col items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors"
          >
            <Mail className="h-8 w-8" />
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/lokesh-gounder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors"
          >
            <Linkedin className="h-8 w-8" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lokesh Gounder. Built with React 19, Vite, TypeScript & Tailwind.</p>
        <p className="mt-2 text-sm text-primary-400">
          <a href="https://github.com/LOKESH10796" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 underline">
            View Source
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {isLoaded && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `
          }}
        />
      )}
    </div>
  )
}