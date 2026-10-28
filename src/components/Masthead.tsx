import { profile } from '../data/profile'
import { SoundToggle } from './SoundToggle'

export function Masthead() {
  return (
    <header className="masthead">
      <a className="masthead__mark" href="#top" aria-label="Back to the top of the file">
        <span className="masthead__seal" aria-hidden="true">
          DF
        </span>
        <span className="masthead__name">
          Field archive <em>/ 09</em>
        </span>
      </a>

      <div className="masthead__right">
        <span className="masthead__status">{profile.name} · file active</span>
        <SoundToggle />
      </div>
    </header>
  )
}
