import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['Journey', '/journey'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Navigasi utama">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Ke halaman beranda">
          <span className="brand-mark">n.</span>
          <span className="brand-name">{profile.shortName}<small>PORTFOLIO / 2026</small></span>
        </Link>
        <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="nav-cta">Let's talk <ArrowUpRight size={15} /></Link>
        </div>
      </nav>
    </header>
  )
}
