"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "education", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Facundo
                  <br />
                  <span className="text-muted-foreground">Zin</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer enfocado en el desarrollo de sistemas
                  <span className="text-foreground"> escalables</span>, integración de
                  <span className="text-foreground"> LLMs</span> y construcción de aplicaciones
                  <span className="text-foreground"> AINative</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Disponible para proyectos
                  </div>
                  <div>Argentina</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-border shadow-lg hover:shadow-xl transition-shadow duration-500">
                <img
                  src="/profile.jpg"
                  alt="Facundo Zin"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 w-full">
                <div className="text-sm text-muted-foreground font-mono">ACTUALMENTE</div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Engineer</div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M9 21V11h6v10M9 7h.01M12 7h.01M15 7h.01M9 11h.01M15 11h.01" />
                    </svg>
                    Syntrax Software
                  </div>
                  <div className="text-xs text-muted-foreground">2025 — Presente</div>
                </div>
              </div>

              <div className="space-y-4 w-full">
                <div className="text-sm text-muted-foreground font-mono">STACK</div>
                <div className="flex flex-wrap gap-2">
                  {["C#", ".NET", "TypeScript", "NestJS", "React", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experiencia & Proyectos</h2>
              <div className="text-sm text-muted-foreground font-mono">2024 — 2026</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "Software Engineer",
                  company: "Syntrax Software",
                  type: "trabajo",
                  description:
                    "Lidero el ciclo de vida completo de proyectos: desde el relevamiento hasta producción. Diseño arquitecturas modulares con DDD, implemento CI/CD con Docker y GitHub Actions, y aplico metodologías AINative como SDD para acelerar el desarrollo sin comprometer la calidad.",
                  tech: ["C#", ".NET", "Docker", "GitHub Actions", "DDD", "SDD"],
                },
                {
                  year: "2025",
                  role: "AI Integrator",
                  company: "SSI Technologies",
                  type: "trabajo",
                  description:
                    "Diseñé y desarrollé agentes de IA para automatización de flujos productivos con n8n. Implementé bases de datos vectoriales (Pinecone), ingeniería avanzada de prompts y flujos integrados con webhooks, Firestore y cloud functions.",
                  tech: ["n8n", "Pinecone", "LLMs", "Prompt Engineering", "RAG"],
                },
                {
                  year: "2025",
                  role: "Becario de Sistemas",
                  company: "UTN",
                  type: "trabajo",
                  description:
                    "Desarrollé un sistema web para la gestión integral de convenios institucionales. Relevé requisitos con stakeholders, implementé gestión documental, alertas de vencimiento y flujos de actualización de datos.",
                  tech: ["TypeScript", "NestJS", "React", "PostgreSQL"],
                },
                {
                  year: "2025",
                  role: "ASOCIARG",
                  company: "Proyecto personal",
                  type: "proyecto",
                  description:
                    "Plataforma para la gestión integral de asociaciones civiles. Módulos de socios, viajes, cobros, reservas, portal de pagos e integración con Mercado Pago, WhatsApp y ARCA. Arquitectura monolítica y modular lista para deploy en VPS con Docker.",
                  tech: ["C#", ".NET", "DDD", "Docker", "Mercado Pago", "Multi-tenant"],
                },
                {
                  year: "2024",
                  role: "Rappi Delivery App",
                  company: "Proyecto académico",
                  type: "proyecto",
                  description:
                    "Backend monolítico y modular para la materia Metodología de Sistemas 2. Incluye autenticación, roles, gestión de restaurantes, pedidos, carrito y soporte. Documentado con diagramas UML.",
                  tech: ["TypeScript", "NestJS", "PostgreSQL", "JWT", "UML"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2 space-y-1">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {item.year}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
                      {item.type === "proyecto" ? "proyecto" : "empleo"}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{item.role}</h3>
                      <div className="text-muted-foreground">{item.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{item.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0 content-start">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Educacion</h2>
              <div className="text-sm text-muted-foreground font-mono">2022 — Presente</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  period: "2022 — Presente",
                  degree: "Tecnicatura Universitaria en Programacion",
                  institution: "Universidad Tecnologica Nacional",
                  location: "Villa Maria, Cordoba",
                  status: "En curso",
                  description:
                    "Formacion tecnica universitaria con enfasis en desarrollo de software, bases de datos, arquitectura de sistemas y metodologias de desarrollo. Actualmente realizando beca de sistemas en la institucion.",
                },
                {
                  period: "2023",
                  degree: "Certificacion Full Stack",
                  institution: "EducacionIT",
                  location: "Modalidad online",
                  status: "Completado",
                  description:
                    "Programa intensivo de desarrollo full stack abarcando frontend, backend y bases de datos relacionales. Fundamentos practicos que complementaron la formacion universitaria.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2 space-y-1">
                    <div className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 leading-relaxed">
                      {item.period}
                    </div>
                    <div
                      className={`text-xs font-mono uppercase tracking-wider ${
                        item.status === "En curso"
                          ? "text-green-500"
                          : "text-muted-foreground/60"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{item.degree}</h3>
                      <div className="text-muted-foreground">{item.institution}</div>
                      <div className="text-xs text-muted-foreground/60 mt-0.5">{item.location}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{item.description}</p>
                  </div>

                  <div className="lg:col-span-3 flex items-start lg:justify-end mt-2 lg:mt-0">
                    <svg
                      className="w-5 h-5 text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Pensamientos</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "The Future of Web Development",
                  excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Design Systems at Scale",
                  excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Performance-First Development",
                  excerpt: "Why performance should be a first-class citizen in your development workflow.",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "The Art of Code Review",
                  excerpt: "Building better software through thoughtful and constructive code reviews.",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Hablemos</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Abierto a nuevas oportunidades, colaboraciones y conversaciones sobre tecnología e IA.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:zinf816@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">zinf816@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ENCUENTRAME EN</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GitHub */}
                <Link
                  href="https://github.com/FacundoZin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github/light.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div>
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">GitHub</div>
                      <div className="text-sm text-muted-foreground">@FacundoZin</div>
                    </div>
                  </div>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/facundo-zin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/linkedin/default.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div>
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Facundo Zin</div>
                    </div>
                  </div>
                </Link>

                {/* Gmail */}
                <Link
                  href="mailto:zinf816@gmail.com"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gmail/default.svg"
                      alt="Gmail"
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div>
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">Gmail</div>
                      <div className="text-sm text-muted-foreground">zinf816@gmail.com</div>
                    </div>
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/543564653136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/default.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div>
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+54 3564 653136</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Felix Macaspac. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Felix Macaspac</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
