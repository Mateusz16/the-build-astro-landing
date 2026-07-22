"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Remonty kompleksowe",
    text: "Prowadzimy cały zakres prac — od demontażu i instalacji po ostatnią warstwę farby.",
  },
  {
    number: "02",
    title: "Wykończenia wnętrz",
    text: "Realizujemy mieszkania i domy w standardzie dopasowanym do projektu, budżetu i codziennego życia.",
  },
  {
    number: "03",
    title: "Łazienki i kuchnie",
    text: "Koordynujemy instalacje, zabudowy, glazurę i montaż wyposażenia w jednym harmonogramie.",
  },
  {
    number: "04",
    title: "Instalacje",
    text: "Wykonujemy modernizacje elektryczne, hydrauliczne i wentylacyjne zgodnie z projektem.",
  },
  {
    number: "05",
    title: "Prace budowlane",
    text: "Ściany, sufity, tynki, posadzki i przebudowy funkcjonalne wykonywane przez jeden zespół.",
  },
  {
    number: "06",
    title: "Modernizacje lokali",
    text: "Przekształcamy biura, lokale usługowe i przestrzenie inwestycyjne bez zbędnych przestojów.",
  },
];

const projects = [
  {
    type: "Kompleksowe wykończenie",
    title: "Apartament Powiśle",
    place: "Warszawa / 92 m² / 2025",
    image: "/project-apartment.jpg",
  },
  {
    type: "Remont domu",
    title: "Dom pod Warszawą",
    place: "Konstancin / 180 m² / 2025",
    image: "/project-house.jpg",
  },
  {
    type: "Kuchnia i strefa dzienna",
    title: "Loft na Woli",
    place: "Warszawa / 68 m² / 2024",
    image: "/project-loft.jpg",
  },
];

const process = [
  ["01", "Rozmowa", "Poznajemy zakres, oczekiwania, lokalizację i planowany termin."],
  ["02", "Wizja lokalna", "Sprawdzamy warunki techniczne i doprecyzowujemy rozwiązania."],
  ["03", "Wycena i plan", "Otrzymujesz czytelny zakres, koszt oraz harmonogram prac."],
  ["04", "Realizacja", "Prowadzimy prace, raportujemy postęp i przekazujemy gotową przestrzeń."],
];

