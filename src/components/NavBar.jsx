export const links = [
  { to: '#home', label: 'Home' },
  { to: '#story', label: 'Our Story' },
  { to: '#rsvp', label: 'RSVP' },
  { to: '#details', label: 'Details' },
  { to: '#prenup', label: 'Prenup' },
  { to: '#playlist', label: 'Playlist' },
]

export default function NavBar() {
  function handleClick(e, to) {
    e.preventDefault()
    document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      {links.map((link) => (
        <a
          key={link.to}
          href={link.to}
          className="nav-link"
          onClick={(e) => handleClick(e, link.to)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
