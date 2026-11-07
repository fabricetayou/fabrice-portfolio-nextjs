const skills = ['Next.js', 'React', 'TypeScript', 'Node.js', 'CSS'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Fabrice Tayou, accueil">
          FT<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a className="nav-contact" href="#contact">
            Me contacter <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portfolio personnel</p>
          <h1>Bonjour, je suis<br /><span>Fabrice Tayou.</span></h1>
          <p className="hero-description">
            Développeur web, je conçois des expériences numériques claires,
            accessibles et agréables à utiliser.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Parlons de votre projet <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#apropos">Découvrir mon profil <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Illustration abstraite" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-center">FT<span>.</span></div>
          <span className="art-caption">CRÉER · APPRENDRE · PARTAGER</span>
          <span className="art-star" aria-hidden="true">✳</span>
        </div>
        <a className="scroll-hint" href="#apropos"><span /> Faire défiler</a>
      </section>

      <section className="about section-wrap" id="apropos">
        <div className="section-label"><span>01</span> À PROPOS</div>
        <div className="about-content">
          <h2>Le numérique, avec <span>intention.</span></h2>
          <p>
            J’aime transformer des idées en interfaces utiles et soignées. De la
            première esquisse au dernier détail, je cherche le bon équilibre entre
            simplicité, performance et expérience utilisateur.
          </p>
          <p>
            Ce portfolio présente mon univers et les technologies que j’explore.
            Il évoluera au fil de mes projets et de mon parcours.
          </p>
        </div>
      </section>

      <section className="skills section-wrap" id="competences">
        <div className="section-label"><span>02</span> COMPÉTENCES</div>
        <div className="skills-content">
          <h2>Des outils pour<br />donner vie aux idées.</h2>
          <p>Technologies et pratiques que j’utilise pour créer le web d’aujourd’hui.</p>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={skill}><span className="skill-index">0{index + 1}</span>{skill}<span className="skill-arrow" aria-hidden="true">↗</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">UNE IDÉE EN TÊTE ?</p>
          <h2>Créons quelque<br />chose de <span>bien.</span></h2>
          <p className="contact-description">Ouvert aux échanges et aux nouvelles opportunités.</p>
          <a className="button button-light" href="mailto:contact@fabricetayou.dev">Écrivez-moi <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-decoration" aria-hidden="true">✳</div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#accueil">FT<span>.</span></a>
        <p>Conçu avec soin · © {new Date().getFullYear()} Fabrice Tayou</p>
        <a href="#accueil" className="back-top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
