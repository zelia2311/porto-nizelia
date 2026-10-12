import { ArrowUpRight, Heart, Lightbulb, MousePointer2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <PageTransition>
      <section className="page-hero container">
        <span className="eyebrow">A LITTLE ABOUT ME / 01</span>
        <h1>Not just what I do,<br /><em>but how I think.</em></h1>
        <p>Perkenalan singkat tentang orang di balik project, rasa ingin tahu, dan proses belajarnya.</p>
      </section>
      <section className="section container about-layout">
        <div className="about-visual"><div className="about-visual-paper"><span className="paper-stamp">HELLO<br />THERE!</span><span className="paper-monogram">NK</span><span className="paper-bottom">CURIOUS BY DEFAULT · LEARNING EVERY DAY</span></div><span className="about-doodle">↗</span></div>
        <div className="about-copy">
          <span className="eyebrow">THE HUMAN BEHIND THE SCREEN</span>
          <h2>Hi, I'm {profile.shortName}<span className="period">.</span></h2>
          <p>{profile.intro}</p>
          <p>Saya tertarik pada titik temu antara teknologi dan pengalaman pengguna: bagaimana sebuah website bukan hanya berfungsi, tetapi juga terasa jelas, nyaman, dan menyenangkan digunakan.</p>
          <p>Saya masih dalam proses belajar. Karena itu, saya terbuka untuk menerima masukan, mencoba pendekatan baru, dan bekerja sama dengan orang-orang yang bisa membantu saya berkembang.</p>
          <div className="about-facts"><div><span>STUDYING</span><strong>{profile.education}</strong></div><div><span>BASED IN</span><strong>{profile.location}</strong></div><div><span>INTERESTS</span><strong>Web · UI · Information Systems</strong></div></div>
          <a className="text-link" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <section className="section section-tint"><div className="container"><SectionHeading eyebrow="WHAT MATTERS TO ME" title={<>A few things I bring <em>to the table.</em></>} /><div className="values-grid"><article><span className="value-icon"><Lightbulb /></span><h3>Curiosity first</h3><p>Berani bertanya, mencari referensi, dan mencoba memahami alasan di balik sebuah solusi.</p></article><article><span className="value-icon"><Heart /></span><h3>Thoughtful details</h3><p>Memperhatikan detail agar informasi lebih mudah dipahami dan antarmuka terasa konsisten.</p></article><article><span className="value-icon"><MousePointer2 /></span><h3>Learn by making</h3><p>Mengembangkan kemampuan melalui latihan, project kecil, evaluasi, dan perbaikan berulang.</p></article></div></div></section>
      <section className="section container center-cta"><h2>More curious than ever.</h2><p>Yuk, lihat apa yang sedang saya buat.</p><Link className="button button-dark" to="/projects">Explore my work <ArrowUpRight size={16} /></Link></section>
    </PageTransition>
  )
}
