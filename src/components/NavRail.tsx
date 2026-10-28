import { navItems } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navItems.map((item) => item.id)

export function NavRail() {
  const active = useActiveSection(ids)

  return (
    <nav className="nav" aria-label="Edition sections">
      <ol className="nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="nav__link"
              aria-current={active === item.id ? 'location' : undefined}
            >
              <span className="nav__mark" aria-hidden="true">
                {item.mark}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
