import type { Project } from '../data/projects'

type ExhibitProps = {
  project: Project
  index: number
}

export function Exhibit({ project, index }: ExhibitProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <details
      className={`exhibit exhibit--${number}`}
      id={`exhibit-${project.id}`}
      open={index === 0 ? true : undefined}
    >
      <summary className="exhibit__summary">
        <span className="exhibit__tab">{project.caseId}</span>
        <span className="exhibit__head">
          <span className="exhibit__title" role="heading" aria-level={3}>
            {project.title}
          </span>
          <span className="exhibit__filing">
            <span>{project.status}</span>
            <span>{project.year}</span>
          </span>
        </span>
        <span className="exhibit__subtitle">{project.subtitle}</span>
        <span className="exhibit__abstract">{project.abstract}</span>
        <span className="exhibit__cue" aria-hidden="true">
          <span className="exhibit__cue-open">Open file</span>
          <span className="exhibit__cue-close">Close file</span>
          <span className="exhibit__plus">
            <span>+</span>
          </span>
        </span>
      </summary>

      <div className="exhibit__body">
        <div className="exhibit__body-grid">
          <div className="exhibit__visual">
            {project.image ? (
              <figure className="evidence">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1440}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>Fig. {number}</span>
                  {project.image.caption}
                </figcaption>
              </figure>
            ) : null}
            {project.trace ? (
              <figure className="trace">
                <figcaption>Sort map / repository record</figcaption>
                <pre>{project.trace.join('\n')}</pre>
              </figure>
            ) : null}
          </div>

          <div className="exhibit__record">
            <h3>Findings</h3>
            <ol className="findings">
              {project.findings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ol>

            <h3>Technical record</h3>
            <ul className="tags" aria-label={`${project.title} stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="exhibit__links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            {project.note ? <p className="exhibit__note">{project.note}</p> : null}
          </div>
        </div>
      </div>
    </details>
  )
}
