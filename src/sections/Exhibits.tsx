import { SectionHead } from '../components/SectionHead'
import { Exhibit } from '../components/Exhibit'
import { projects, strayLinks } from '../data/projects'

export function Exhibits() {
  return (
    <section
      className="chapter chapter--exhibits"
      id="exhibits"
      aria-labelledby="exhibits-heading"
    >
      <SectionHead
        id="exhibits-heading"
        title="Exhibits"
        note="Three files / live builds and source"
      />

      <div className="exhibits">
        {projects.map((project, index) => (
          <Exhibit key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="strays">
        <span className="strays__label">Also on file</span>
        <ul>
          {strayLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
