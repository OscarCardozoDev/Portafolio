import { useState, type ReactNode } from "react";
import TiltedCard from "../../components/react-bits/TiltedCard";
import "./Gallery.css";

export type Media = { kind: "image" | "video" | "sticker"; src: string; caption: string; fit?: "contain" };

function Stage({ item }: { item: Media }) {
  const src = encodeURI(item.src);
  if (item.kind === "video") return <video key={item.src} className="stageVideo" controls preload="metadata" src={src} />;
  if (item.kind === "sticker")
    return (
      <div key={item.src} className="stageSticker">
        <img src={src} alt={item.caption} />
      </div>
    );
  if (item.fit === "contain")
    return (
      <div key={item.src} className="stageContain">
        <img className="fill" src={src} alt="" aria-hidden="true" />
        <img className="fg" src={src} alt={item.caption} />
      </div>
    );
  return (
    <TiltedCard
      key={item.src}
      imageSrc={src}
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

export default function Gallery({ media, overlay }: { media: Media[]; overlay?: ReactNode }) {
  const [i, setI] = useState(0);
  const cur = media[i];
  const step = (d: number) => setI((n) => (n + d + media.length) % media.length);

  return (
    <div className="gallery">
      <div className="stage">
        <Stage item={cur} />
        {overlay}
        {media.length > 1 && (
          <>
            <button type="button" className="nav prev" aria-label="Anterior" onClick={() => step(-1)}>‹</button>
            <button type="button" className="nav next" aria-label="Siguiente" onClick={() => step(1)}>›</button>
          </>
        )}
      </div>
      <p className="caption">{cur.caption}</p>
      {media.length > 1 && (
        <div className="thumbs">
          {media.map((x, n) => (
            <button key={x.src} type="button" className={`thumb ${n === i ? "on" : ""}`} aria-label={`Ver ${n + 1} de ${media.length}`} aria-current={n === i} onClick={() => setI(n)}>
              {x.kind === "video" ? <span className="play">▶</span> : <img src={encodeURI(x.src)} alt="" loading="lazy" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
