import { SectionHead } from '../components/SectionHead'
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
      className="chapter chapter--checkout"
      id="checkout"
      aria-labelledby="checkout-heading"
    >
      <SectionHead
        id="checkout-heading"
        title="Checkout"
        note="End of file / start of correspondence"
      />

      <div className="checkout">
        <div className="checkout__lead">
          <p>If the file raises a question, open a channel.</p>
          <a className="checkout__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p className="checkout__context">
            For work, collaboration, or a question about any exhibit. The repositories remain the
            primary record.
          </p>
        </div>

        <div className="checkout__channels">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label === 'Email' ? undefined : '_blank'}
              rel={channel.label === 'Email' ? undefined : 'noreferrer'}
            >
              <span className="checkout__channel">{channel.label}</span>
              <span className="checkout__value">{channel.value}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <span className="checkout__stamp" aria-hidden="true">
          Case
          <br />
          open
        </span>
      </div>
    </section>
  )
}
