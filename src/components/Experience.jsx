import { experience } from '../data';
import Arrow from './Arrow';

export default function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / PRACTICAL EXPERIENCE</span>
            <h2 id="experience-title">The methods.<br /><em>The implementation.</em></h2>
          </div>
          <p>Independent research and engineering projects,<br />supported by freelance software experience.</p>
        </div>
        <div className="experience-intro">
          <p>From vectorized features to database-backed workflows, my work combines quantitative investigation with the software needed to make it usable.</p>
          <span className="small-label">RESEARCH / INDEPENDENT PROJECTS / FREELANCE</span>
        </div>
        <div className="experience-list">
          {experience.map((entry, index) => (
            <article className="experience-entry" key={entry.id}>
              <div className="experience-meta">
                <span className="experience-index">0{index + 1}</span>
                <span className={`experience-kind ${entry.kind === 'Freelance' ? 'is-freelance' : ''}`}>{entry.kind}</span>
                <span className="small-label">{entry.context}</span>
              </div>
              <div className="experience-detail">
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
                <ul>{entry.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="experience-tools">{entry.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                {entry.link && <a className="text-link" href={entry.link} target="_blank" rel="noopener noreferrer">Related project <Arrow /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
