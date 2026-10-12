import { ArrowUpRight, Braces, Database, Figma, GitBranch, Monitor, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { skills, learningNow } from '../data/portfolio'

const icons = { Web: Monitor, Design: Figma, Analysis: Workflow, Tools: GitBranch }
export default function Skills() {
  const groups = [...new Set(skills.map((skill) => skill.group))]
  return (
    <PageTransition>
      <section className="page-hero container">
        <span className="eyebrow">TOOLS & THINGS I LEARN / 03</span>
        <h1>My toolkit is<br /><em>a work in progress.</em></h1>
        <p>Daftar kemampuan ini sengaja memakai label tingkat pengalaman agar jelas mana yang sudah pernah dipakai dan mana yang masih dipelajari.</p>
      </section>
      <section className="section container">
        <SectionHeading eyebrow="SKILLS & TOOLKIT" title={<>Learning, one <em>layer at a time.</em></>} />
        <div className="skills-groups">{groups.map((group) => { const Icon = icons[group] || Braces; return <div className="skill-group" key={group}><div className="skill-group-title"><span className="skill-group-icon"><Icon size={19} /></span><h3>{group}</h3><span>{skills.filter(s => s.group === group).length} ITEMS</span></div><div className="skill-rows">{skills.filter(s => s.group === group).map((skill) => <div className="skill-row" key={skill.name}><strong>{skill.name}</strong><span>{skill.level}</span></div>)}</div></div> })}</div>
      </section>
      <section className="section section-tint"><div className="container learning-page"><div><span className="eyebrow">ON MY DESK RIGHT NOW</span><h2>Current learning<br /><em>playlist.</em></h2><p>Topik yang ingin terus dilatih lewat project kecil dan latihan rutin.</p></div><div className="learning-list">{learningNow.map((item, i) => <div className="learning-item" key={item}><span>0{i + 1}</span><strong>{item}</strong><Database size={16} /></div>)}</div></div></section>
      <section className="section container center-cta"><h2>Skills grow with practice.</h2><p>Temukan penerapan skill di halaman project.</p><Link className="button button-dark" to="/projects">View projects <ArrowUpRight size={16} /></Link></section>
    </PageTransition>
  )
}
