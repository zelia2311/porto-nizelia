import { ArrowDown, ArrowUpRight, MoveUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Marquee from '../components/Marquee'
import { profile, projects, learningNow } from '../data/portfolio'

export default function Home() {
  return (
    <PageTransition>
      <div id="top" className="container hero">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .12 }}>
            <span className="availability-dot" /> {profile.availability}
          </motion.div>
          <p className="eyebrow hero-eyebrow">PORTFOLIO / 2026 — HELLO, WORLD!</p>
          <h1>Curious mind.<br /><span>Creative</span> by nature<span className="period">.</span></h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/projects">Jelajahi project <MoveUpRight size={17} /></Link>
            <Link className="text-link" to="/about">Kenali saya <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-footnote"><span className="scribble-arrow">↘</span><span>Scroll to explore<br />a little world of mine</span></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <motion.div className="hero-sun" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}><span>✳</span></motion.div>
          <motion.div className="hero-card hero-card-main" initial={{ opacity: 0, scale: .9, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ duration: .65, delay: .15 }}>
            {profile.portraitUrl ? <img className="profile-photo" src={profile.portraitUrl} alt={`Foto ${profile.name}`} /> : (
              <div className="portrait-placeholder"><span className="portrait-spark">✳</span><span className="portrait-initials">NK</span><span className="portrait-caption">A WORK IN PROGRESS<br />& A MIND FULL OF IDEAS</span></div>
            )}
            <div className="hero-card-label"><span>THE PERSON BEHIND THE PIXELS</span><ArrowUpRight size={17} /></div>
          </motion.div>
          <motion.div className="floating-note note-top" animate={{ y: [0, -8, 0], rotate: [5, 7, 5] }} transition={{ duration: 4, repeat: Infinity }}>good ideas<br />grow here <Sparkles size={18} /></motion.div>
          <motion.div className="floating-note note-bottom" animate={{ y: [0, 7, 0], rotate: [-7, -4, -7] }} transition={{ duration: 5, repeat: Infinity }}>learn / make / repeat</motion.div>
          <span className="hero-side-note">BASED IN {profile.location.toUpperCase()}</span>
        </div>
      </div>

      <Marquee />

      <section className="section container intro-section">
        <div className="intro-label"><span className="eyebrow">01 / A LITTLE INTRO</span><span className="tiny-star">✳</span></div>
        <div className="intro-content">
          <h2>Belajar teknologi,<br />sambil menjaga <em>rasa ingin tahu.</em></h2>
          <p>Saya menikmati proses mengubah ide menjadi sesuatu yang bisa dilihat, dicoba, dan digunakan. Saat ini saya sedang membangun fondasi di web development dan analisis sistem—satu project dalam satu waktu.</p>
          <Link className="text-link" to="/about">More about me <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-topline"><span className="eyebrow">02 / SELECTED WORK</span><Link to="/projects" className="text-link">All projects <ArrowUpRight size={16} /></Link></div>
          <SectionHeading title={<>Small steps, <em>real progress.</em></>} text="Beberapa project akademik dan konsep latihan. Status setiap project ditulis apa adanya—detail dan tautan bisa kamu lengkapi nanti." />
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section container learning-section">
        <div className="learning-copy"><span className="eyebrow">03 / CURRENTLY EXPLORING</span><h2>Always a student.<br /><em>Always in motion.</em></h2><p>Hal-hal yang sedang saya pelajari dan latih. Progress tidak harus sempurna untuk mulai dibagikan.</p><Link to="/skills" className="text-link">See my toolkit <ArrowUpRight size={16} /></Link></div>
        <div className="learning-list">{learningNow.map((item, i) => <div className="learning-item" key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div>)}</div>
      </section>

      <section className="contact-strip">
        <div className="container contact-strip-inner"><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let’s make room<br />for <em>good things.</em></h2><Link className="button button-cream" to="/contact">Get in touch <ArrowUpRight size={17} /></Link><span className="strip-star">✳</span></div>
      </section>
    </PageTransition>
  )
}
