import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'

export function Intake() {
  return (
    <section className="chapter chapter--intake" id="intake" aria-labelledby="intake-heading">
      <SectionHead id="intake-heading" title="Intake statement" note="Form 09-A / subject record" />

      <article className="form-sheet">
        <div className="form-sheet__top">
          <span>Subject intake</span>
          <span>Restricted / active</span>
        </div>

        <div className="form-sheet__grid">
          <div className="form-sheet__fields">
            <dl>
              <div>
                <dt>Subject</dt>
                <dd>{profile.name}</dd>
              </div>
              <div>
                <dt>Discipline</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{profile.focus}</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>{profile.education}</dd>
              </div>
              <div>
                <dt>Record</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    github.com/devinfebrian
                  </a>
                </dd>
              </div>
            </dl>

            <div className="subject-mark" aria-hidden="true">
              <span>DF</span>
              <small>Subject present</small>
            </div>
          </div>

          <div className="form-sheet__statement">
            <p className="dropcap">
              Web systems, end to end: I build the interface, the API, the data model, and the
              machine-learning layer that makes the thing more than a form. Most of the work
              starts with a simple question and ends with a service another person can use.
            </p>
            <p>
              The exhibits below are the argument. They include a multi-service financial audit
              platform, a multi-agent game generator, and a small Python utility that does one
              job without ceremony. Live builds and repositories are linked where they exist;
              the repositories are the primary record.
            </p>
            <p className="signature">
              <span>Devin Febrian</span>
              <small>Subject / fullstack engineer</small>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
