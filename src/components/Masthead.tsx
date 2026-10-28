import { profile } from '../data/profile'
import { SoundToggle } from './SoundToggle'

export function Masthead() {
  return (
    <header className="masthead">
      <a className="masthead__mark" href="#top" aria-label="The Febrian Prophet, back to page one">
        <span className="masthead__monogram" aria-hidden="true">
          FP
        </span>
        <span className="masthead__name">The Febrian Prophet</span>
      </a>

      <div className="masthead__right">
        <span className="masthead__status">
          {profile.name} <span aria-hidden="true">·</span> Portfolio edition
        </span>
        <SoundToggle />
      </div>
    </header>
  )
}
