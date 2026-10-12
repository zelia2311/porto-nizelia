import { ArrowUpRight, GraduationCap, Sprout, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { journey } from '../data/portfolio'

const icons = { education: GraduationCap, project: Sprout, goal: Target }
export default function Journey() {
  return (
    <PageTransition>
      <section className="page-hero container">
        <span className="eyebrow">THE ROAD SO FAR / 04</span>
        <h1>Every step counts.<br /><em>Even the small ones.</em></h1>
        <p>Perjalanan belajar, project, dan arah yang ingin dituju. Tambahkan pengalaman nyata seiring waktu.</p>
      </section>
      <section className="section container journey-layout">
        <div className="journey-intro"><span className="eyebrow">A TIMELINE, NOT A RACE</span><h2>Still becoming<br /><em>who I want to be.</em></h2><p>Portofolio bukan hanya daftar hasil akhir. Ini juga ruang untuk mencatat proses, hal yang dipelajari, dan langkah berikutnya.</p><div className="journey-sticker">PROGRESS<br />OVER<br />PERFECTION ✳</div></div>
        <div className="timeline">{journey.map((item, i) => { const Icon = icons[item.kind] || Sprout; return <article className="timeline-item" key={item.title}><div className="timeline-marker"><Icon size={18} /></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><span className="timeline-place">{item.place}</span><p>{item.description}</p></div><span className="timeline-index">0{i + 1}</span></article> })}</div>
      </section>
      <section className="section section-tint"><div className="container center-cta"><SectionHeading eyebrow="WHAT'S NEXT" title={<>Open to learning, ready to <em>contribute.</em></>} text="Saya tertarik pada kesempatan magang atau entry-level yang memberi ruang untuk belajar sambil membantu tim menyelesaikan masalah nyata." align="center" /><Link className="button button-dark" to="/contact">Contact me <ArrowUpRight size={16} /></Link></div></section>
    </PageTransition>
  )
}
