import { projects, projectFilters } from '../data';
import Arrow from './Arrow';
import ProjectVisual from './ProjectVisual';
import './ProjectList.css';

export default function ProjectList({ filter, setFilter, visibleProjects }) {
  return (
    <section className="work-section engineering-work" id="work" aria-labelledby="work-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED ENGINEERING</span>
            <h2 id="work-title">Research into<br /><em>working systems.</em></h2>
          </div>
          <p>Data processing, model evaluation,<br />and the infrastructure around the research.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filter engineering projects">
          {projectFilters.map(label => {
            const count = projects.filter(project => label === 'All work' || project.categories.includes(label)).length;
            return (
              <button
                key={label}
                className={filter === label ? 'filter active' : 'filter'}
                aria-pressed={filter === label}
                aria-controls="project-results"
                aria-label={`${label}, ${count} ${count === 1 ? 'project' : 'projects'}`}
                onClick={() => setFilter(label)}
              >
                {label}<span aria-hidden="true">{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>
        <p className="projects-sr-only" role="status" aria-live="polite">
          Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} for {filter}.
        </p>
        <div className="project-list" id="project-results">
          {visibleProjects.map(project => {
            const number = String(projects.findIndex(item => item.id === project.id) + 1).padStart(2, '0');
            return (
              <article className="project" key={project.id} aria-labelledby={`project-${project.id}`}>
                <ProjectVisual project={project} number={number} />
                <div className="project-copy">
                  <span className="project-number">PROJECT {number} / {project.categoryLabel}</span>
                  <h3 id={`project-${project.id}`}>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <h4 className="project-section-label">Engineering focus</h4>
                  <ul className="project-highlights">
                    {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  {project.evaluation && (
                    <div className="project-evaluation">
                      <h4 className="project-section-label">Evaluation & scope</h4>
                      <p>{project.evaluation}</p>
                    </div>
                  )}
                  <div className="tech-list" aria-label="Technologies">
                    {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-actions">
                    {project.github ? (
                      <a className="text-link project-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title} repository (opens in a new tab)`}>
                        Explore repository <Arrow />
                      </a>
                    ) : project.sourceLabel && <span className="project-source-note">{project.sourceLabel}</span>}
                    {project.notes && (
                      <details className="project-notes">
                        <summary aria-label={`Engineering notes for ${project.title}`}>Engineering notes</summary>
                        <p>{project.notes}</p>
                      </details>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
