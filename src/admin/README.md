## Admin Setup (Supabase + Next.js)

### 1) Create Supabase project & env vars
- In Supabase dashboard, create a new project.
- Get `SUPABASE_URL`, `ANON KEY`, and `SERVICE ROLE KEY`.
- In development `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
JWT_SECRET=generate_a_long_random_secret
```

### 2) Run migrations
- Open Supabase SQL Editor and paste `db/migrations/001_create_tables.sql`.
- Execute to create `students`, `updates`, `admins`.

### 3) Enable Google provider
- In Supabase Auth > Providers, enable Google and add OAuth credentials.
- Set redirect URL to your site (e.g. `http://localhost:3000/signin`).

### 4) Create initial admin
- Use Node REPL or a small script to hash a password with bcrypt and insert an admin row:

```
insert into admins (username, password_hash, display_name, email) values ('admin', '<bcrypt-hash>', 'Site Admin', 'admin@example.com');
```

### 5) Storage bucket
- Create a Storage bucket named `avatars`. Keep it private and use signed URLs.

### 6) RLS recommendation (optional)
- Enable RLS; add policies so public can select limited columns from `students` and the server (service role) can write.

### 7) Acceptance tests (manual)
- Follow the cases listed in the spec to verify flows work end-to-end.


