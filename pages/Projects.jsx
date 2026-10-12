import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

const filters = ['All', 'Web', 'UI/UX', 'System']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((p) => p.type === filter)
  return (
    <PageTransition>
      <section className="page-hero container">
        <span className="eyebrow">THE PLAYGROUND / 02</span>
        <h1>Ideas, experiments<br />& <em>things in progress.</em></h1>
        <p>Kumpulan project latihan, akademik, dan konsep. Buka file data untuk menambah karya, detail, atau link demo.</p>
      </section>
      <section className="section container projects-page">
        <div className="filter-row" aria-label="Filter project">{filters.map((item) => <button key={item} className={`filter-button ${filter === item ? 'selected' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}<span className="filter-count">{visibleProjects.length} PROJECT{visibleProjects.length === 1 ? '' : 'S'}</span></div>
        <div className="project-grid project-grid-page">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <div className="project-note"><span className="note-star">✳</span><div><h3>Got something in mind?</h3><p>Jika ada kesempatan magang, kolaborasi, atau feedback untuk project, silakan hubungi saya.</p></div><a className="text-link" href="/contact">Let's connect <ArrowUpRight size={16} /></a></div>
      </section>
    </PageTransition>
  )
}
