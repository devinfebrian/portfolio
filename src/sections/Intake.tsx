import { SectionHead } from '../components/SectionHead'
import { profile } from '../data/profile'

const facts = [
  { label: 'Subject', value: profile.name },
  { label: 'Discipline', value: profile.role },
  { label: 'Focus', value: profile.focus },
  { label: 'Base', value: profile.location },
  { label: 'Education', value: profile.education },
]

export function Intake() {
  return (
    <section className="chapter chapter--statement" id="intake" aria-labelledby="intake-heading">
      <SectionHead
        id="intake-heading"
        title="A note from the desk"
        note="Section A · The statement"
      />

      <div className="statement">
        <aside className="statement__notebook" aria-label="Reporter's notebook">
          <h3>Reporter's notebook</h3>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt>Record</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/devinfebrian
                </a>
              </dd>
            </div>
          </dl>
          <p className="statement__note">
            No percentage claims, no skill sliders. The notebook records only what the portfolio
            can evidence.
          </p>
        </aside>

        <article className="statement__article">
          <p className="dropcap">
            Web systems, end to end: I build the interface, the API, the data model, and the
            machine-learning layer that makes the thing more than a form. Most of the work starts
            with a simple question and ends with a service another person can use.
          </p>
          <p>
            The exhibits below are the argument. They include a multi-service financial audit
            platform, a multi-agent game generator, and a small Python utility that does one job
            without ceremony. Live builds and repositories are linked where they exist; the
            repositories are the primary record.
          </p>
          <p>
            I studied informatics engineering at Universitas Pasundan and work from Indonesia. The
            useful part of the work is usually the unglamorous part: the boundary where the model
            meets the database, the retry that keeps a report honest, the interface that makes a
            complicated result legible.
          </p>
          <p className="signature">
            <span>Devin Febrian</span>
            <small>Fullstack engineer · systems and machine learning</small>
          </p>
        </article>
      </div>

      <p className="folio">A2 · The Febrian Prophet · The statement</p>
    </section>
  )
}
