import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span>DF-09 / Field archive</span>
        <a href="#top">Return to cover ↑</a>
      </div>

      <div className="footer__notes">
        <p>
          Independent design homage inspired by survival-horror archive aesthetics. Not
          affiliated with Capcom or the Resident Evil franchise; no game assets are used.
        </p>
        <p>
          Set in Archivo Narrow, Courier Prime, Open Sans, and Rajdhani — open stand-ins for the
          specified commercial faces. Live evidence captured 26 Oct 2026.
        </p>
        <p>Built with Bun, React, Three.js, and React Three Fiber. © 2026 {profile.name}.</p>
      </div>
    </footer>
  )
}
