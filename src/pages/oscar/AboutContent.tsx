import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LogoLoop from "../../components/react-bits/LogoLoop";
import CountUp from "../../components/react-bits/CountUp";
import Gallery, { type Media } from "./Gallery";
import { useLang, useT, type T } from "./i18n";
import "./AboutContent.css";

type Doc = { label: T; url: string };
type Step = { when: T; title: T; text: T; docs?: Doc[] };
type MediaT = Omit<Media, "caption"> & { caption: T };
type Event = {
  id: string;
  tab: T;
  name: T;
  when: T;
  badge?: { text: T; first?: boolean };
  text: T;
  media: MediaT[];
  links: Doc[];
};

const same = (s: string): T => ({ es: s, en: s });

const ui = {
  role: { es: "Ingeniero de Sistemas", en: "Systems Engineer" },
  bio: {
    es: "Ingeniero de Sistemas graduado de la Universidad Santo Tomás, apasionado por la infraestructura tecnológica, la gestión de datos y la resolución de problemas complejos. Cuento con base teórica y práctica en desarrollo de software fullstack, optimización de consultas SQL, modelado de datos y uso de herramientas de monitoreo en entornos de desarrollo, además de fundamentos en Cloud Computing (Microsoft Azure). Destaco por mi capacidad de aprendizaje continuo y adaptabilidad a nuevos entornos —demostrada durante mi intercambio académico en Corea del Sur—, el trabajo en equipo y la comunicación asertiva. Ganador de múltiples hackathons y ponente en congresos de investigación, lo que respalda mi enfoque proactivo y orientado a resultados.",
    en: "Systems Engineer graduated from Universidad Santo Tomás, passionate about technology infrastructure, data management and solving complex problems. I have theoretical and practical grounding in fullstack software development, SQL query optimization, data modeling and monitoring tools in development environments, plus cloud computing fundamentals (Microsoft Azure). I stand out for continuous learning and adaptability to new environments — proven during my academic exchange in South Korea — teamwork and assertive communication. Multiple-time hackathon winner and research congress speaker, which backs my proactive, results-driven approach.",
  },
  education: { es: "Formación", en: "Education" },
  tech: { es: "Tecnologías", en: "Technologies" },
  techAria: { es: "Tecnologías que uso", en: "Technologies I use" },
  techShow: { es: "Ver todas por categoría", en: "See all by category" },
  techHide: { es: "Ocultar lista", en: "Hide list" },
  hack: { es: "Hackathons y maratones", en: "Hackathons and marathons" },
  events: { es: "Eventos", en: "Events" },
  hackathons: { es: "hackathons", en: "hackathons" },
  firstPlace: { es: "primer puesto", en: "first place" },
  finals: { es: "finales", en: "finals" },
  firstSeal: { es: "1.er puesto", en: "1st place" },
  sealNum: { es: "1.º", en: "1st" },
  sealWord: { es: "puesto", en: "place" },
  research: { es: "Investigación", en: "Research" },
  researchAbout: {
    es: "Latamic, con Edgard Leonardo Patiño Largo (USTA Tunja): plataforma web y móvil para crear y publicar webcómics latinos, proteger la propiedad intelectual de sus autores y darles visibilidad global. Desarrollada con metodología ágil y Lean (Scrum y XP).",
    en: "Latamic, with Edgard Leonardo Patiño Largo (USTA Tunja): a web and mobile platform to create and publish Latin webcomics, protect authors' intellectual property and give them global visibility. Built with agile and Lean methodology (Scrum and XP).",
  },
  researchPhoto: { es: "Reconocimiento en el CI3S Colombia 2024", en: "Recognition at CI3S Colombia 2024" },
  researchCaption: { es: "CI3S Colombia 2024, Universidad Santo Tomás Tunja.", en: "CI3S Colombia 2024, Universidad Santo Tomás Tunja." },
  languages: { es: "Idiomas", en: "Languages" },
};