const faqs = [
  {
    q: "Ile trwa przygotowanie wyceny?",
    a: "Wstępny zakres omawiamy podczas pierwszej rozmowy. Szczegółową wycenę przygotowujemy zwykle w ciągu 3–5 dni roboczych od wizji lokalnej.",
  },
  {
    q: "Czy pomagacie w wyborze i zakupie materiałów?",
    a: "Tak. Możemy przygotować zestawienie materiałów, zamówić je i skoordynować dostawy albo pracować na produktach kupionych przez inwestora.",
  },
  {
    q: "Czy można zlecić tylko część prac?",
    a: "Tak. Realizujemy zarówno kompleksowe wykończenia, jak i precyzyjnie określone etapy — na przykład łazienkę, instalacje albo prace malarskie.",
  },
  {
    q: "Gdzie realizujecie zlecenia?",
    a: "Działamy na terenie Warszawy i w promieniu około 40 km. Większe realizacje poza tym obszarem rozpatrujemy indywidualnie.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="The Build — strona główna">
          <span className="brand-mark" aria-hidden="true">TB</span>
          <span>THE BUILD</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Główna nawigacja">
          <a href="#uslugi" onClick={() => setMenuOpen(false)}>Usługi</a>
          <a href="#realizacje" onClick={() => setMenuOpen(false)}>Realizacje</a>
          <a href="#proces" onClick={() => setMenuOpen(false)}>Jak działamy</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>

        <a className="button button-small header-cta" href="#kontakt">
          Poproś o wycenę <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Remonty i wykończenia / Warszawa</p>
          <h1>Budujemy. Remontujemy. <em>Dowozimy efekt.</em></h1>
          <p className="hero-lead">
            Jeden zespół, konkretny plan i pełna odpowiedzialność za realizację — od pierwszego pomiaru po gotowe wnętrze.
          </p>
          <div className="hero-actions">
            <a className="button" href="#kontakt">Poproś o bezpłatną wycenę <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#realizacje">Zobacz realizacje <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/hero-construction.jpg"
            alt="Ekipa budowlana podczas realizacji nowoczesnego budynku"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <div className="hero-label">
            <span>Aktualna realizacja</span>
            <strong>Dom / Wilanów</strong>
          </div>
          <span className="measure measure-x" aria-hidden="true">12,40 M</span>
          <span className="measure measure-y" aria-hidden="true">+ 03,20</span>
        </div>
      </section>

      <section className="stats" aria-label="The Build w liczbach">
        <div><strong>12+</strong><span>lat doświadczenia</span></div>
        <div><strong>240+</strong><span>ukończonych realizacji</span></div>
        <div><strong>4,9/5</strong><span>średnia ocen klientów</span></div>
        <div><strong>96%</strong><span>prac oddanych w terminie</span></div>
      </section>

      <section className="section services" id="uslugi">
        <div className="section-heading">
          <p className="eyebrow dark"><span /> Zakres prac</p>
          <h2>Od pustych ścian<br />do gotowej przestrzeni.</h2>
          <p>Kompleksowo lub etapami. Zawsze z jasnym zakresem odpowiedzialności.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#kontakt" aria-label={`Zapytaj o: ${service.title}`}>Zapytaj o usługę <b aria-hidden="true">↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="proof-image">
          <Image
            src="/team-plans.jpg"
            alt="Specjaliści analizujący plany budowlane na miejscu realizacji"
            fill
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <span>Koordynacja / Nadzór / Odbiór</span>
        </div>
        <div className="proof-copy">
          <p className="eyebrow"><span /> Dlaczego The Build</p>
          <h2>Mniej chaosu.<br />Więcej kontroli.</h2>
          <p className="proof-lead">Remont nie musi oznaczać ciągłych telefonów, niedomówień i niespodziewanych kosztów.</p>
          <ul>
            <li><span>01</span><div><strong>Przejrzysta wycena</strong><p>Wiesz, za co płacisz, zanim zaczniemy prace.</p></div></li>
            <li><span>02</span><div><strong>Jeden opiekun projektu</strong><p>Masz jeden kontakt i regularną informację o postępie.</p></div></li>
            <li><span>03</span><div><strong>Uporządkowany proces</strong><p>Zakupy, dostawy i ekipy pracują według wspólnego planu.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="section projects" id="realizacje">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow dark"><span /> Wybrane realizacje</p>
            <h2>Efekt mówi najwięcej.</h2>
          </div>
          <p>Wnętrza i przestrzenie przygotowane do codziennego użytkowania — technicznie dopracowane, wizualnie spójne.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <Image src={project.image} alt={`${project.title} — ${project.type}`} fill sizes="(max-width: 760px) 100vw, 55vw" />
                <span>0{index + 1}</span>
              </div>
              <div className="project-meta">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="proces">
        <div className="process-intro">
          <p className="eyebrow"><span /> Jak działamy</p>
          <h2>Cztery kroki.<br />Jeden cel.</h2>
          <p>Od początku wiesz, co wydarzy się dalej i kto odpowiada za każdy etap.</p>
          <a className="button" href="#kontakt">Zacznijmy od rozmowy <span aria-hidden="true">↗</span></a>
        </div>
        <ol className="process-list">
          {process.map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section testimonial">
        <p className="quote-mark" aria-hidden="true">“</p>
        <blockquote>
          Wszystko było jasno ustalone jeszcze przed startem. W trakcie remontu dostawaliśmy regularne informacje, a mieszkanie odebraliśmy dokładnie w umówionym terminie.
        </blockquote>
        <div className="quote-author">
          <span>MK</span>
          <p><strong>Monika i Krzysztof</strong><br />remont mieszkania / Mokotów</p>
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading faq-heading">
          <p className="eyebrow dark"><span /> Najczęstsze pytania</p>
          <h2>Konkrety przed startem.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0}>
              <summary><span>0{index + 1}</span>{faq.q}<b aria-hidden="true">+</b></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div className="contact-copy">
          <p className="eyebrow"><span /> Porozmawiajmy o realizacji</p>
          <h2>Masz plan?<br /><em>Zbudujmy go.</em></h2>
          <p>Opowiedz krótko, czego potrzebujesz. Wrócimy z pytaniami i propozycją następnego kroku.</p>
          <div className="contact-details">
            <div><span>Telefon</span><a href="tel:+48221852040">+48 22 185 20 40</a></div>
            <div><span>E-mail</span><a href="mailto:kontakt@thebuild.pl">kontakt@thebuild.pl</a></div>
            <div><span>Obszar</span><strong>Warszawa + 40 km</strong></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="field-row">
            <label>Imię i nazwisko<input required name="name" autoComplete="name" placeholder="Jan Kowalski" /></label>
            <label>Telefon lub e-mail<input required name="contact" placeholder="Jak się z Tobą skontaktować?" /></label>
          </div>
          <div className="field-row">
            <label>Rodzaj prac
              <select required name="service" defaultValue="">
                <option value="" disabled>Wybierz zakres</option>
                <option>Remont kompleksowy</option>
                <option>Wykończenie wnętrza</option>
                <option>Łazienka lub kuchnia</option>
                <option>Instalacje</option>
                <option>Inny zakres</option>
              </select>
            </label>
            <label>Lokalizacja<input required name="location" placeholder="Miasto / dzielnica" /></label>
          </div>
          <label>Opowiedz o realizacji<textarea required name="message" rows={4} placeholder="Metraż, planowany termin, zakres prac…" /></label>
          <label className="consent"><input required type="checkbox" /> <span>Zgadzam się na kontakt w sprawie wyceny i akceptuję politykę prywatności.</span></label>
          <button className="button form-button" type="submit">Wyślij zapytanie <span aria-hidden="true">↗</span></button>
          {sent && <p className="form-success" role="status">Dziękujemy. To demonstracyjny formularz — wiadomość nie została wysłana.</p>}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#start"><span className="brand-mark" aria-hidden="true">TB</span><span>THE BUILD</span></a>
        <p>Remonty i wykończenia, które trzymają poziom.</p>
        <nav aria-label="Nawigacja w stopce"><a href="#uslugi">Usługi</a><a href="#realizacje">Realizacje</a><a href="#proces">Proces</a><a href="#kontakt">Kontakt</a></nav>
        <div className="footer-bottom"><span>© 2026 The Build</span><span>Strona demonstracyjna</span><a href="#start">Do góry ↑</a></div>
      </footer>
    </main>
  );
}
