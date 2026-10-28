import { ArrowOut } from './Icon'
import { WizardPhoto } from './WizardPhoto'
import type { Project } from '../data/projects'

type ExhibitProps = {
  project: Project
  index: number
}

const plates = ['I', 'II', 'III', 'IV', 'V']
const reports = ['one', 'two', 'three', 'four', 'five']

export function Exhibit({ project, index }: ExhibitProps) {
  return (
    <article
      className={`story ${index % 2 === 1 ? 'story--reverse' : ''}`}
      id={`exhibit-${project.id}`}
    >
      <header className="story__head">
        <h3 className="story__title">{project.title}</h3>
        <p className="story__deck">{project.subtitle}</p>
        <p className="story__index">
          Report {reports[index] ?? index + 1}
          <span aria-hidden="true">·</span>
          {project.status}
          <span aria-hidden="true">·</span>
          {project.year}
        </p>
      </header>

      <div className="story__body">
        <div className="story__visual">
          {project.image ? (
            <WizardPhoto
              src={project.image.src}
              alt={project.image.alt}
              caption={project.image.caption}
              plate={plates[index] ?? 'I'}
              width={1440}
              height={900}
            />
          ) : null}
          {project.trace ? (
            <figure className="proof">
              <figcaption>Printer's proof · sort map</figcaption>
              <pre>{project.trace.join('\n')}</pre>
            </figure>
          ) : null}
        </div>

        <div className="story__text">
          <p className="dropcap story__lede">{project.abstract}</p>

          <h4>What was built</h4>
          <ol className="findings">
            {project.findings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ol>

          <p className="story__stack">
            <span>Working set</span>
            {project.stack.join(' · ')}
          </p>

          <div className="story__links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowOut className="icon" />
              </a>
            ))}
          </div>

          {project.note ? <p className="story__note">{project.note}</p> : null}
        </div>
      </div>
    </article>
  )
}
