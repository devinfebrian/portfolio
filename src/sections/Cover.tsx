import { profile } from '../data/profile'
import { projects } from '../data/projects'

const contents = [
  { href: '#intake', label: 'Intake statement', mark: 'A' },
  { href: '#exhibits', label: 'Exhibits', mark: 'B' },
  { href: '#field-kit', label: 'Field kit', mark: 'C' },
  { href: '#checkout', label: 'Checkout', mark: 'D' },
]

export function Cover() {
  return (
    <section className="cover" id="top" aria-labelledby="cover-title">
      <div className="cover__tabs" aria-label="Featured files">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={`#exhibit-${project.id}`}
            className={`cover__tab cover__tab--${index + 1}`}
          >
            <span>{project.title}</span>
            <em>{project.caseId}</em>
          </a>
        ))}
      </div>

      <div className="cover__sheet">
        <div className="cover__fileline">
          <span>Case file DF-09</span>
          <span>Wrenwood archive / 2026</span>
        </div>

        <span className="cover__stamp" aria-hidden="true">
          File
          <br />
          09
        </span>

        <h1 id="cover-title">
          <span>Devin</span>
          <span>Febrian</span>
        </h1>

        <p className="cover__role">
          <span className="cover__role-primary">Fullstack engineer</span>
          <span className="cover__role-sep" aria-hidden="true">/</span>
          <span className="cover__role-secondary">Systems &amp; machine learning</span>
        </p>

        <p className="cover__note">
          A working file of systems built, shipped, and still under observation. The evidence
          follows.
        </p>

        <a className="cover__open" href="#exhibits">
          <span>Open the exhibits</span>
          <span aria-hidden="true">↓</span>
        </a>

        <div className="cover__contents">
          <span className="cover__contents-label">File contents</span>
          <ol>
            {contents.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span>{item.label}</span>
                  <em>{item.mark}</em>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="cover__meta">
          <span>Origin / {profile.location}</span>
          <span>Record / github.com/devinfebrian</span>
          <span>Rev / 2026.10</span>
        </div>

        <div className="cover__bleed" aria-hidden="true">
          <span>Evidence continues</span>
          <strong>09</strong>
        </div>
      </div>

      <nav className="cover__mobile-tabs" aria-label="Featured exhibits">
        {projects.map((project) => (
          <a key={project.id} href={`#exhibit-${project.id}`}>
            <span>{project.title}</span>
            <em>{project.caseId}</em>
          </a>
        ))}
      </nav>

      <span className="cover__thread" aria-hidden="true" />
    </section>
  )
}
