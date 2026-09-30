import Gallery, { type Media } from "./Gallery";
import MorphSlider from "../../components/react-bits/MorphSlider";
import { useT, type T } from "./i18n";
import "./AboutContent.css";
import "./PersonalContent.css";

type MediaT = Omit<Media, "caption"> & { caption: T };

const korea: MediaT[] = [
  { kind: "image", src: "/Corea/estanque.jpeg", caption: { es: "Pabellón tradicional junto a un estanque.", en: "Traditional pavilion by a pond." }, fit: "contain" },
  { kind: "image", src: "/Corea/mar.jpeg", caption: { es: "Pabellón sobre el mar.", en: "Pavilion over the sea." } },
  { kind: "image", src: "/Corea/amigos.jpeg", caption: { es: "Con amigos coreanos en una terraza.", en: "With Korean friends on a terrace." }, fit: "contain" },
  { kind: "image", src: "/Corea/leon.jpeg", caption: { es: "Un guardián de piedra, de noche.", en: "A stone guardian, at night." }, fit: "contain" },
  { kind: "image", src: "/Corea/buda.jpeg", caption: { es: "Buda de piedra blanca.", en: "White stone Buddha." }, fit: "contain" },
  { kind: "image", src: "/Corea/museo.jpeg", caption: { es: "Una obra que vi en un museo.", en: "An artwork I saw in a museum." }, fit: "contain" },
];

const works: MediaT[] = [
  { kind: "image", src: "/Obras/calavera-rosa.jpeg", caption: { es: "Calavera, rosa y vela.", en: "Skull, rose and candle." } },
  { kind: "image", src: "/Obras/serpiente-emplumada.jpeg", caption: { es: "Serpiente emplumada bajo la luna.", en: "Feathered serpent under the moon." } },
  { kind: "image", src: "/Obras/puerta-azul.jpeg", caption: { es: "Puerta azul y buganvilias.", en: "Blue door and bougainvillea." }, fit: "contain" },
  { kind: "image", src: "/Obras/piano-rosa.jpeg", caption: { es: "Piano con una rosa.", en: "Piano with a rose." }, fit: "contain" },
  { kind: "image", src: "/Obras/boceto-lirios.jpeg", caption: { es: "Boceto de lirios a tinta.", en: "Ink sketch of lilies." }, fit: "contain" },
];

const methods: { name: T; note: T }[] = [
  { name: { es: "V60", en: "V60" }, note: { es: "filtrado", en: "pour-over" } },
  { name: { es: "Prensa", en: "French" }, note: { es: "francesa", en: "press" } },
  { name: { es: "Moka", en: "Moka" }, note: { es: "italiana", en: "pot" } },
];

const books: { title: T; author: string; fav?: boolean }[] = [
  { title: { es: "Indigno de ser humano", en: "No Longer Human" }, author: "Osamu Dazai", fav: true },
  { title: { es: "El lobo estepario", en: "Steppenwolf" }, author: "Hermann Hesse" },
  { title: { es: "La campana de cristal", en: "The Bell Jar" }, author: "Sylvia Plath" },
];

const ui = {
  title: { es: "Casi bohemio", en: "Almost bohemian" },
  lede: {
    es: "Intento ser bohemio, pero me siento incompleto. Se puede decir que soy casi bohemio.",
    en: "I try to be bohemian, but I feel incomplete. You could say I'm almost bohemian.",
  },
  heroAlt: { es: "Puerta azul y buganvilias, óleo pintado por Oscar", en: "Blue door and bougainvillea, an oil painting by Oscar" },
  heroCap: { es: "Puerta azul y buganvilias, pintada por mí.", en: "Blue door and bougainvillea, painted by me." },
  korea: { es: "Un año en Corea del Sur", en: "A year in South Korea" },
  koreaPlace: { es: "Universidad de Keimyung, Daegu", en: "Keimyung University, Daegu" },
  koreaText: {
    es: "Estuve un año de intercambio en la Universidad de Keimyung, en Daegu. Lo que más me gustó de Corea fue su combinación entre lo tradicional y lo novedoso, lo lindas que son sus ciudades y lo ordenada que es su población.",
    en: "I spent a year on exchange at Keimyung University in Daegu. What I liked most about Korea was its mix of the traditional and the new, how beautiful its cities are and how orderly its people are.",
  },
  koreaBack: { es: "Me gustaría volver algún día y vivir otro periodo allá.", en: "I'd love to go back someday and live there again for a while." },
  coffee: { es: "Barismo y café", en: "Barista craft and coffee" },
  coffeeP1: {
    es: "Soy apasionado por el café. Siempre he pensado que Colombia tiene el mejor café del mundo, pero no lo tomamos. Por eso me dediqué a aprender el arte del café y sus diferentes variedades.",
    en: "I'm passionate about coffee. I've always thought Colombia has the best coffee in the world, but we don't drink it. That's why I set out to learn the art of coffee and its different varieties.",
  },
  coffeeP2: { es: "Me gusta prepararlo de todo tipo y de especialidad.", en: "I like brewing every kind, especially specialty coffee." },
  methods: { es: "Métodos que uso", en: "Methods I use" },
  paint: { es: "Pintura", en: "Painting" },
  paintText: { es: "Pinto por gusto. No sé nada de arte, pinto por pintar.", en: "I paint for fun. I know nothing about art, I just paint to paint." },
  readAria: { es: "Lectura y videojuegos", en: "Reading and video games" },
  read: { es: "Lectura", en: "Reading" },
  readText: { es: "Me gustan las lecturas profundas y melancólicas.", en: "I like deep, melancholic reads." },
  games: { es: "Videojuegos", en: "Video games" },
  gamesText: { es: "Me gustan los videojuegos de historia tranquilos.", en: "I like calm, story-driven video games." },
  fav: { es: "mi favorito", en: "my favorite" },
};

