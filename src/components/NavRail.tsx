import { navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navItems.map((item) => item.id)

export function NavRail() {
  const active = useActiveSection(ids)

  return (
    <nav className="nav" aria-label="Archive index">
      <span className="nav__label">Index</span>
      <ol className="nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="nav__link"
              aria-current={active === item.id ? 'location' : undefined}
            >
              <span className="nav__tick" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <span className="nav__foot">
        {profile.name} / DF-09
      </span>
    </nav>
  )
}
