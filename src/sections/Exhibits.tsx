import { SectionHead } from '../components/SectionHead'
import { Exhibit } from '../components/Exhibit'
import { ArrowOut } from '../components/Icon'
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
        title="The portfolio"
        note="Section B · Three reports"
      />

      <div className="stories">
        {projects.map((project, index) => (
          <Exhibit key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="strays">
        <h3>Also in the record</h3>
        <ul>
          {strayLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowOut className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="folio">B1 · The Febrian Prophet · The portfolio</p>
    </section>
  )
}
