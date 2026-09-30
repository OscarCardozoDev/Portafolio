import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import AboutContent from "./AboutContent";
import PersonalContent from "./PersonalContent";
import ContactContent from "./ContactContent";
import FlipCard from "../../components/react-bits/FlipCard";
import { LangContext, type T } from "./i18n";
import "./OscarPortafolio.css";

type ClientProject = { name: T; description: T; highlights?: T[]; url?: string };
type ProjectLink = { label: T; url: string };

type WorkItem = {
  id: number;
  title: string;
  role: T;
  stack: string;
  color: string;
  summary: T;
  url?: string;
  clients?: ClientProject[];
  highlights?: T[];
  links?: ProjectLink[];
};

const same = (s: string): T => ({ es: s, en: s });

const myWork: WorkItem[] = [
  {
    id: 1,
    title: "Opieka S.A.S.",
    role: {
      es: "Developer Consultant — Desarrollador Fullstack (nov. 2024 – jun. 2025)",
      en: "Developer Consultant — Fullstack Developer (Nov 2024 – Jun 2025)",
    },
    stack: "Angular · React · Express.js · PostgreSQL · Docker",
    color: "var(--color-teal)",
    summary: {
      es: "Desarrollé aplicaciones web fullstack para clientes empresariales de Opieka en entorno de desarrollo. Fui el punto de contacto directo del cliente para Beneficiate, construí el sitio de CUIDAME PETS cuando el equipo dividió esa plataforma en dos, y resolví una caída crítica de backend en Seggu migrando su infraestructura de Railway a Google Cloud.",
      en: "I built fullstack web applications for Opieka's enterprise clients in a development environment. I was the client's direct point of contact for Beneficiate, built the CUIDAME PETS site when the team split that platform in two, and fixed a critical backend outage at Seggu by migrating its infrastructure from Railway to Google Cloud.",
    },
    clients: [
      {
        name: same("Beneficiate"),
        description: {
          es: "Agendamiento de citas entre paciente y especialista, con gestión de beneficiarios y planes.",
          en: "Appointment scheduling between patients and specialists, with beneficiary and plan management.",
        },
        highlights: [
          {
            es: "Construí más de 10 vistas: registro, login, recuperación de contraseña, agendamiento y gestión de beneficiarios y planes.",
            en: "Built 10+ views: sign-up, login, password recovery, scheduling, and beneficiary and plan management.",
          },
          {
            es: "Agregué un servicio de envío de correos en el backend para solicitudes de colaboración con la empresa.",
            en: "Added a backend email service for collaboration requests to the company.",
          },
          {
            es: "Pasé a ser el punto de contacto directo del cliente, resolviendo incidencias de diseño y de flujo.",
            en: "Became the client's direct point of contact, resolving design and flow issues.",
          },
          {
            es: "Propuse un filtro por especialidad médica para mejorar la búsqueda de doctores.",
            en: "Proposed a medical-specialty filter to improve doctor search.",
          },
        ],
        url: "https://beneficiate.co/",
      },
      {
        name: same("Cuídame Health / Cuídame Pets"),
        description: {
          es: "Sitio informativo y tienda online, tras dividir CUIDAME en dos plataformas independientes.",
          en: "Informational site and online store, after splitting CUIDAME into two independent platforms.",
        },
        highlights: [
          {
            es: "Cuando el equipo dividió CUIDAME en Health y Pets, construí el sitio de CUIDAME PETS: inicio, soluciones, tienda y oportunidades laborales.",
            en: "When the team split CUIDAME into Health and Pets, I built the CUIDAME PETS site: home, solutions, store and job opportunities.",
          },
        ],
        url: "https://doc.cuidame.tech/",
      },
      {
        name: same("Seggu"),
        description: { es: "Consultoría de seguros catastrales.", en: "Cadastral insurance consulting." },
        highlights: [
          {
            es: "Resolví una caída crítica del backend migrando base de datos y servidor de Railway a Google Cloud.",
            en: "Fixed a critical backend outage by migrating the database and server from Railway to Google Cloud.",
          },
        ],
        url: "https://holaseggu.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Quyca",
    role: {
      es: "DevOps y Desarrollador Fullstack (en solitario) — Proyecto de grado, activo como proyecto personal",
      en: "DevOps and Fullstack Developer (solo) — Thesis project, still active as a personal project",
    },
    stack: "React · TypeScript · NestJS · Prisma · PostgreSQL · Redis · Docker · Azure · GitHub Actions",
    color: "var(--color-rust)",
    summary: {
      es: "SaaS multi-tenant para instituciones educativas colombianas, nacido como galería de arte para el grupo de arte de la Universidad Santo Tomás. Gestión de grupos, calendario de eventos, editor de lecciones con capítulos y portafolios públicos de artistas.",
      en: "Multi-tenant SaaS for Colombian educational institutions, born as an art gallery for the Universidad Santo Tomás art group. Group management, event calendar, lesson editor with chapters and public artist portfolios.",
    },
    highlights: [
      {
        es: "Arquitectura multi-tenant: aislamiento de datos por institución inyectado automáticamente en cada consulta vía una extensión de Prisma, con fallo cerrado (403) si no hay tenant resuelto.",
        en: "Multi-tenant architecture: per-institution data isolation injected automatically into every query through a Prisma extension, failing closed (403) when no tenant is resolved.",
      },
      {
        es: "Sistema de roles (RBAC) con 6 roles de contexto — menú y guards derivados del mismo predicado para que no se desincronicen.",
        en: "Role system (RBAC) with 6 context roles — menu and guards derived from the same predicate so they never drift apart.",
      },
      {
        es: "Editor de lecciones y capítulos con reordenamiento drag-and-drop, calendario de eventos y portafolios públicos de artistas.",
        en: "Lesson and chapter editor with drag-and-drop reordering, event calendar and public artist portfolios.",
      },
      {
        es: "CI/CD con GitHub Actions y despliegue en Azure; backend documentado con Swagger y probado con Postman/Newman.",
        en: "CI/CD with GitHub Actions and Azure deployment; backend documented with Swagger and tested with Postman/Newman.",
      },
    ],
    links: [
      { label: { es: "Repositorio cliente", en: "Client repository" }, url: "https://github.com/OscarCardozoDev/QuycaClient" },
      { label: { es: "Repositorio servidor", en: "Server repository" }, url: "https://github.com/OscarCardozoDev/QuycaServer" },
    ],
  },
  {
    id: 3,
    title: "arpIA — CodeFest Ad Astra",
    role: {
      es: "Frontend, integración con el backend y despliegue — Hackathon en equipo (USTACODE)",
      en: "Frontend, backend integration and deployment — Team hackathon (USTACODE)",
    },
    stack: "Frontend · Backend integration · Deploy",
    color: "var(--color-mustard)",
    summary: {
      es: "Asistente conversacional multiagente para consultar un corpus sobre IA en entornos militares, seguridad espacial/LEO y dinámicas territoriales en América Latina, construido en equipo para el hackathon CodeFest Ad Astra.",
      en: "Multi-agent conversational assistant to query a corpus on AI in military settings, space/LEO security and territorial dynamics in Latin America, built as a team for the CodeFest Ad Astra hackathon.",
    },
    highlights: [
      {
        es: "Ayudé con el frontend del asistente: la interfaz de chat donde se hacen las consultas y se leen las respuestas.",
        en: "Helped build the assistant's frontend: the chat interface where questions are asked and answers are read.",
      },
      {
        es: "Conecté el frontend con el backend del equipo.",
        en: "Connected the frontend to the team's backend.",
      },
      {
        es: "Desplegué el proyecto para que funcionara en vivo durante el pitch de la final.",
        en: "Deployed the project so it ran live during the final's pitch.",
      },
    ],
    links: [{ label: { es: "Ver repositorio", en: "View repository" }, url: "https://github.com/Wissen01720/codefest-ad-astra" }],
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
    skillsLabel: "Herramientas que uso",
    phoneLabel: "Teléfono",
    available: "DISPONIBLE PARA NUEVOS PROYECTOS",
    roleShort: "Ingeniero de Sistemas",
    darkLabel: "Modo oscuro",
    lightLabel: "Modo claro",
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
    skillsLabel: "Tools I use",
    phoneLabel: "Phone",
    available: "AVAILABLE FOR NEW PROJECTS",
    roleShort: "Systems Engineer",
    darkLabel: "Dark mode",
    lightLabel: "Light mode",
  },
};

const icon = (d: string) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oscar-javier-cardozo-diaz-baa952205/", icon: icon("M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z") },
  { label: "GitHub", href: "https://github.com/OscarCardozoDev", icon: icon("M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.6 0C6.9 2.6 5.8 3 5.8 3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 4.3 10.2c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22") },
  { label: "CV", href: "/Hoja_de_vida_Oscar_Cardozo_ATS_2026.pdf", icon: icon("M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5") },
];

const T_CENTER = 450;
const T_HOLD = 120;
const T_MOVE = 650;
const T_SIBLINGS = 550;
const T_GROW = 750;
const T_CONTENT = 450;
const T_RISE = 1100; // mobile intro: photo rises from below to the top, then settles into place
const T_SHEET = 500; // mobile modal: slides up from the bottom, back down on close

// Stacked (phone) layout breakpoint, kept in sync with OscarPortafolio.css.
const STACKED = "(max-width: 900px)";
function useStacked() {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(STACKED);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(STACKED).matches,
  );
}

