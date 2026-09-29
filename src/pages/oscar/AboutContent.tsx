import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TiltedCard from "../../components/react-bits/TiltedCard";
import LogoLoop from "../../components/react-bits/LogoLoop";
import CountUp from "../../components/react-bits/CountUp";
import "./AboutContent.css";

const BIO =
  "Ingeniero de Sistemas graduado de la Universidad Santo Tomás, apasionado por la infraestructura tecnológica, la gestión de datos y la resolución de problemas complejos. Cuento con base teórica y práctica en desarrollo de software fullstack, optimización de consultas SQL, modelado de datos y uso de herramientas de monitoreo en entornos de desarrollo, además de fundamentos en Cloud Computing (Microsoft Azure). Destaco por mi capacidad de aprendizaje continuo y adaptabilidad a nuevos entornos —demostrada durante mi intercambio académico en Corea del Sur—, el trabajo en equipo y la comunicación asertiva. Ganador de múltiples hackathons y ponente en congresos de investigación, lo que respalda mi enfoque proactivo y orientado a resultados.";

type Doc = { label: string; url: string };
type Step = { when: string; title: string; text: string; docs?: Doc[] };
type Media = { kind: "image" | "video" | "sticker"; src: string; caption: string };
type Event = {
  id: string;
  tab: string;
  name: string;
  when: string;
  badge?: { text: string; first?: boolean };
  text: string;
  media: Media[];
  links: Doc[];
};

const education: Step[] = [
  {
    when: "24 sep 2026",
    title: "Ingeniería de Sistemas",
    text: "Universidad Santo Tomás, Tunja. Graduado.",
    docs: [{ label: "Diploma", url: "/Certificados/diploma.pdf" }],
  },
  {
    when: "20 mar 2025",
    title: "Cloud Computing — Azure for Students",
    text: "Seminario SUMMA, Universidad Santo Tomás.",
    docs: [{ label: "Certificado", url: "/Certificados/Certificado_CLOUD_COMPUTING.pdf" }],
  },
  { when: "Intercambio", title: "Corea del Sur", text: "Intercambio académico internacional." },
];

const research: Step[] = [
  {
    when: "12–13 sep 2024",
    title: "Latamic: explotando el mercado del cómic digital",
    text: "Ponencia en el I Congreso Internacional de Investigación en Ingeniería de Sistemas (CI3S Colombia 2024).",
    docs: [{ label: "Constancia", url: "/Certificados/PONENCIA CARDOZO OSCAR.PDF" }],
  },
  {
    when: "12–13 sep 2024",
    title: "Lata-mic Share: una ventana a los cómics electrónicos",
    text: "Póster en CI3S Colombia 2024.",
    docs: [{ label: "Constancia", url: "/Certificados/POSTER CARDOZO OSCAR.pdf" }],
  },
  {
    when: "26–27 sep 2024",
    title: "Lata-mic Share: divulgación de web comic colombiano",
    text: "Autor y ponente en el VIII Encuentro Internacional de Investigación Universitaria (ENIIU), Tunja.",
    docs: [{ label: "Constancia", url: "/Certificados/Diploma_ENIIU.pdf" }],
  },
];

const groups = [
  { name: "Frontend", color: "var(--color-teal)", items: ["React", "TypeScript", "Angular", "Three.js"] },
  { name: "Backend", color: "var(--color-rust)", items: ["NestJS", "Express.js", "FastAPI", "Prisma"] },
  { name: "Datos", color: "var(--color-mustard)", items: ["PostgreSQL", "Redis", "SQL", "Modelado de datos"] },
  { name: "DevOps y Cloud", color: "var(--color-avocado)", items: ["Docker", "Azure", "Google Cloud", "GitHub Actions"] },
  { name: "IA", color: "var(--color-teal)", items: ["RAG", "FAISS", "BGE-M3", "LiteLLM / Bedrock"] },
  { name: "Calidad y docs", color: "var(--color-rust)", items: ["Swagger", "Postman / Newman", "Git"] },
];

const techLogos = groups.flatMap((g) =>
  g.items.map((item) => ({
    node: (
      <span className="tech">
        <i style={{ background: g.color }} />
        {item}
      </span>
    ),
    ariaLabel: `${item} (${g.name})`,
  }))
);

