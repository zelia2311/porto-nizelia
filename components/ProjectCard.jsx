import { ArrowUpRight, Layers3 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={`project-card ${project.accent || 'sage'}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -7, rotate: index % 2 === 0 ? -0.3 : 0.3 }}
    >
      <div className="project-art" aria-hidden="true">
        <span className="project-number">{project.id}</span>
        <div className="art-window">
          <div className="art-window-bar"><i /><i /><i /></div>
          <div className="art-window-content">
            <span className="art-kicker">DESIGN / BUILD</span>
            <span className="art-line wide" />
            <span className="art-line" />
            <div className="art-blocks"><i /><i /><i /></div>
          </div>
        </div>
        <span className="art-sticker"><Layers3 size={18} /></span>
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        {(project.demo || project.repo) && (
          <div className="project-links">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={15} /></a>}
          </div>
        )}
      </div>
    </motion.article>
  )
}
