import { ArrowDown, ArrowOut } from '../components/Icon'
import { WizardPhoto } from '../components/WizardPhoto'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const contents = [
  { href: '#intake', label: 'The statement', mark: 'A' },
  { href: '#exhibits', label: 'The portfolio', mark: 'B' },
  { href: '#field-kit', label: 'The workshop', mark: 'C' },
  { href: '#checkout', label: 'Letters to the editor', mark: 'D' },
]

const date = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date())

const leadProject = projects[0]

export function Cover() {
  return (
    <section className="cover" id="top" aria-labelledby="cover-title">
      <div className="cover__edition">
        <span>Vol. IX · No. 09</span>
        <span className="cover__edition-mid">The morning edition</span>
        <span>{date}</span>
        <span>Price: two knuts</span>
      </div>

      <div className="cover__masthead">
        <span className="cover__rule" aria-hidden="true" />
        <h1 id="cover-title">
          <span className="cover__the">The</span>
          <span className="cover__title">Febrian Prophet</span>
        </h1>
        <span className="cover__rule cover__rule--double" aria-hidden="true" />
        <p className="cover__tagline">
          {profile.name}
          <span aria-hidden="true">·</span>
          {profile.role}
          <span aria-hidden="true">·</span>
          {profile.focus}
          <span aria-hidden="true">·</span>
          {profile.location}
        </p>
      </div>

      <span className="cover__stamp" aria-hidden="true">
        Morning
        <br />
        edition
      </span>

      <div className="cover__lead">
        <article className="lead-story">
          <h2>He builds the whole system — then teaches it to think.</h2>
          <p className="lead-story__deck">
            Devin Febrian works across the interface, the API, the data model, and the
            machine-learning layer. Three shipped projects make the case.
          </p>
          <a className="cover__action" href="#exhibits">
            <span>Turn to the portfolio</span>
            <ArrowDown className="icon" />
          </a>
          <p className="lead-story__byline">
            <span>By the editor</span>
            <span>Filed from {profile.location}</span>
            <span>{date}</span>
          </p>
          <p className="dropcap">
            The work is web systems, end to end: the interface, the API, the data model, and the
            machine-learning layer that makes the thing more than a form. Most of it starts with
            a simple question and ends with a service another person can use.
          </p>
          <p>
            The reports that follow cover a multi-service financial audit platform, a multi-agent
            game studio, and a small Python utility that does one job without ceremony. Live
            builds and repositories are linked where they exist. The repositories remain the
            primary record.
          </p>
        </article>

        <aside className="cover__visual" aria-label="Featured photograph">
          {leadProject.image ? (
            <WizardPhoto
              src={leadProject.image.src}
              alt={leadProject.image.alt}
              caption={leadProject.image.caption}
              plate="I"
              width={1440}
              height={900}
            />
          ) : null}
          <p className="cover__photo-note">The photograph stirs when held.</p>
        </aside>

        <aside className="cover__contents" aria-label="Inside this edition">
          <h2 className="cover__contents-title">Inside this edition</h2>
          <ol>
            {contents.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span className="cover__contents-mark" aria-hidden="true">
                    {item.mark}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="cover__column-note">
            <h3>Edition notes</h3>
            <p>Three reports. Two live builds. One public record.</p>
            <p>Built with Bun, React, and React Three Fiber.</p>
          </div>
        </aside>
      </div>

      <div className="cover__foot">
        <p className="cover__note">The repositories are the primary record.</p>
        <div className="cover__record">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowOut className="icon" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <ArrowOut className="icon" />
          </a>
        </div>
        <span className="cover__folio">1 · The Febrian Prophet · Morning edition</span>
      </div>
    </section>
  )
}
