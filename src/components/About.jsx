import { skills } from '../data';

export default function About() {
  return (
    <section className="about-section page-width" id="about" aria-labelledby="about-title">
      <span className="eyebrow">03 / MATHEMATICS MEETS ENGINEERING</span>
      <div className="about-grid">
        <h2 id="about-title">Curiosity, with<br /><em>a testable question.</em></h2>
        <div className="about-copy">
          <p className="large-copy">I’m Tolbert, a Mathematics & Computer Science student building toward a career in quantitative engineering and data.</p>
          <p>My independent work explores time-series features, model inference, and evaluation. I’m interested in the details that make a result useful: which data was available, what was held out, how the model behaves, and what the experiment cannot tell us.</p>
          <p>Freelance software work has also given me practice connecting interfaces, APIs, and relational databases. I’m open to opportunities in Python, data, and quantitative engineering where I can contribute to a team and keep developing my craft.</p>
          <a className="text-link" href="/resume.pdf" download="Tolbert-Okoth-Asumba-Resume.pdf">Download my résumé <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div className="skill-group" key={category}>
            <span className="small-label">0{index + 1} / {category.toUpperCase()}</span>
            <p>{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
