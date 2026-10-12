import { useState } from 'react'
import { ArrowUpRight, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Pesan portofolio dari ${form.name}`)
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <PageTransition>
      <section className="page-hero container contact-hero">
        <span className="eyebrow">YOUR TURN / 05</span>
        <h1>Good things start<br />with <em>a hello.</em></h1>
        <p>Terbuka untuk obrolan seputar magang, peluang kerja pemula, project, atau sekadar bertukar ide.</p>
      </section>
      <section className="section container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">LET'S TALK</span><h2>Have a question<br />or an <em>opportunity?</em></h2>
          <p>Isi pesan di samping. Tombol kirim akan membuka aplikasi email dengan pesan yang sudah disiapkan.</p>
          <button className="email-copy" onClick={copyEmail}><span className="email-icon"><Mail size={19} /></span><span><small>EMAIL ME AT</small><strong>{profile.email}</strong></span><Copy size={16} /></button>
          <span className="copy-status" aria-live="polite">{copied ? 'Email berhasil disalin.' : 'Klik baris email untuk menyalin alamat.'}</span>
          <div className="contact-detail"><MapPin size={17} /><span>{profile.location}</span></div>
          <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="eyebrow">SEND A LITTLE NOTE</span>
          <label>Nama kamu<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Nama lengkap" /></label>
          <label>Email kamu<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="nama@email.com" /></label>
          <label>Pesan<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows="5" placeholder="Ceritakan sedikit tentang pesan atau peluangnya..." /></label>
          <button type="submit" className="button button-dark submit-button">Buka aplikasi email <ArrowUpRight size={17} /></button>
          <p className="form-note">Form ini tidak menyimpan data ke server. Pastikan alamat email di `src/data/portfolio.js` sudah diganti.</p>
        </form>
      </section>
    </PageTransition>
  )
}
