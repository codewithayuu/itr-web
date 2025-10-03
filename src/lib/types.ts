export type StudentPublic = {
    id: string
    username: string
    roll: number
    group_tag: string
    display_name: string | null
    bio: string | null
    links: Array<{ label: string; url: string }>
    profile_pic_url: string | null
}

export type StudentRow = StudentPublic & {
    email: string | null
    password_hash: string | null
    must_change_password: boolean
    oauth_provider: string | null
    oauth_provider_user_id: string | null
    supabase_auth_uid: string | null
    created_at: string | null
    updated_at: string | null
}

export type UpdateRow = {
    id: string
    title: string
    body: string
    sender_id: string | null
    sender_name: string | null
    created_at: string | null
    publish_at: string | null
    pinned: boolean
    is_draft: boolean
}


