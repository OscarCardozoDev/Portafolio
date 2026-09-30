import { useState, type FormEvent } from "react";
import { useT, useLang } from "./i18n";
import "./ContactContent.css";

const PHONE = "573195752651";
const EMAIL = "oscar.cardozo30@hotmail.com";
const topics = [
  { id: "project", es: "Un proyecto", en: "A project" },
  { id: "job", es: "Una oportunidad laboral", en: "A job opportunity" },
  { id: "hello", es: "Solo saludar", en: "Just saying hi" },
];
const ui = {
  heading: { es: "Cuéntame qué estás construyendo. Yo pongo el café.", en: "Tell me what you're building. I'll bring the coffee." },
  name: { es: "Tu nombre", en: "Your name" },
  namePh: { es: "¿Cómo te llamas?", en: "What's your name?" },
  about: { es: "Quiero hablar de", en: "I want to talk about" },
  message: { es: "Mensaje", en: "Message" },
  messagePh: { es: "Cuéntame en qué estás trabajando", en: "Tell me what you're working on" },
  send: { es: "Enviar por WhatsApp", en: "Send via WhatsApp" },
  hint: { es: "Se abre WhatsApp con el mensaje listo. Respondo de lunes a viernes.", en: "WhatsApp opens with your message ready. I reply Monday to Friday." },
  sent: { es: "Se abrió WhatsApp con tu mensaje. Solo falta darle enviar.", en: "WhatsApp opened with your message. Just hit send." },
  mail: { es: "También por correo:", en: "Or by email:" },
};

export default function ContactContent() {
  const [name, setName] = useState("");
  const t = useT();
  const lang = useLang();
  const [topic, setTopic] = useState(topics[0].id);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = `Hola Oscar, soy ${name.trim()}. Te escribo por: ${topic.toLowerCase()}.\n\n${message.trim()}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="contactWrap">
      <figure className="contactPhoto">
        <img src="/photo-form.jpg" alt="Oscar Cardozo" />
      </figure>

      <div className="contactSide">
        <h2>{t(ui.heading)}</h2>

        <form className="contactForm" onSubmit={submit}>
          <label>
            {t(ui.name)}
            <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" placeholder={t(ui.namePh)} />
          </label>

          <fieldset>
            <legend>{t(ui.about)}</legend>
            <div className="chips">
              {topics.map((x) => (
                <label key={x.id} className={`chip ${x.id === topic ? "on" : ""}`}>
                  <input type="radio" name="topic" checked={x.id === topic} onChange={() => setTopic(x.id)} />
                  {x[lang]}
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            {t(ui.message)}
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder={t(ui.messagePh)} />
          </label>

          <button type="submit" className="send">{t(ui.send)}</button>
          <p className="hint" role="status">
            {sent ? t(ui.sent) : t(ui.hint)}
          </p>
        </form>

        <p className="alt">
          {t(ui.mail)} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </div>
  );
}