const events: Event[] = [
  {
    id: "boya",
    tab: "BoyaCoding",
    name: "BoyaCoding · Boyacá Innovate",
    when: "2025",
    badge: { text: "1.er puesto", first: true },
    text: "Plataforma web para Cárdenas Vision: portal de citas con gamificación y gestión de citas. Ganamos el primer puesto en la categoría Retos empresariales, con un premio de $6.000.000 para escalar el prototipo a un entorno real.",
    media: [
      { kind: "video", src: "/BoyaCoding/aplication-video.mp4", caption: "Video elaborado por la integrante del grupo Paula Vega." },
      { kind: "image", src: "/BoyaCoding/winners.jpeg", caption: "Premiación: primer puesto en Retos empresariales." },
      { kind: "image", src: "/BoyaCoding/team.jpeg", caption: "El equipo BoyaCoding durante el hackathon." },
    ],
    links: [],
  },
  {
    id: "cf26",
    tab: "CodeFest 2026",
    name: "CodeFest Ad Astra 2026",
    when: "Sep 2026",
    badge: { text: "Finalista" },
    text: "IA multiagente para el análisis aeroespacial en LATAM. Con el equipo UstaCode construimos arpIA, un asistente conversacional con RAG que responde con fuentes citadas. Fase presencial en Bogotá, organizada por la Universidad de los Andes y la Fuerza Aeroespacial Colombiana.",
    media: [
      { kind: "sticker", src: "/Codefest-2026/arpIA — Mascota.png", caption: "La mascota de arpIA." },
      { kind: "image", src: "/Codefest-2026/arpIA — chat.jpg", caption: "arpIA respondiendo sobre basura espacial en órbita LEO." },
      { kind: "image", src: "/Codefest-2026/grupo UstaCode.jpeg", caption: "Equipo UstaCode en la fase presencial." },
    ],
    links: [
      { label: "Presentación", url: "https://canva.link/543965psu2ltlx2" },
      { label: "Repositorio", url: "https://github.com/Wissen01720/codefest-ad-astra" },
      { label: "Certificado", url: "/Certificados/Certificado ad astra 2026.pdf" },
    ],
  },
  {
    id: "cf24",
    tab: "CodeFest 2024",
    name: "CodeFest Ad Astra 2024",
    when: "23–28 sep 2024",
    badge: { text: "Finalista" },
    text: "Primera participación en el evento de la Universidad de los Andes y la Fuerza Aérea Colombiana, en modalidad virtual y presencial.",
    media: [
      { kind: "image", src: "/Codefest-2024/team.jpeg", caption: "Con el equipo, frente a los pendones del evento." },
      { kind: "image", src: "/Codefest-2024/end.jpeg", caption: "Ceremonia en la Universidad de los Andes." },
    ],
    links: [{ label: "Certificado", url: "/Certificados/Diploma_CodeAstra.pdf" }],
  },
  {
    id: "nasa",
    tab: "NASA Space Apps",
    name: "NASA International Space Apps Challenge",
    when: "5–6 oct 2024",
    text: "Con el equipo UstaCode hicimos un proyecto para enseñar el espacio exterior a niños. Me encargué de crear el espacio con planetas en Three.js.",
    media: [],
    links: [{ label: "Certificado", url: "/Certificados/Certificados ustacode.pdf" }],
  },
  {
    id: "maratones",
    tab: "Maratones",
    name: "Maratones de programación",
    when: "Universidad Santo Tomás",
    text: "Participé en maratones de programación de la Universidad Santo Tomás, realizadas en la Universidad Juan de Castellanos y en la CCPL, junto al grupo de investigación.",
    media: [{ kind: "image", src: "/Ponencias-maratones/Maraton-ccpl.jpeg", caption: "Maratón en la CCPL, con el grupo de investigación." }],
    links: [],
  },
];

const languages = [
  { name: "Inglés", level: "Alto", steps: 2, text: "Nivel B2 (Proficiency in English) en Blighty Bliss, Instituto Británico de Inglés, Tunja. 210 horas, 2020.", docs: [{ label: "Diploma", url: "/Diploma_Bligthy_Bliss.pdf" }] },
  { name: "Español", level: "Nativo", steps: 3, text: "Lengua materna." },
  { name: "Coreano", level: "Básico", steps: 1, text: "Aprendido durante el intercambio académico en Corea del Sur." },
];

const href = (d: Doc) => (d.url.startsWith("http") ? d.url : encodeURI(d.url));

const Docs = ({ docs }: { docs?: Doc[] }) =>
  docs && docs.length ? (
    <span className="docs">
      {docs.map((d) => (
        <a key={d.url} href={href(d)} target="_blank" rel="noopener noreferrer">
          {d.label}
        </a>
      ))}
    </span>
  ) : null;

function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="timeline">
      {steps.map((s) => (
        <li key={s.title}>
          <span className="when">{s.when}</span>
          <strong>{s.title}</strong>
          <p>{s.text}</p>
          <Docs docs={s.docs} />
        </li>
      ))}
    </ol>
  );
}