// Each card hides/reappears with its own offset (like the load-in stagger)
// instead of all of them fading as one flat block.
const CARD_ORDER: Record<CardId, number> = { header: 0, phrase: 1, image: 2, work: 3, about: 4, contact: 5, social: 6 };
const STAGGER = 0.08; // seconds between each card's turn
const SIBLINGS_TOTAL = T_SIBLINGS + 6 * STAGGER * 1000;

type ExpandableId = "phrase" | "work" | "about" | "contact";
type CardId = ExpandableId | "header" | "image" | "social";
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

function CircularBadge({ text }: { text: string }) {
  return (
    <div className="circularBadge">
      <svg viewBox="0 0 110 110">
        <defs>
          <path id="circlePath1" d="M 55,55 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
        </defs>
        <text fontFamily="Outfit, sans-serif" fontSize="8.3" letterSpacing="2" style={{ fill: "var(--color-text-muted)" }}>
          {/* One lap, stretched to the path's circumference (2π·45 ≈ 282) so ES/EN both close the circle */}
          <textPath href="#circlePath1" startOffset="0%" textLength="280" lengthAdjust="spacingAndGlyphs">
            {text} •
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
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Live value drives the modal style; the intro style is fixed by the layout at load.
  const stacked = useStacked();
  const [introStacked] = useState(stacked);
  const [intro, setIntro] = useState<"center" | "moving" | "done">(reduced ? "done" : "center");
  // Desktop: x/y = offset from grid cell to screen center. Stacked: y = offset to screen top, from = offset from below the screen.
  const [offset, setOffset] = useState<{ x: number; y: number; from?: number } | null>(reduced ? { x: 0, y: 0 } : null);
  const [ready, setReady] = useState(reduced);
  const photoRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);

  useLayoutEffect(() => {
    const el = photoRef.current;
    if (!el || reduced) return;
    if (introStacked) {
      const top = el.offsetTop - window.scrollY; // offsetTop ignores the initial transform
      setOffset({ x: 0, y: 12 - top, from: window.innerHeight - top });
      return;
    }
    setOffset({
      x: window.innerWidth / 2 - (el.offsetLeft + el.offsetWidth / 2),
      y: window.innerHeight / 2 - (el.offsetTop + el.offsetHeight / 2),
    });
  }, [reduced, introStacked]);

  useEffect(() => {
    if (reduced || !offset) return;
    if (introStacked) {
      // Rest of the grid appears only once the photo has settled.
      const d = window.setTimeout(() => {
        setReady(true);
        setIntro("done");
      }, T_RISE);
      return () => window.clearTimeout(d);
    }
    const a = window.setTimeout(() => setIntro("moving"), T_CENTER + T_HOLD);
    const r = window.setTimeout(() => setReady(true), T_CENTER + T_HOLD + T_MOVE * 0.7);
    const b = window.setTimeout(() => setIntro("done"), T_CENTER + T_HOLD + T_MOVE);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(r);
      window.clearTimeout(b);
    };
  }, [reduced, offset, introStacked]);

  const t = dict[lang];
  const tr = (x: T) => x[lang];

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  // Fullscreen modal owns the viewport: freeze the page behind it so only the modal's scrollbar shows.
  const savedScroll = useRef(0);
  useEffect(() => {
    if (!expandedId) return;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = ""; };
  }, [expandedId]);
  // The fixed card leaves the flow and the page shrinks, clamping scroll; put it back before it shrinks home.
  useLayoutEffect(() => {
    if (stage === "shrinking" || stage === null) window.scrollTo(0, savedScroll.current);
  }, [stage]);

  function openCard(id: ExpandableId) {
    if (expandedId) return;
    clearTimers();
    savedScroll.current = window.scrollY;
    setExpandedId(id);
    if (stacked) return; // mobile: the sheet slides in on its own, no staged expand
    setStage("closing");
    timers.current.push(
      window.setTimeout(() => setStage("growing"), SIBLINGS_TOTAL),
      window.setTimeout(() => setStage("content-in"), SIBLINGS_TOTAL + T_GROW),
      window.setTimeout(() => setStage("open"), SIBLINGS_TOTAL + T_GROW + T_CONTENT)
    );
  }

  function closeCard() {
    if (stacked) {
      // AnimatePresence keeps the last-rendered sheet for its slide-down, so state can clear now.
      setExpandedId(null);
      setActiveProjectId(null);
      return;
    }
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

  // Mobile modals slide over the grid, so nothing in it hides or expands.
  const hideSiblings = expandedId !== null && !stacked;
  const cardState = (id: ExpandableId) => {
    const isExpanding = expandedId === id && !stacked;
    const isHidden = hideSiblings && expandedId !== id;
    const wantFull = isExpanding && stage !== "closing" && stage !== "shrinking" && stage !== null;
    const showContent = isExpanding && (stage === "content-in" || stage === "open");
    return { isExpanding, isHidden, wantFull, showContent };
  };

  const headerGlow = useMagicGlow<HTMLElement>();
  const phraseGlow = useMagicGlow<HTMLElement>();
  const aboutGlow = useMagicGlow<HTMLElement>();
  const contactGlow = useMagicGlow<HTMLElement>();
  const socialGlow = useMagicGlow<HTMLElement>();

  const activeProject = myWork.find((p) => p.id === activeProjectId) ?? null;

  // Expanded content, shared by the desktop grow-in-place cards and the mobile slide-up sheet.
  const renderPanel = (id: ExpandableId, show: boolean) => {
    const fade = stacked ? {} : { initial: { opacity: 0 }, animate: { opacity: show ? 1 : 0 }, exit: { opacity: 0 }, transition: { duration: T_CONTENT / 1000 } };
    const close = (
      <button type="button" className="iconBtn closeBtn" aria-label={t.closeLabel} onClick={(e) => { e.stopPropagation(); closeCard(); }}>✕</button>
    );
    if (id === "work") {
      return (
        <motion.div key="expanded" className="panel workPanel" {...fade}>
          {activeProject && (
            <>
              <div className="workPanelHero" style={{ background: activeProject.color }}>
                <h2 className="workPanelTitle">{activeProject.title}</h2>
                {close}
              </div>
              <div className="workPanelBody">
                <p className="panelLine">{t.roleLabel}: {tr(activeProject.role)}</p>
                <p className="panelLine">{t.stackLabel}: {activeProject.stack}</p>
                <p className="panelBody">{tr(activeProject.summary)}</p>
                {activeProject.highlights && (
                  <ul className="highlightList">
                    {activeProject.highlights.map((h) => (
                      <li key={h.en}>{tr(h)}</li>
                    ))}
                  </ul>
                )}
                {activeProject.clients && (
                  <div className="clientList">
                    {activeProject.clients.map((c) => (
                      <div className="clientItem" key={c.name.en}>
                        <span className="clientName">{tr(c.name)}</span>
                        <span className="clientDesc">{tr(c.description)}</span>
                        {c.highlights && (
                          <ul className="highlightList">
                            {c.highlights.map((h) => (
                              <li key={h.en}>{tr(h)}</li>
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
                        {tr(l.label)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </motion.div>
      );
    }
    return (
      <motion.div key="expanded" className="panel aboutPanel" {...fade}>
        {close}
        {id === "phrase" ? <PersonalContent tagline={t.tagline} philosophy={t.philosophy} /> : id === "about" ? <AboutContent /> : <ContactContent />}
      </motion.div>
    );
  };

  return (
    <LangContext.Provider value={lang}>
    <div className="parent bg-bg" data-theme={dark ? "dark" : undefined}>
      {expandedId && <div className="scrim" onClick={closeCard} />}

      <motion.header
        ref={headerGlow}
        className="card headerOscar bg-surface text-text magicCard"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: hideSiblings || !ready ? 0 : 1, scale: hideSiblings || !ready ? 0 : 1 }}
        transition={{ duration: T_SIBLINGS / 1000, delay: CARD_ORDER.header * STAGGER }}
        style={{ pointerEvents: hideSiblings ? "none" : "auto" }}
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
            aria-label={dark ? t.lightLabel : t.darkLabel}
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
            animate={{ opacity: s.isHidden || !ready ? 0 : 1, scale: s.isHidden || !ready ? 0 : 1 }}
            className={`card phraseContainer bg-surface text-text magicCard ${s.wantFull ? "isFullscreen" : ""}`}
            style={{ zIndex: s.isExpanding ? 41 : 5 }}
            onClick={() => !expandedId && openCard("phrase")}
          >
            <AnimatePresence mode="wait">
              {!s.wantFull ? (
                <motion.div key="collapsed" className="cardInner" exit={{ opacity: 0 }} ref={phraseGlow}>
                  <span className="magicGlow" />
                  <CircularBadge text={t.available} />
                  <p className="tagline">{t.tagline}</p>
                </motion.div>
              ) : (
                renderPanel("phrase", s.showContent)
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      <motion.section
        key={offset ? "measured" : "unmeasured"}
        ref={photoRef}
        className="card imageContainer bg-surface"
        initial={
          reduced
            ? { opacity: 0, scale: 0.85 }
            : introStacked
              ? { opacity: 1, scale: 1, x: 0, y: offset?.from ?? 0 }
              : { opacity: 0, scale: 0.6, x: offset?.x ?? 0, y: offset?.y ?? 0 }
        }
        animate={
          intro === "center" && !reduced
            ? introStacked
              ? { y: [offset?.from ?? 0, offset?.y ?? 0, 0] } // below screen → top of screen → its grid slot
              : { opacity: 1, scale: 1.15, x: offset?.x ?? 0, y: offset?.y ?? 0 }
            : { opacity: hideSiblings ? 0 : 1, scale: hideSiblings ? 0 : 1, x: 0, y: 0 }
        }
        transition={
          intro === "center" && introStacked
            ? { duration: T_RISE / 1000, times: [0, 0.6, 1], ease: [[0.2, 0.7, 0.3, 1], [0.65, 0, 0.35, 1]] }
            : intro === "center"
            ? { duration: T_CENTER / 1000, ease: [0.2, 0.7, 0.3, 1] }
            : intro === "moving"
              ? { duration: T_MOVE / 1000, ease: [0.65, 0, 0.35, 1] }
              : { duration: T_SIBLINGS / 1000 }
        }
        style={{ zIndex: intro === "done" ? 5 : 30, pointerEvents: hideSiblings || intro !== "done" ? "none" : "auto", visibility: offset ? "visible" : "hidden" }}
      >
        <FlipCard
          className="photoFlip"
          radius={16}
          background="var(--color-bg)"
          shadow={false}
          ariaLabel="Oscar Cardozo"
          front={<img className="photo" src="/photo.jpg" alt="Oscar Cardozo" draggable={false} />}
          back={
            <div className="photoBack">
              <img className="photo gray" src="/photo.jpg" alt="" draggable={false} />
              <div className="photoInfo">
                <strong>Oscar Cardozo</strong>
                <span>{t.roleShort}</span>
                <span>+57 3195752651</span>
                <span>oscar.cardozo30@hotmail.com</span>
              </div>
            </div>
          }
        />
      </motion.section>

      {(() => {
        const s = cardState("work");
        return (
          <motion.section
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            transition={cardTransition("work")}
            animate={{ opacity: s.isHidden || !ready ? 0 : 1, scale: s.isHidden || !ready ? 0 : 1 }}
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
                      onFocus={() => setHoverProjectId(p.id)}
                      // Touch has no hover: first tap unfolds the row, second opens it.
                      onClick={() => (p.id === hoverProjectId ? openProject(p.id) : setHoverProjectId(p.id))}
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
                renderPanel("work", s.showContent)
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
            animate={{ opacity: s.isHidden || !ready ? 0 : 1, scale: s.isHidden || !ready ? 0 : 1 }}
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
                renderPanel("about", s.showContent)
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
            animate={{ opacity: s.isHidden || !ready ? 0 : 1, scale: s.isHidden || !ready ? 0 : 1 }}
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
                renderPanel("contact", s.showContent)
              )}
            </AnimatePresence>
          </motion.section>
        );
      })()}

      <motion.section
        ref={socialGlow}
        className="card socialMedia bg-surface text-text magicCard"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: hideSiblings || !ready ? 0 : 1, scale: hideSiblings || !ready ? 0 : 1 }}
        transition={{ duration: T_SIBLINGS / 1000, delay: CARD_ORDER.social * STAGGER }}
        style={{ pointerEvents: hideSiblings ? "none" : "auto" }}
      >
        <span className="magicGlow" />
        <nav>
          {socials.map((l) => (
            <a key={l.label} className="socialLink" href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}>
              <span className="socialIcon">{l.icon}</span>
              <span className="socialLabel">{l.label}</span>
              <svg className="socialArrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg>
            </a>
          ))}
        </nav>
      </motion.section>

      {/* Mobile modal: a separate sheet so the grid underneath stays intact while it slides. */}
      <AnimatePresence>
        {stacked && expandedId && (
          <motion.div
            key={expandedId}
            className={`card isFullscreen bg-surface text-text ${expandedId === "work" ? "myWork" : ""}`}
            style={{ zIndex: 41 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: T_SHEET / 1000, ease: [0.2, 0.7, 0.3, 1] }}
          >
            {renderPanel(expandedId, true)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </LangContext.Provider>
  );
}
