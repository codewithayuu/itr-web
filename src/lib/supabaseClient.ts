import { createClient } from '@supabase/supabase-js'

// Browser/client-side Supabase client using anon key.
// Safe to use in the browser; never include service key here.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

if (!url || !anonKey) {
    // Don't throw at module import time for client bundles; some pages may not need Supabase.
    // We'll fail fast when trying to use this client.
    console.warn('Supabase client missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabaseClient = url && anonKey ? createClient(url, anonKey) : (null as any)


