import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AboutContent from "./AboutContent";
import "./OscarPortafolio.css";

type ClientProject = { name: string; description: string; highlights?: string[]; url?: string };
type ProjectLink = { label: string; url: string };

type WorkItem = {
  id: number;
  title: string;
  role: string;
  stack: string;
  color: string;
  summary: string;
  url?: string;
  clients?: ClientProject[];
  highlights?: string[];
  links?: ProjectLink[];
};

const myWork: WorkItem[] = [
  {
    id: 1,
    title: "Opieka S.A.S.",
    role: "Developer Consultant — Desarrollador Fullstack (nov. 2024 – jun. 2025)",
    stack: "Angular · React · Express.js · PostgreSQL · Docker",
    color: "var(--color-teal)",
    summary:
      "Desarrollé aplicaciones web fullstack para clientes empresariales de Opieka en entorno de desarrollo. Fui el punto de contacto directo del cliente para Beneficiate, construí el sitio de CUIDAME PETS cuando el equipo dividió esa plataforma en dos, y resolví una caída crítica de backend en Seggu migrando su infraestructura de Railway a Google Cloud.",
    clients: [
      {
        name: "Beneficiate",
        description: "Agendamiento de citas entre paciente y especialista, con gestión de beneficiarios y planes.",
        highlights: [
          "Construí más de 10 vistas: registro, login, recuperación de contraseña, agendamiento y gestión de beneficiarios y planes.",
          "Agregué un servicio de envío de correos en el backend para solicitudes de colaboración con la empresa.",
          "Pasé a ser el punto de contacto directo del cliente, resolviendo incidencias de diseño y de flujo.",
          "Propuse un filtro por especialidad médica para mejorar la búsqueda de doctores.",
        ],
        url: "https://beneficiate.co/",
      },
      {
        name: "Cuídame Health / Cuídame Pets",
        description: "Sitio informativo y tienda online, tras dividir CUIDAME en dos plataformas independientes.",
        highlights: [
          "Cuando el equipo dividió CUIDAME en Health y Pets, construí el sitio de CUIDAME PETS: inicio, soluciones, tienda y oportunidades laborales.",
        ],
        url: "https://doc.cuidame.tech/",
      },
      {
        name: "Seggu",
        description: "Consultoría de seguros catastrales.",
        highlights: ["Resolví una caída crítica del backend migrando base de datos y servidor de Railway a Google Cloud."],
        url: "https://holaseggu.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Quyca",
    role: "DevOps y Desarrollador Fullstack (en solitario) — Proyecto de grado, activo como proyecto personal",
    stack: "React · TypeScript · NestJS · Prisma · PostgreSQL · Redis · Docker · Azure · GitHub Actions",
    color: "var(--color-rust)",
    summary:
      "SaaS multi-tenant para instituciones educativas colombianas, nacido como galería de arte para el grupo de arte de la Universidad Santo Tomás. Gestión de grupos, calendario de eventos, editor de lecciones con capítulos y portafolios públicos de artistas.",
    highlights: [
      "Arquitectura multi-tenant: aislamiento de datos por institución inyectado automáticamente en cada consulta vía una extensión de Prisma, con fallo cerrado (403) si no hay tenant resuelto.",
      "Sistema de roles (RBAC) con 6 roles de contexto — menú y guards derivados del mismo predicado para que no se desincronicen.",
      "Editor de lecciones y capítulos con reordenamiento drag-and-drop, calendario de eventos y portafolios públicos de artistas.",
      "CI/CD con GitHub Actions y despliegue en Azure; backend documentado con Swagger y probado con Postman/Newman.",
    ],
    links: [
      { label: "Repositorio cliente", url: "https://github.com/OscarCardozoDev/QuycaClient" },
      { label: "Repositorio servidor", url: "https://github.com/OscarCardozoDev/QuycaServer" },
    ],
  },
  {
    id: 3,
    title: "arpIA — CodeFest Ad Astra",
    role: "Backend y RAG — Hackathon en equipo (USTACODE)",
    stack: "Python · FastAPI · FAISS · BGE-M3 · LiteLLM/Bedrock · Docker",
    color: "var(--color-mustard)",
    summary:
      "Asistente conversacional multiagente para consultar un corpus sobre IA en entornos militares, seguridad espacial/LEO y dinámicas territoriales en América Latina, construido en equipo para el hackathon CodeFest Ad Astra.",
    highlights: [
      "Trabajé en el backend y el pipeline RAG: orquestador, especialista RAG y guardián de seguridad sobre un cliente LLM compartido (gpt-oss-20b vía LiteLLM/Bedrock).",
      "Búsqueda vectorial sobre 205.515 fragmentos con FAISS (IndexFlatIP) y embeddings BGE-M3.",
      "Contrato de respuesta con evidencia citada, metadata de tokens/latencia y reintentos controlados ante fallos del LLM.",
    ],
    links: [{ label: "Ver repositorio", url: "https://github.com/Wissen01720/codefest-ad-astra" }],
  },
];

const dict = {
  es: {
    tagline: "Siempre en busca de nuevos desafíos que me obliguen a mejorar como ingeniero y persona.",
    philosophy: "Creo en construir con cuidado: cada detalle de una interfaz comunica algo, y vale la pena tomarse el tiempo de acertarlo.",
    bio: "Ingeniero de Sistemas graduado de la Universidad Santo Tomás, apasionado por la infraestructura tecnológica, la gestión de datos y la resolución de problemas complejos. Cuento con base teórica y práctica en desarrollo de software fullstack, optimización de consultas SQL, modelado de datos y uso de herramientas de monitoreo en entornos de desarrollo, además de fundamentos en Cloud Computing (Microsoft Azure). Destaco por mi capacidad de aprendizaje continuo y adaptabilidad a nuevos entornos —demostrada durante mi intercambio académico en Corea del Sur—, el trabajo en equipo y la comunicación asertiva. Ganador de múltiples hackathons y ponente en congresos de investigación, lo que respalda mi enfoque proactivo y orientado a resultados.",
    contactLine1: "¿Tienes alguna",
    contactLine2: "duda?",
    contactCta: "Contáctame",
    contactExtra: "Respondo mensajes de lunes a viernes. Cuéntame en qué estás trabajando.",
    closeLabel: "Cerrar",
    liveLink: "Ver proyecto en vivo",
    langBtn: "EN",
    roleLabel: "Rol",
    stackLabel: "Stack",
    headerRoleLabel: "Rol actual",
    headerRole: "Ingeniero de sistemas · Desarrollador Fullstack",
    headerPitch: "Construyo aplicaciones web de punta a punta, desde la infraestructura y el backend hasta el último detalle visual.",
    imageCaption: "Desde Tunja, Boyacá, Colombia.",
    skillsLabel: "Herramientas que uso",
    phoneLabel: "Teléfono",
  },
  en: {
    tagline: "Always chasing new challenges that push me to grow as an engineer and as a person.",
    philosophy: "I believe in building with care: every detail in an interface says something, and it is worth the time to get it right.",
    bio: "Systems Engineer graduated from Universidad Santo Tomás, passionate about technology infrastructure, data management and solving complex problems. I have theoretical and practical grounding in fullstack software development, SQL query optimization, data modeling and monitoring tools in development environments, plus cloud computing fundamentals (Microsoft Azure). I stand out for continuous learning and adaptability to new environments — proven during my academic exchange in South Korea — teamwork and assertive communication. Multiple-time hackathon winner and research congress speaker, which backs my proactive, results-driven approach.",
    contactLine1: "Got a",
    contactLine2: "question?",
    contactCta: "Contact me",
    contactExtra: "I reply to messages Monday through Friday. Tell me what you are working on.",
    closeLabel: "Close",
    liveLink: "View live project",
    langBtn: "ES",
    roleLabel: "Role",
    stackLabel: "Stack",
    headerRoleLabel: "Current role",
    headerRole: "Systems Engineer · Fullstack Developer",
    headerPitch: "I build web applications end to end, from infrastructure and backend down to the last visual detail.",
    imageCaption: "From Tunja, Boyacá, Colombia.",
    skillsLabel: "Tools I use",
    phoneLabel: "Phone",
  },
};

const T_SIBLINGS = 550;
const T_GROW = 750;
const T_CONTENT = 450;

// Each card hides/reappears with its own offset (like the load-in stagger)
// instead of all of them fading as one flat block.
const CARD_ORDER: Record<CardId, number> = { header: 0, phrase: 1, image: 2, work: 3, about: 4, contact: 5, social: 6 };
const STAGGER = 0.08; // seconds between each card's turn
const SIBLINGS_TOTAL = T_SIBLINGS + 6 * STAGGER * 1000;

type ExpandableId = "phrase" | "image" | "work" | "about" | "contact";
type CardId = ExpandableId | "header" | "social";
type Stage = "closing" | "growing" | "content-in" | "open" | "content-out" | "shrinking" | null;

// Callback ref (not useRef+useEffect) so the listener re-attaches correctly
// when a card's collapsed content unmounts/remounts across expand cycles.
function useMagicGlow<T extends HTMLElement>() {
  const cleanup = useRef<() => void>(() => {});
  return useCallback((el: T | null) => {
    cleanup.current();
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    cleanup.current = () => el.removeEventListener("mousemove", onMove);
  }, []);
}

function CircularBadge() {
  return (
    <div className="circularBadge">
      <svg viewBox="0 0 110 110">
        <defs>
          <path id="circlePath1" d="M 55,55 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
        </defs>
        <text fontFamily="Outfit, sans-serif" fontSize="8.3" letterSpacing="2" style={{ fill: "var(--color-text-muted)" }}>
          <textPath href="#circlePath1" startOffset="0%">
            DISPONIBLE PARA NUEVOS PROYECTOS • DISPONIBLE PARA NUEVOS PROYECTOS •{" "}
          </textPath>
        </text>
      </svg>
      <span className="circularBadgeCore">OC</span>
    </div>
  );
}

export default function OscarPortafolio(): React.ReactElement {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [expandedId, setExpandedId] = useState<ExpandableId | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [hoverProjectId, setHoverProjectId] = useState(1);
  const [stage, setStage] = useState<Stage>(null);
  const timers = useRef<number[]>([]);

  const t = dict[lang];

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  function openCard(id: ExpandableId) {
    if (expandedId) return;
    clearTimers();
    setExpandedId(id);
    setStage("closing");
    timers.current.push(
      window.setTimeout(() => setStage("growing"), SIBLINGS_TOTAL),
      window.setTimeout(() => setStage("content-in"), SIBLINGS_TOTAL + T_GROW),
      window.setTimeout(() => setStage("open"), SIBLINGS_TOTAL + T_GROW + T_CONTENT)
    );
  }

  function closeCard() {
    if (stage !== "open") return;
    clearTimers();
    setStage("content-out");
    timers.current.push(
      window.setTimeout(() => setStage("shrinking"), T_CONTENT),
      window.setTimeout(() => {
        setStage(null);
        setExpandedId(null);
        setActiveProjectId(null);
      }, T_CONTENT + T_GROW)
    );
  }

  function openProject(id: number) {
    setActiveProjectId(id);
    openCard("work");
  }

  const cardTransition = (id: CardId) => ({
    layout: { duration: T_GROW / 1000, ease: [0.2, 0.7, 0.3, 1] as const },
    default: { duration: T_SIBLINGS / 1000, delay: CARD_ORDER[id] * STAGGER },
  });

  const cardState = (id: ExpandableId) => {
    const isExpanding = expandedId === id;
    const isHidden = expandedId !== null && expandedId !== id;
    const wantFull = isExpanding && stage !== "closing" && stage !== "shrinking" && stage !== null;
    const showContent = isExpanding && (stage === "content-in" || stage === "open");
    return { isExpanding, isHidden, wantFull, showContent };
  };

  const headerGlow = useMagicGlow<HTMLElement>();
  const phraseGlow = useMagicGlow<HTMLElement>();
  const imageGlow = useMagicGlow<HTMLElement>();
  const aboutGlow = useMagicGlow<HTMLElement>();
  const contactGlow = useMagicGlow<HTMLElement>();
  const socialGlow = useMagicGlow<HTMLElement>();

  const activeProject = myWork.find((p) => p.id === activeProjectId) ?? null;

  return (
    <div className="parent bg-bg" data-theme={dark ? "dark" : undefined}>
      {expandedId && <div className="scrim" onClick={closeCard} />}

      <motion.header
        ref={headerGlow}
        className="card headerOscar bg-surface text-text magicCard"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: expandedId ? 0 : 1, scale: expandedId ? 0 : 1 }}
        transition={{ duration: T_SIBLINGS / 1000, delay: CARD_ORDER.header * STAGGER }}
        style={{ pointerEvents: expandedId ? "none" : "auto" }}
      >
        <span className="magicGlow" />
        <h1 className="headerName">Oscar Javier Cardozo Diaz</h1>
        <div className="headerControls">
          <button type="button" className="pillBtn" onClick={() => setLang(lang === "es" ? "en" : "es")}>
            {t.langBtn}
          </button>
          <button
            type="button"
            className="iconBtn"
            aria-label={dark ? "Modo claro" : "Modo oscuro"}
            onClick={() => setDark((d) => !d)}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>
            )}
          </button>
        </div>
      </motion.header>

      {(() => {
        const s = cardState("phrase");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("phrase")}
            animate={{ opacity: s.isHidden ? 0 : 1, scale: s.isHidden ? 0 : 1 }}
            className={`card phraseContainer bg-surface text-text magicCard ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
            onClick={() => !expandedId && openCard("phrase")}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="cardInner" exit={{ opacity: 0 }} ref={phraseGlow}>
                  <span className="magicGlow" />
                  <CircularBadge />
                  <p className="tagline">{t.tagline}</p>
                </motion.div>
              ) : (
                <motion.div key="expanded" className="panel" initial={{ opacity: 0 }} animate={{ opacity: s.showContent ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: T_CONTENT / 1000 }}>
                  <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={(e) => { e.stopPropagation(); closeCard(); }}>✕</button>
                  <h2 className="panelHeading">{t.tagline}</h2>
                  <p className="panelBody">{t.philosophy}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      {(() => {
        const s = cardState("image");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("image")}
            animate={{ opacity: s.isHidden ? 0 : 1, scale: s.isHidden ? 0 : 1 }}
            className={`card imageContainer bg-surface magicCard ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
            onClick={() => !expandedId && openCard("image")}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="cardInner" exit={{ opacity: 0 }} ref={imageGlow}>
                  <img className="photo" src="/photo.jpg" alt="Oscar Cardozo" />
                  <span className="magicGlow" />
                </motion.div>
              ) : (
                <motion.div key="expanded" className="panel" initial={{ opacity: 0 }} animate={{ opacity: s.showContent ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: T_CONTENT / 1000 }}>
                  <img className="photo" src="/bg.jpg" alt="Oscar Cardozo" />
                  <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={(e) => { e.stopPropagation(); closeCard(); }}>✕</button>
                  <p className="imageCaption">{t.imageCaption}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      {(() => {
        const s = cardState("work");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("work")}
            animate={{ opacity: s.isHidden ? 0 : 1, scale: s.isHidden ? 0 : 1 }}
            className={`card myWork bg-surface text-text ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="accordion" exit={{ opacity: 0 }}>
                  {myWork.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`accordionRow ${p.id === hoverProjectId ? "open" : ""}`}
                      style={{ background: p.color }}
                      onMouseEnter={() => setHoverProjectId(p.id)}
                      onClick={() => openProject(p.id)}
                    >
                      <span className="sheen" />
                      <span className="expandBtn" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f2e6cc" strokeWidth="2.5"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></svg>
                      </span>
                      <span className="accordionLabel">{p.title}</span>
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="expanded" className="panel workPanel" initial={{ opacity: 0 }} animate={{ opacity: s.showContent ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: T_CONTENT / 1000 }}>
                  {activeProject && (
                    <>
                      <div className="workPanelHero" style={{ background: activeProject.color }}>
                        <h2 className="workPanelTitle">{activeProject.title}</h2>
                        <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={closeCard}>✕</button>
                      </div>
                      <div className="workPanelBody">
                        <p className="panelLine">{t.roleLabel}: {activeProject.role}</p>
                        <p className="panelLine">{t.stackLabel}: {activeProject.stack}</p>
                        <p className="panelBody">{activeProject.summary}</p>
                        {activeProject.highlights && (
                          <ul className="highlightList">
                            {activeProject.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        )}
                        {activeProject.clients && (
                          <div className="clientList">
                            {activeProject.clients.map((c) => (
                              <div className="clientItem" key={c.name}>
                                <span className="clientName">{c.name}</span>
                                <span className="clientDesc">{c.description}</span>
                                {c.highlights && (
                                  <ul className="highlightList">
                                    {c.highlights.map((h) => (
                                      <li key={h}>{h}</li>
                                    ))}
                                  </ul>
                                )}
                                {c.url && (
                                  <a className="clientLink" href={c.url} target="_blank" rel="noopener noreferrer">
                                    {c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {activeProject.url && (
                          <a className="liveLink" href={activeProject.url} target="_blank" rel="noopener noreferrer">
                            {t.liveLink}
                          </a>
                        )}
                        {activeProject.links && (
                          <div className="linkRow">
                            {activeProject.links.map((l) => (
                              <a key={l.url} className="liveLink" href={l.url} target="_blank" rel="noopener noreferrer">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      {(() => {
        const s = cardState("about");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("about")}
            animate={{ opacity: s.isHidden ? 0 : 1, scale: s.isHidden ? 0 : 1 }}
            className={`card aboutMe bg-surface text-text magicCard ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
            onClick={() => !expandedId && openCard("about")}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="cardInner aboutInner" exit={{ opacity: 0 }} ref={aboutGlow}>
                  <span className="magicGlow" />
                  <p className="aboutText">
                    {t.bio}
                  </p>
                </motion.div>
              ) : (
                <motion.div key="expanded" className="panel aboutPanel" initial={{ opacity: 0 }} animate={{ opacity: s.showContent ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: T_CONTENT / 1000 }}>
                  <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={(e) => { e.stopPropagation(); closeCard(); }}>✕</button>
                  <AboutContent />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      {(() => {
        const s = cardState("contact");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("contact")}
            animate={{ opacity: s.isHidden ? 0 : 1, scale: s.isHidden ? 0 : 1 }}
            className={`card contactMe bg-surface text-text magicCard ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
            onClick={() => !expandedId && openCard("contact")}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="cardInner contactInner" exit={{ opacity: 0 }} ref={contactGlow}>
                  <span className="magicGlow" />
                  <div className="arriba">
                    <h3>{t.contactLine1}<br />{t.contactLine2}</h3>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" style={{ transform: "rotate(45deg)" }}><path d="M5 19 19 5M19 5H9M19 5v10" /></svg>
                  </div>
                  <a className="cta" href="#" onClick={(e) => e.stopPropagation()}>{t.contactCta}</a>
                </motion.div>
              ) : (
                <motion.div key="expanded" className="panel" initial={{ opacity: 0 }} animate={{ opacity: s.showContent ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: T_CONTENT / 1000 }}>
                  <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={(e) => { e.stopPropagation(); closeCard(); }}>✕</button>
                  <h2 className="panelHeading">{t.contactCta}</h2>
                  <p className="panelLine">Email: oscar@example.com</p>
                  <p className="panelLine">{t.phoneLabel}: +57 300 000 0000</p>
                  <p className="panelBody">{t.contactExtra}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      <motion.section
        ref={socialGlow}
        className="card socialMedia bg-surface text-text magicCard"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: expandedId ? 0 : 1, scale: expandedId ? 0 : 1 }}
        transition={{ duration: T_SIBLINGS / 1000, delay: CARD_ORDER.social * STAGGER }}
        style={{ pointerEvents: expandedId ? "none" : "auto" }}
      >
        <span className="magicGlow" />
        <nav>
          <a className="socialLink" href="https://www.linkedin.com/in/oscar-javier-cardozo-diaz-baa952205/">Linkedin</a>
          <a className="socialLink" href="https://github.com/OscarCardozoDev">GitHub</a>
          <a className="socialLink" href="https://www.instagram.com/tipodelmonton/?hl=es-la">Instagram</a>
        </nav>
      </motion.section>
    </div>
  );
}