const diploma: T = { es: "Diploma", en: "Diploma" };
const certificate: T = { es: "Certificado", en: "Certificate" };
const record: T = { es: "Constancia", en: "Certificate of participation" };

const education: Step[] = [
  {
    when: { es: "24 sep 2026", en: "Sep 24, 2026" },
    title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
    text: { es: "Universidad Santo Tomás, Tunja. Graduado.", en: "Universidad Santo Tomás, Tunja. Graduated." },
    docs: [{ label: diploma, url: "/Certificados/diploma.pdf" }],
  },
  {
    when: { es: "20 mar 2025", en: "Mar 20, 2025" },
    title: same("Cloud Computing — Azure for Students"),
    text: { es: "Seminario SUMMA, Universidad Santo Tomás.", en: "SUMMA seminar, Universidad Santo Tomás." },
    docs: [{ label: certificate, url: "/Certificados/Certificado_CLOUD_COMPUTING.pdf" }],
  },
  {
    when: { es: "Intercambio", en: "Exchange" },
    title: { es: "Corea del Sur", en: "South Korea" },
    text: { es: "Intercambio académico internacional.", en: "International academic exchange." },
  },
];

const research: Step[] = [
  {
    when: { es: "12–13 sep 2024", en: "Sep 12–13, 2024" },
    title: { es: "Latamic: explotando el mercado del cómic digital", en: "Latamic: exploiting the digital comic market" },
    text: {
      es: "Ponencia en el I Congreso Internacional de Investigación en Ingeniería de Sistemas (CI3S Colombia 2024).",
      en: "Talk at the 1st International Congress on Systems Engineering Research (CI3S Colombia 2024).",
    },
    docs: [{ label: record, url: "/Certificados/PONENCIA CARDOZO OSCAR.PDF" }],
  },
  {
    when: { es: "12–13 sep 2024", en: "Sep 12–13, 2024" },
    title: { es: "Lata-mic Share: una ventana a los cómics electrónicos", en: "Lata-mic Share: a window into electronic comics" },
    text: { es: "Póster en CI3S Colombia 2024.", en: "Poster at CI3S Colombia 2024." },
    docs: [{ label: record, url: "/Certificados/POSTER CARDOZO OSCAR.pdf" }],
  },
  {
    when: { es: "26–27 sep 2024", en: "Sep 26–27, 2024" },
    title: { es: "Lata-mic Share: divulgación de web comic colombiano", en: "Lata-mic Share: spreading Colombian webcomics" },
    text: {
      es: "Autor y ponente en el VIII Encuentro Internacional de Investigación Universitaria (ENIIU), Tunja.",
      en: "Author and speaker at the 8th International University Research Meeting (ENIIU), Tunja.",
    },
    docs: [{ label: record, url: "/Certificados/Diploma_ENIIU.pdf" }],
  },
];

const groups: { name: T; color: string; items: T[] }[] = [
  { name: same("Frontend"), color: "var(--color-teal)", items: ["React", "TypeScript", "Angular", "Three.js"].map(same) },
  { name: same("Backend"), color: "var(--color-rust)", items: ["NestJS", "Express.js", "FastAPI", "Prisma"].map(same) },
  {
    name: { es: "Datos", en: "Data" },
    color: "var(--color-mustard)",
    items: [same("PostgreSQL"), same("Redis"), same("SQL"), { es: "Modelado de datos", en: "Data modeling" }],
  },
  { name: { es: "DevOps y Cloud", en: "DevOps and Cloud" }, color: "var(--color-avocado)", items: ["Docker", "Azure", "Google Cloud", "GitHub Actions"].map(same) },
  { name: { es: "Calidad y docs", en: "Quality and docs" }, color: "var(--color-rust)", items: ["Swagger", "Postman / Newman", "Git"].map(same) },
];

