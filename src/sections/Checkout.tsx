import { SectionHead } from '../components/SectionHead'
import { ArrowOut } from '../components/Icon'
import { profile } from '../data/profile'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'LinkedIn',
    value: 'in/devinfebrian',
    href: profile.linkedin,
  },
  {
    label: 'GitHub',
    value: 'devinfebrian',
    href: profile.github,
  },
]

export function Checkout() {
  return (
    <section
      className="chapter chapter--letters"
      id="checkout"
      aria-labelledby="checkout-heading"
    >
      <SectionHead
        id="checkout-heading"
        title="Letters to the editor"
        note="Section D · Correspondence"
      />

      <div className="letters">
        <div className="letters__lead">
          <h3>Write to the desk.</h3>
          <p>
            For work, collaboration, or a question about any report in this edition. The
            repositories remain the primary record.
          </p>
          <a className="letters__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className="letters__channels">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label === 'Email' ? undefined : '_blank'}
              rel={channel.label === 'Email' ? undefined : 'noreferrer'}
            >
              <span className="letters__channel">{channel.label}</span>
              <span className="letters__value">{channel.value}</span>
              <ArrowOut className="icon" />
            </a>
          ))}
        </div>

        <span className="letters__stamp" aria-hidden="true">
          Reply
          <br />
          requested
        </span>
      </div>

      <p className="folio">D1 · The Febrian Prophet · Letters</p>
    </section>
  )
}
