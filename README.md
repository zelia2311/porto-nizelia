# Creative Playground Portfolio

Portofolio pribadi berbasis React + Vite dengan palet earth tone, interaksi cursor, parallax ringan, transisi halaman, dan layout responsif.

## Menjalankan di komputer

1. Install Node.js versi LTS dari https://nodejs.org/
2. Ekstrak folder project.
3. Buka folder ini di VS Code.
4. Buka Terminal > New Terminal.
5. Jalankan:

   ```bash
   npm install
   npm run dev
   ```

6. Buka URL lokal yang muncul di terminal (umumnya `http://localhost:5173`).

## Build untuk produksi

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

### Cara cepat lewat GitHub
1. Buat repository baru di GitHub dan upload seluruh isi folder project.
2. Login ke https://vercel.com/ lalu pilih **Add New → Project**.
3. Import repository tadi.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.

`vercel.json` sudah disertakan untuk mendukung URL halaman React Router saat dibuka langsung.

## Mengganti konten
- Identitas, bio, kontak, daftar skill, pengalaman, dan proyek: `src/data/portfolio.js`
- Foto profil: ganti `portraitUrl` pada file data dengan URL foto milik sendiri atau simpan gambar di `public/images/` lalu gunakan `/images/nama-file.jpg`.
- Warna, font, ukuran, animasi cursor, dan layout: `src/styles.css`
- Nama situs dan metadata: `index.html`

## Catatan sebelum dipublikasikan
- Ganti alamat email, GitHub, LinkedIn, serta tautan proyek dengan data milik sendiri.
- Hapus proyek contoh yang tidak sesuai. Proyek akademik/prototype sebaiknya diberi label yang jujur.
- Form kontak saat ini membuka aplikasi email pengguna (mailto), belum menyimpan pesan ke database.
- Efek cursor otomatis dinonaktifkan pada perangkat sentuh dan jika pengaturan reduced motion aktif.
