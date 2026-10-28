import { ArrowUp } from '../components/Icon'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span>The Febrian Prophet · Vol. IX, No. 09</span>
        <a href="#top">
          Return to page one
          <ArrowUp className="icon" />
        </a>
      </div>

      <div className="footer__notes">
        <p>
          Independent design homage to wizarding-newspaper art direction. Not affiliated with
          Warner Bros. or the Harry Potter franchise; no franchise assets are used.
        </p>
        <p>
          Set in Besley, Newsreader, Courier Prime, and Archivo Narrow, self-hosted through
          Fontsource. Evidence captured 26 Oct 2026.
        </p>
        <p>Built with Bun, React, Three.js, and React Three Fiber. © 2026 {profile.name}.</p>
      </div>

      <p className="footer__end">End of edition</p>
    </footer>
  )
}