function Tech() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sec techSec" aria-labelledby="techTitle">
      <div className="sectionHead">
        <h3 id="techTitle">Tecnologías</h3>
        <button type="button" className="textBtn" aria-expanded={open} aria-controls="techList" onClick={() => setOpen((o) => !o)}>
          {open ? "Ocultar lista" : "Ver todas por categoría"}
        </button>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="list"
            id="techList"
            className="techList"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
          >
            <div className="techGrid">
              {groups.map((g) => (
                <div key={g.name}>
                  <h4>
                    <i style={{ background: g.color }} />
                    {g.name}
                  </h4>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="loop" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <LogoLoop
              logos={techLogos}
              speed={40}
              gap={14}
              logoHeight={20}
              pauseOnHover
              fadeOut
              fadeOutColor="var(--color-surface)"
              ariaLabel="Tecnologías que uso"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Stage({ item }: { item: Media }) {
  if (item.kind === "video") return <video key={item.src} className="stageVideo" controls preload="metadata" src={encodeURI(item.src)} />;
  if (item.kind === "sticker")
    return (
      <div key={item.src} className="stageSticker">
        <img src={encodeURI(item.src)} alt={item.caption} />
      </div>
    );
  return (
    <TiltedCard
      key={item.src}
      imageSrc={encodeURI(item.src)}
      altText={item.caption}
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      scaleOnHover={1.02}
      rotateAmplitude={6}
      showMobileWarning={false}
      showTooltip={false}
    />
  );
}

function Hackathons() {
  const [ev, setEv] = useState(0);
  const [m, setM] = useState(0);
  const e = events[ev];
  const cur = e.media[m];
  const step = (d: number) => setM((i) => (i + d + e.media.length) % e.media.length);

  return (
    <section className="sec" aria-labelledby="hackTitle">
      <div className="sectionHead">
        <h3 id="hackTitle">Hackathons y maratones</h3>
        <p className="counts">
          <span><CountUp to={4} /> hackathons</span>
          <span><CountUp to={1} /> primer puesto</span>
          <span><CountUp to={2} /> finales</span>
        </p>
      </div>

      <div className="tabs" role="tablist" aria-label="Eventos">
        {events.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={i === ev}
            aria-controls="hackPanel"
            className={`tab ${i === ev ? "on" : ""}`}
            onClick={() => { setEv(i); setM(0); }}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div className={`hackBody ${cur ? "" : "noMedia"}`} id="hackPanel" role="tabpanel" aria-labelledby={`tab-${e.id}`}>
        {cur && (
          <div className="gallery">
            <div className="stage">
              <Stage item={cur} />
              {e.badge?.first && (
                <span className="seal" aria-label="Primer puesto">
                  <b>1.º</b>
                  puesto
                </span>
              )}
              {e.media.length > 1 && (
                <>
                  <button type="button" className="nav prev" aria-label="Anterior" onClick={() => step(-1)}>‹</button>
                  <button type="button" className="nav next" aria-label="Siguiente" onClick={() => step(1)}>›</button>
                </>
              )}
            </div>
            <p className="caption">{cur.caption}</p>
            {e.media.length > 1 && (
              <div className="thumbs">
                {e.media.map((x, i) => (
                  <button key={x.src} type="button" className={`thumb ${i === m ? "on" : ""}`} aria-label={`Ver ${i + 1} de ${e.media.length}`} aria-current={i === m} onClick={() => setM(i)}>
                    {x.kind === "video" ? <span className="play">▶</span> : <img src={encodeURI(x.src)} alt="" loading="lazy" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="evInfo">
          <h4>{e.name}</h4>
          <p className="evMeta">
            {e.when}
            {e.badge && <span className={`pill ${e.badge.first ? "first" : ""}`}>{e.badge.text}</span>}
          </p>
          <p className="evText">{e.text}</p>
          <Docs docs={e.links} />
        </div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <div className="aboutContent">
      <header className="intro">
        <div>
          <h2>Ingeniero de Sistemas</h2>
          <p className="lede">{BIO}</p>
        </div>
        <section aria-labelledby="eduTitle">
          <h3 id="eduTitle" className="eduTitle">Formación</h3>
          <Timeline steps={education} />
        </section>
      </header>

      <Tech />
      <Hackathons />

      <section className="sec resSec" aria-labelledby="resTitle">
        <div>
          <div className="sectionHead">
            <h3 id="resTitle">Investigación</h3>
          </div>
          <p className="resAbout">
            Latamic, con Edgard Leonardo Patiño Largo (USTA Tunja): plataforma web y móvil para crear y publicar webcómics latinos, proteger la propiedad intelectual de sus autores y darles visibilidad global. Desarrollada con metodología ágil y Lean (Scrum y XP).
          </p>
          <Timeline steps={research} />
        </div>
        <figure className="resFigure">
          <img src="/Ponencias-maratones/latamic-reconocimiento.jpeg" alt="Reconocimiento en el CI3S Colombia 2024" loading="lazy" />
          <figcaption>CI3S Colombia 2024, Universidad Santo Tomás Tunja.</figcaption>
        </figure>
      </section>

      <section className="sec" aria-labelledby="langTitle">
        <div className="sectionHead">
          <h3 id="langTitle">Idiomas</h3>
        </div>
        <ul className="langs">
          {languages.map((l) => (
            <li key={l.name}>
              <div>
                <strong>{l.name}</strong>
                <span className="langLevel">{l.level}</span>
                <span className="meter" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <i key={n} className={n <= l.steps ? "on" : ""} />
                  ))}
                </span>
                <p>{l.text}</p>
                <Docs docs={l.docs} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