const events: Event[] = [
  {
    id: "boya",
    tab: same("BoyaCoding"),
    name: same("BoyaCoding · Boyacá Innovate"),
    when: same("2025"),
    badge: { text: ui.firstSeal, first: true },
    text: {
      es: "Plataforma web para Cárdenas Vision: portal de citas con gamificación y gestión de citas. Ganamos el primer puesto en la categoría Retos empresariales, con un premio de $6.000.000 para escalar el prototipo a un entorno real.",
      en: "Web platform for Cárdenas Vision: an appointment portal with gamification and appointment management. We won first place in the Business Challenges category, with a COP 6,000,000 prize to scale the prototype to a real environment.",
    },
    media: [
      { kind: "video", src: "/BoyaCoding/aplication-video.mp4", caption: { es: "Video elaborado por la integrante del grupo Paula Vega.", en: "Video made by team member Paula Vega." } },
      { kind: "image", src: "/BoyaCoding/winners.jpeg", caption: { es: "Premiación: primer puesto en Retos empresariales.", en: "Awards: first place in Business Challenges." } },
      { kind: "image", src: "/BoyaCoding/team.jpeg", caption: { es: "El equipo BoyaCoding durante el hackathon.", en: "The BoyaCoding team during the hackathon." } },
    ],
    links: [],
  },
  {
    id: "cf26",
    tab: same("CodeFest 2026"),
    name: same("CodeFest Ad Astra 2026"),
    when: { es: "Sep 2026", en: "Sep 2026" },
    badge: { text: { es: "Finalista", en: "Finalist" } },
    text: {
      es: "IA multiagente para el análisis aeroespacial en LATAM. Con el equipo UstaCode construimos arpIA, un asistente conversacional que responde con fuentes citadas. Yo ayudé con el frontend, la conexión con el backend y el despliegue para el pitch. Fase presencial en Bogotá, organizada por la Universidad de los Andes y la Fuerza Aeroespacial Colombiana.",
      en: "Multi-agent AI for aerospace analysis in LATAM. With the UstaCode team we built arpIA, a conversational assistant that answers with cited sources. I helped with the frontend, the backend connection and the deployment for the pitch. In-person phase in Bogotá, organized by Universidad de los Andes and the Colombian Aerospace Force.",
    },
    media: [
      { kind: "sticker", src: "/Codefest-2026/arpIA — Mascota.png", caption: { es: "La mascota de arpIA.", en: "The arpIA mascot." } },
      { kind: "image", src: "/Codefest-2026/arpIA — chat.jpg", caption: { es: "arpIA respondiendo sobre basura espacial en órbita LEO.", en: "arpIA answering about space debris in LEO." }, fit: "contain" },
      { kind: "image", src: "/Codefest-2026/grupo UstaCode.jpeg", caption: { es: "Equipo UstaCode en la fase presencial.", en: "UstaCode team at the in-person phase." }, fit: "contain" },
    ],
    links: [
      { label: { es: "Presentación", en: "Presentation" }, url: "https://canva.link/543965psu2ltlx2" },
      { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/Wissen01720/codefest-ad-astra" },
      { label: certificate, url: "/Certificados/Certificado ad astra 2026.pdf" },
    ],
  },
  {
    id: "cf24",
    tab: same("CodeFest 2024"),
    name: same("CodeFest Ad Astra 2024"),
    when: { es: "23–28 sep 2024", en: "Sep 23–28, 2024" },
    badge: { text: { es: "Finalista", en: "Finalist" } },
    text: {
      es: "Primera participación en el evento de la Universidad de los Andes y la Fuerza Aérea Colombiana, en modalidad virtual y presencial.",
      en: "First time at the event by Universidad de los Andes and the Colombian Air Force, in virtual and in-person format.",
    },
    media: [
      { kind: "image", src: "/Codefest-2024/team.jpeg", caption: { es: "Con el equipo, frente a los pendones del evento.", en: "With the team, in front of the event banners." } },
      { kind: "image", src: "/Codefest-2024/end.jpeg", caption: { es: "Ceremonia en la Universidad de los Andes.", en: "Ceremony at Universidad de los Andes." } },
    ],
    links: [{ label: certificate, url: "/Certificados/Diploma_CodeAstra.pdf" }],
  },
  {
    id: "nasa",
    tab: same("NASA Space Apps"),
    name: same("NASA International Space Apps Challenge"),
    when: { es: "5–6 oct 2024", en: "Oct 5–6, 2024" },
    text: {
      es: "Con el equipo UstaCode hicimos un proyecto para enseñar el espacio exterior a niños. Me encargué de crear el espacio con planetas en Three.js.",
      en: "With the UstaCode team we built a project to teach outer space to children. I was in charge of creating the space with planets in Three.js.",
    },
    media: [],
    links: [{ label: certificate, url: "/Certificados/Certificados ustacode.pdf" }],
  },
  {
    id: "maratones",
    tab: { es: "Maratones", en: "Marathons" },
    name: { es: "Maratones de programación", en: "Programming marathons" },
    when: same("Universidad Santo Tomás"),
    text: {
      es: "Participé en maratones de programación de la Universidad Santo Tomás, realizadas en la Universidad Juan de Castellanos y en la CCPL, junto al grupo de investigación.",
      en: "I took part in programming marathons organized by Universidad Santo Tomás, held at Universidad Juan de Castellanos and at CCPL, together with the research group.",
    },
    media: [{ kind: "image", src: "/Ponencias-maratones/Maraton-ccpl.jpeg", caption: { es: "Maratón en la CCPL, con el grupo de investigación.", en: "Marathon at CCPL, with the research group." } }],
    links: [],
  },
];

const languages: { name: T; level: T; steps: number; text: T; docs?: Doc[] }[] = [
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Alto", en: "Advanced" },
    steps: 2,
    text: {
      es: "Nivel B2 (Proficiency in English) en Blighty Bliss, Instituto Británico de Inglés, Tunja. 210 horas, 2020.",
      en: "B2 level (Proficiency in English) at Blighty Bliss, British English Institute, Tunja. 210 hours, 2020.",
    },
    docs: [{ label: diploma, url: "/Certificados/Diploma_Bligthy_Bliss.pdf" }],
  },
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, steps: 3, text: { es: "Lengua materna.", en: "Mother tongue." } },
  {
    name: { es: "Coreano", en: "Korean" },
    level: { es: "Básico", en: "Basic" },
    steps: 1,
    text: { es: "Aprendido durante el intercambio académico en Corea del Sur.", en: "Learned during my academic exchange in South Korea." },
  },
];

