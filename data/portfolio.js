// Ubah data di file ini agar seluruh halaman mengikuti profil Anda.
// Jangan lupa mengganti placeholder kontak dan tautan sebelum website dipublikasikan.

export const profile = {
  name: 'Nizelia Khairunisa',
  shortName: 'Nizelia',
  role: 'Informatics Management Student',
  headline: 'Membuat hal digital terasa lebih manusiawi.',
  intro: 'Saya mahasiswa Manajemen Informatika yang tertarik pada pengembangan web, desain digital, dan solusi sistem informasi yang mudah digunakan.',
  location: 'Palembang, Indonesia',
  education: 'D4 Manajemen Informatika · Politeknik Negeri Sriwijaya',
  email: 'emailkamu@example.com', // Ganti dengan email aktif
  github: 'https://github.com/username-kamu', // Ganti dengan profil GitHub
  linkedin: 'https://www.linkedin.com/in/username-kamu/', // Ganti dengan profil LinkedIn
  portraitUrl: '', // Opsional: contoh '/images/foto-profil.jpg'
  availability: 'Terbuka untuk kesempatan magang',
}

export const projects = [
  {
    id: '01',
    title: 'Website Profil Jurusan MI',
    category: 'Web Development · Project akademik',
    description: 'Konsep website informasi jurusan untuk merapikan akses ke profil, informasi dosen, mahasiswa, galeri, berita, dan kontak.',
    stack: ['PHP', 'MySQL', 'HTML/CSS'],
    status: 'Project akademik',
    accent: 'sage',
    type: 'Web',
    demo: '',
    repo: '',
  },
  {
    id: '02',
    title: 'Kumauini — UMKM Digital',
    category: 'UI Design · Web Concept',
    description: 'Konsep website brand makanan dengan nuansa earth tone, katalog produk, halaman tentang brand, dan tampilan responsif.',
    stack: ['React', 'CSS', 'Responsive UI'],
    status: 'Konsep / prototype',
    accent: 'clay',
    type: 'UI/UX',
    demo: '',
    repo: '',
  },
  {
    id: '03',
    title: 'SI-KABA — Reservasi Kantin',
    category: 'System Analysis · Academic',
    description: 'Rancangan sistem reservasi dan monitoring kantin, berfokus pada alur pengguna dan pemodelan sistem.',
    stack: ['System Analysis', 'DFD', 'UML'],
    status: 'Rancangan akademik',
    accent: 'butter',
    type: 'System',
    demo: '',
    repo: '',
  },
]

export const skills = [
  { name: 'HTML & CSS', level: 'Sedang dipelajari', group: 'Web' },
  { name: 'JavaScript', level: 'Sedang dipelajari', group: 'Web' },
  { name: 'React + Vite', level: 'Sedang dipelajari', group: 'Web' },
  { name: 'PHP & MySQL', level: 'Pernah digunakan di project', group: 'Web' },
  { name: 'Figma / UI design', level: 'Dasar', group: 'Design' },
  { name: 'DFD & UML', level: 'Materi akademik', group: 'Analysis' },
  { name: 'Microsoft Office', level: 'Dasar–menengah', group: 'Tools' },
  { name: 'Git & GitHub', level: 'Sedang dipelajari', group: 'Tools' },
]

export const learningNow = ['React component & routing', 'Responsive interface', 'Git workflow']

export const journey = [
  {
    date: 'Saat ini',
    title: 'D4 Manajemen Informatika',
    place: 'Politeknik Negeri Sriwijaya',
    description: 'Mempelajari pengembangan aplikasi, basis data, analisis sistem, dan teknologi informasi.',
    kind: 'education',
  },
  {
    date: 'Project akademik',
    title: 'Website dan rancangan sistem',
    place: 'Pembelajaran mandiri dan perkuliahan',
    description: 'Membangun latihan website serta membuat dokumentasi dan model sistem sebagai bagian dari proses belajar.',
    kind: 'project',
  },
  {
    date: 'Berikutnya',
    title: 'Mencari pengalaman profesional',
    place: 'Magang / entry-level opportunity',
    description: 'Ingin menerapkan kemampuan, belajar dari tim, dan berkontribusi pada project nyata.',
    kind: 'goal',
  },
]