const Tile = ({ title, note, fav }: { title: string; note: string; fav?: boolean }) => (
  <li className={`tile ${fav ? "on" : ""}`}>
    <strong>{title}</strong>
    <span>{note}</span>
  </li>
);

export default function PersonalContent({ tagline, philosophy }: { tagline: string; philosophy: string }) {
  const t = useT();
  const withCaptions = (m: MediaT[]): Media[] => m.map((x) => ({ ...x, caption: t(x.caption) }));
  return (
    <div className="aboutContent personal">
      <header className="band hero">
        <div className="heroText">
          <h2>{t(ui.title)}</h2>
          <p className="lede">{t(ui.lede)}</p>
          <p className="persNote">{philosophy}</p>
          <p className="persNote">{tagline}</p>
        </div>
        <figure className="heroArt">
          <img src="/Obras/puerta-azul.jpeg" alt={t(ui.heroAlt)} />
          <figcaption>{t(ui.heroCap)}</figcaption>
        </figure>
      </header>

      <section className="band dark split" aria-labelledby="koreaTitle">
        <div>
          <h3 id="koreaTitle">{t(ui.korea)}</h3>
          <p className="persPlace">{t(ui.koreaPlace)}</p>
          <p className="persText">{t(ui.koreaText)}</p>
          <p className="persText">{t(ui.koreaBack)}</p>
        </div>
        <Gallery media={withCaptions(korea)} />
      </section>

      <section className="band" aria-labelledby="coffeeTitle">
        <div className="split">
          <div>
            <h3 id="coffeeTitle">{t(ui.coffee)}</h3>
            <p className="persText">{t(ui.coffeeP1)}</p>
            <p className="persText">{t(ui.coffeeP2)}</p>
          </div>
          <ul className="tiles" aria-label={t(ui.methods)}>
            {methods.map((m, i) => (
              <Tile key={m.name.es} title={t(m.name)} note={t(m.note)} fav={i === 0} />
            ))}
          </ul>
        </div>
      </section>

      <section className="band dark split flip" aria-labelledby="paintTitle">
        <div className="morphFrame">
          <MorphSlider
            items={works.map((w) => ({ image: encodeURI(w.src), caption: t(w.caption) }))}
            transition="melt"
            radius={0}
            showCaptions
            showControls
            showIndicators
          />
        </div>
        <div>
          <h3 id="paintTitle">{t(ui.paint)}</h3>
          <p className="persText">{t(ui.paintText)}</p>
        </div>
      </section>

      <section className="band last pair" aria-label={t(ui.readAria)}>
        <div>
          <h3>{t(ui.read)}</h3>
          <p className="persText">{t(ui.readText)}</p>
          <ul className="tiles">
            {books.map((b) => (
              <Tile key={b.title.es} title={t(b.title)} note={b.fav ? `${b.author} · ${t(ui.fav)}` : b.author} fav={b.fav} />
            ))}
          </ul>
        </div>
        <div>
          <h3>{t(ui.games)}</h3>
          <p className="persText">{t(ui.gamesText)}</p>
          <ul className="tiles">
            <Tile title="The Legend of Zelda" note={t(ui.fav)} fav />
          </ul>
        </div>
      </section>
    </div>
  );
}
