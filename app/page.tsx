"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import Terminal from "../components/Terminal"


export default function Home() {
  const email = "facundozin10@gmail.com"
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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
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
                  <span className="text-foreground"> AI Native </span>
                   Software Engineer enfocado en el desarrollo de sistemas
                  <span className="text-foreground"> escalables</span>, integración de
                  <span className="text-foreground"> LLMs</span> y construcción de aplicaciones y
                  <span className="text-foreground"> Sistemas Empresariales</span>
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Búsqueda activa de nuevas oportunidades
                  </div>
                  <div>Argentina</div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="/cv/cv-facundozin-es.pdf"
                    download="CV-Facundo-Zin-ES.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/50 rounded-md transition-all duration-300 bg-muted/5 hover:bg-muted/10 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar CV (ES)</span>
                  </a>
                  <a
                    href="/cv/cv-facundozin-en.pdf"
                    download="CV-Facundo-Zin-EN.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/50 rounded-md transition-all duration-300 bg-muted/5 hover:bg-muted/10 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV (EN)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="relative">
                {/* Animated Thorny Devil Mascot (Claude Code Style) */}
                <div className="absolute -top-[34px] left-[55px] sm:left-[80px] z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(64,196,99,0.2)]">
                    <style>{`
                      @keyframes tail-wag {
                        0%, 100% { transform: rotate(0deg); }
                        50% { transform: rotate(12deg); }
                      }
                      @keyframes head-bob {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-0.8px); }
                      }
                      .wag { animation: tail-wag 1.5s ease-in-out infinite; transform-origin: 6px 14px; }
                      .bob { animation: head-bob 2s ease-in-out infinite; }
                    `}</style>
                    {/* Tail */}
                    <path d="M 6 14 Q 2 15 3 10" stroke="#40c463" strokeWidth="2.5" strokeLinecap="round" className="wag" />
                    {/* Legs */}
                    <rect x="7" y="15" width="2" height="3" fill="#2d8744" rx="0.5" />
                    <rect x="12" y="15" width="2" height="3" fill="#2d8744" rx="0.5" />
                    {/* Body */}
                    <rect x="6" y="10" width="9" height="6" rx="2" fill="#40c463" />
                    {/* Spikes / Thorns */}
                    <path d="M 8 10 L 9 7 L 10 10" fill="#f59e0b" />
                    <path d="M 11 10 L 12 7 L 13 10" fill="#f59e0b" />
                    {/* Head */}
                    <g className="bob">
                      <rect x="13" y="8" width="6" height="6" rx="1.5" fill="#40c463" />
                      <path d="M 15 8 L 16 5 L 17 8" fill="#f59e0b" />
                      {/* Eye */}
                      <circle cx="17" cy="10.5" r="0.8" fill="black" />
                      <circle cx="17.2" cy="10.2" r="0.3" fill="white" />
                    </g>
                  </svg>
                </div>

                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-border shadow-lg hover:shadow-xl transition-shadow duration-500 relative">
                  <img
                    src="/profile.jpg"
                    alt="Facundo Zin"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                  link: {
                    url: "https://www.asociarg.cloud/",
                    label: "Sitio Web",
                    type: "external",
                  },
                },
                {
                  year: "2025",
                  role: "AFRelay",
                  company: "Contribución Open Source",
                  type: "proyecto",
                  description:
                    "Diseñé e implementé una arquitectura multi-client y persistencia en base de datos para este middleware de facturación de ARCA. Reemplacé el almacenamiento  de certificados en firestore por PostgreSQL con cifrado para claves privadas, y refactoricé los endpoints para la resolución dinámica de credenciales por CUIT.",
                  tech: ["Python", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "Cryptography"],
                  link: {
                    url: "https://github.com/FacundoZin/AFRelay",
                    label: "GitHub",
                    type: "github",
                  },
                },
                {
                  year: "2024",
                  role: "Rappi Delivery App",
                  company: "Proyecto académico",
                  type: "proyecto",
                  description:
                    "Backend monolítico y modular para la materia Metodología de Sistemas 2. Incluye autenticación, roles, gestión de restaurantes, pedidos, carrito y soporte. Documentado con diagramas UML.",
                  tech: ["TypeScript", "NestJS", "PostgreSQL", "JWT", "UML"],
                  link: {
                    url: "https://github.com/FacundoZin/TP-Rappi-Metodolog-aDeSistemas-",
                    label: "GitHub",
                    type: "github",
                  },
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
                    {item.link && (
                      <div className="pt-1">
                        <Link
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/50 rounded-md transition-all duration-300 bg-muted/5 hover:bg-muted/10"
                        >
                          {item.link.type === "github" ? (
                            <Github className="w-3.5 h-3.5" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5" />
                          )}
                          <span>{item.link.label}</span>
                        </Link>
                      </div>
                    )}
                  </div>


                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0 content-start">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Contributions & Stats */}
            <div className="pt-16 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-light">Actividad en GitHub</h3>
                <Link
                  href="https://github.com/FacundoZin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  VER PERFIL →
                </Link>
              </div>

              <div className="space-y-6">
                {/* Calendario de contribuciones (cuadraditos) */}
                <div className="p-6 border border-border rounded-lg bg-muted/5 space-y-4">
                  <div className="text-sm font-mono text-muted-foreground">Contribuciones</div>
                  <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
                    <img
                      src="https://ghchart.rshah.org/40c463/FacundoZin"
                      alt="GitHub Contributions Calendar"
                      className="min-w-[700px] w-full"
                    />
                  </div>
                </div>

                {/* Grid de Estadísticas */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 border border-border rounded-lg bg-muted/5 flex items-center justify-center">
                    <img
                      src="https://github-readme-stats-sigma-five.vercel.app/api?username=FacundoZin&show_icons=true&theme=onedark&hide_border=true&bg_color=00000000"
                      alt="GitHub Stats"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="p-6 border border-border rounded-lg bg-muted/5 flex items-center justify-center">
                    <img
                      src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=FacundoZin&layout=compact&theme=onedark&hide_border=true&bg_color=00000000"
                      alt="Top Languages"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="pt-10 sm:pt-16 pb-20 sm:pb-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Educacion</h2>
              <div className="text-sm text-muted-foreground font-mono">2022 — Presente</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  period: "2024 — 2026",
                  degree: "Tecnicatura Universitaria en Programacion",
                  institution: "Universidad Tecnologica Nacional",
                  location: "San Francisco, Cordoba",
                  status: "Completado",
                  description:
                    "Formacion tecnica universitaria con enfasis en desarrollo de software, bases de datos, arquitectura de sistemas y metodologias de desarrollo. Actualmente realizando el trabajo final integrador de la carrera",
                },
                {
                  period: "Presente",
                  degree: "Ingenieria en Sistemas",
                  institution: "Universidad Tecnologica Nacional",
                  location: "San Francisco, Cordoba",
                  status: "En curso",
                  description:
                    "Carrera universitaria con enfoque en el diseño, desarrollo y gestion de sistemas de informacion. Integrando conocimientos de organizacion y negocios con arquitectura de software, bases de datos, inteligencia artificial y metodologias de desarrollo.",
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
            <h2 className="text-3xl sm:text-4xl font-light">Publicaciones</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Arquitectura Multi-tenant en SaaS: ¿Aislamiento por Software o por Infraestructura?",
                  excerpt: "Una decisión de arquitectura clave en ASOCIARG fue cómo diseñar el multi-tenancy. Analizo las ventajas y desventajas de las distintas estrategias de aislamiento de datos.",
                  date: "Hace 1 hora",
                  readTime: "3 min",
                  link: "https://www.linkedin.com/posts/facundozin_softwarearchitecture-multitenant-saas-share-7484280636321513472-GbNW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA9M5sBICaPx3E6MWfqH_76HBjiVPDXzPM",
                },
                {
                  title: "Gentle AI: Potenciando el Desarrollo Asistido por Agentes de IA",
                  excerpt: "Descubrí cómo estructurar y potenciar el flujo de desarrollo con agentes de IA usando Gentle AI, Spec-Driven Development (SDD), Engram y CodeGraph.",
                  date: "Hace 4 días",
                  readTime: "4 min",
                  link: "https://www.linkedin.com/feed/update/urn:li:activity:7483529244657061888/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA9M5sBICaPx3E6MWfqH_76HBjiVPDXzPM",
                },
                {
                  title: "Integración automática con Mercado Pago dentro de ASOCIARG",
                  excerpt: "Implementamos el flujo OAuth de Mercado Pago para lograr una vinculación de cuentas al instante, eliminando configuraciones manuales complejas para los usuarios.",
                  date: "Hace 2 meses",
                  readTime: "2 min",
                  link: "https://www.linkedin.com/posts/asociarg_mercadopago-fintech-asociarg-ugcPost-7452339909484322816-B-vy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA9M5sBICaPx3E6MWfqH_76HBjiVPDXzPM",
                },
                {
                  title: "El camino de seguir actualizando e impulsando ASOCIARG",
                  excerpt: "Emprender en tecnología es aceptar que nada está terminado. Comparto mis aprendizajes y la convicción detrás de la evolución de esta plataforma para instituciones civiles.",
                  date: "Hace 4 meses",
                  readTime: "2 min",
                  link: "https://www.linkedin.com/posts/facundozin_saas-startups-construyendo-ugcPost-7438335200511737856-SRqx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEA9M5sBICaPx3E6MWfqH_76HBjiVPDXzPM",
                },
              ].map((post, index) => (
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg block cursor-pointer"
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
                      <span>Leer en LinkedIn</span>
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
                </Link>
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
                  Abierto a nuevas oportunidades, proyectos y conversaciones.
                </p>

                <div className="space-y-4">
                  <Link
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">{email}</span>
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
                  href="https://www.linkedin.com/in/facundozin"
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

                <Link
                  href={`mailto:${email}`}
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
                      <div className="text-sm text-muted-foreground break-all">{email}</div>
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
              <div className="text-sm text-muted-foreground">© 2026 Facundo Zin. Todos los derechos reservados.</div>
              <div className="text-xs text-muted-foreground">Diseñado y desarrollado por Facundo Zin</div>
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
      <Terminal />
    </div>
  )
}
