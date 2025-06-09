# Todo List Application

Aplikasi Todo List sederhana yang dibangun dengan teknologi modern:

- [Next.js 15](https://nextjs.org/) - Framework React dengan Server Side Rendering
- [Prisma](https://www.prisma.io/) - ORM untuk database
- [PostgreSQL](https://www.postgresql.org/) - Database SQL yang powerful
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS untuk styling

## Fitur

- ✅ Membuat todo baru
- ✅ Menampilkan daftar todo
- ✅ Mengubah todo yang sudah ada
- ✅ Menghapus todo
- ✅ Server Actions untuk operasi CRUD
- ✅ Validasi input
- ✅ UI yang responsif

## Teknologi yang Digunakan

- **Framework**: Next.js 15
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Cara Menjalankan Aplikasi

1. Clone repository ini

```bash
git clone https://github.com/rqull/todo-web-Nextjs---Prisma---postgres.git
cd todo_prisma_postgres
```

2. Install dependencies

```bash
npm install
```

3. Setup environment variable
   Buat file `.env` dan isi dengan connection string PostgreSQL Anda:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/todo_db"
```

4. Jalankan migrasi database

```bash
npx prisma migrate dev
```

5. Jalankan aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## Struktur Project

```
src/
├── app/                   # Next.js App Router
│   ├── page.tsx          # Halaman utama aplikasi
│   └── layout.tsx        # Layout utama
├── services/
│   └── todo-services.ts  # Logic untuk operasi CRUD
├── utils/
│   └── todo_prisma.ts    # Konfigurasi Prisma Client
└── generated/            # File-file yang digenerate oleh Prisma
    └── prisma/

prisma/
├── schema.prisma        # Schema database
└── migrations/         # File-file migrasi database
```

## Model Database

```prisma
model Todo {
  id        String   @id @default(uuid())
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Kontribusi

Silakan buat pull request untuk berkontribusi pada project ini.

## Lisensi

MIT License
