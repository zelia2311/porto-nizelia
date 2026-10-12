import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <span className="eyebrow">ADA IDE? LET'S CONNECT</span>
          <h2>Let’s make something<br /><em>meaningful.</em></h2>
        </div>
        <Link to="/contact" className="round-arrow" aria-label="Ke halaman kontak"><ArrowUpRight size={26} /></Link>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Dibuat dengan proses belajar.</span>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><ArrowUpRight size={17} /></a>
        </div>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}
