-- Enable pgcrypto for gen_random_uuid
create extension if not exists "pgcrypto";

-- STUDENTS
create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  roll integer not null unique,
  group_tag text not null,
  display_name text,
  email text unique,
  bio text,
  links jsonb not null default '[]'::jsonb,
  profile_pic_url text,
  password_hash text,
  must_change_password boolean default true,
  oauth_provider text,
  oauth_provider_user_id text,
  supabase_auth_uid text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_students_roll on students(roll);
create index if not exists idx_students_username_lower on students ((lower(username)));

-- UPDATES / ANNOUNCEMENTS
create table if not exists updates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  sender_id uuid,
  sender_name text,
  created_at timestamptz default now(),
  publish_at timestamptz default now(),
  pinned boolean default false,
  is_draft boolean default false
);

-- ADMINS
create table if not exists admins (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  display_name text,
  email text unique,
  role text default 'admin',
  created_at timestamptz default now()
);