const href = (d: Doc) => (d.url.startsWith("http") ? d.url : encodeURI(d.url));

const Docs = ({ docs }: { docs?: Doc[] }) => {
  const t = useT();
  return docs && docs.length ? (
    <span className="docs">
      {docs.map((d) => (
        <a key={d.url} href={href(d)} target="_blank" rel="noopener noreferrer">
          {t(d.label)}
        </a>
      ))}
    </span>
  ) : null;
};

function Timeline({ steps }: { steps: Step[] }) {
  const t = useT();
  return (
    <ol className="timeline">
      {steps.map((s) => (
        <li key={s.title.en}>
          <span className="when">{t(s.when)}</span>
          <strong>{t(s.title)}</strong>
          <p>{t(s.text)}</p>
          <Docs docs={s.docs} />
        </li>
      ))}
    </ol>
  );
}

function Tech() {
  const t = useT();
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const logos = groups.flatMap((g) =>
    g.items.map((it) => ({
      node: (
        <span className="tech">
          <i style={{ background: g.color }} />
          {t(it)}
        </span>
      ),
      ariaLabel: `${t(it)} (${t(g.name)})`,
    }))
  );
  return (
    <section className="sec techSec" aria-labelledby="techTitle">
      <div className="sectionHead">
        <h3 id="techTitle">{t(ui.tech)}</h3>
        <button type="button" className="textBtn" aria-expanded={open} aria-controls="techList" onClick={() => setOpen((o) => !o)}>
          {open ? t(ui.techHide) : t(ui.techShow)}
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
                <div key={g.name.en}>
                  <h4>
                    <i style={{ background: g.color }} />
                    {t(g.name)}
                  </h4>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.en}>{t(it)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key={`loop-${lang}`} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <LogoLoop logos={logos} speed={40} gap={14} logoHeight={20} pauseOnHover fadeOut fadeOutColor="var(--color-surface)" ariaLabel={t(ui.techAria)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Hackathons() {
  const t = useT();
  const [ev, setEv] = useState(0);
  const e = events[ev];
  const media: Media[] = e.media.map((m) => ({ ...m, caption: t(m.caption) }));

  return (
    <section className="sec" aria-labelledby="hackTitle">
      <div className="sectionHead">
        <h3 id="hackTitle">{t(ui.hack)}</h3>
        <p className="counts">
          <span><CountUp to={4} /> {t(ui.hackathons)}</span>
          <span><CountUp to={1} /> {t(ui.firstPlace)}</span>
          <span><CountUp to={2} /> {t(ui.finals)}</span>
        </p>
      </div>

      <div className="tabs" role="tablist" aria-label={t(ui.events)}>
        {events.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={i === ev}
            aria-controls="hackPanel"
            className={`tab ${i === ev ? "on" : ""}`}
            onClick={() => setEv(i)}
          >
            {t(x.tab)}
          </button>
        ))}
      </div>

      <div className={`hackBody ${media.length ? "" : "noMedia"}`} id="hackPanel" role="tabpanel" aria-labelledby={`tab-${e.id}`}>
        {media.length > 0 && (
          <Gallery
            key={e.id}
            media={media}
            overlay={
              e.badge?.first && (
                <span className="seal" aria-label={t(ui.firstSeal)}>
                  <b>{t(ui.sealNum)}</b>
                  {t(ui.sealWord)}
                </span>
              )
            }
          />
        )}
        <div className="evInfo">
          <h4>{t(e.name)}</h4>
          <p className="evMeta">
            {t(e.when)}
            {e.badge && <span className={`pill ${e.badge.first ? "first" : ""}`}>{t(e.badge.text)}</span>}
          </p>
          <p className="evText">{t(e.text)}</p>
          <Docs docs={e.links} />
        </div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  const t = useT();
  return (
    <div className="aboutContent">
      <header className="intro">
        <div>
          <h2>{t(ui.role)}</h2>
          <p className="lede">{t(ui.bio)}</p>
        </div>
        <section aria-labelledby="eduTitle">
          <h3 id="eduTitle" className="eduTitle">{t(ui.education)}</h3>
          <Timeline steps={education} />
        </section>
      </header>

      <Tech />
      <Hackathons />

      <section className="sec resSec" aria-labelledby="resTitle">
        <div>
          <div className="sectionHead">
            <h3 id="resTitle">{t(ui.research)}</h3>
          </div>
          <p className="resAbout">{t(ui.researchAbout)}</p>
          <Timeline steps={research} />
        </div>
        <figure className="resFigure">
          <img src="/Ponencias-maratones/latamic-reconocimiento.jpeg" alt={t(ui.researchPhoto)} loading="lazy" />
          <figcaption>{t(ui.researchCaption)}</figcaption>
        </figure>
      </section>

      <section className="sec" aria-labelledby="langTitle">
        <div className="sectionHead">
          <h3 id="langTitle">{t(ui.languages)}</h3>
        </div>
        <ul className="langs">
          {languages.map((l) => (
            <li key={l.name.en}>
              <div>
                <strong>{t(l.name)}</strong>
                <span className="langLevel">{t(l.level)}</span>
                <span className="meter" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <i key={n} className={n <= l.steps ? "on" : ""} />
                  ))}
                </span>
                <p>{t(l.text)}</p>
                <Docs docs={l.docs} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
