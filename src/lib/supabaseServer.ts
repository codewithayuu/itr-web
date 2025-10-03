import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Server-side Supabase client using the service role key.
// Important: This must only run on the server. Never expose SERVICE KEY to the browser.

let serverClient: SupabaseClient | null = null

export function getSupabaseServer(): SupabaseClient {
    const url = process.env.SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_KEY

    if (!url || !serviceKey) {
        throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in environment')
    }

    if (!serverClient) {
        serverClient = createClient(url, serviceKey)
    }
    return serverClient
}


