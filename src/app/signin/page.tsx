"use client"
import { useState } from 'react'
import { supabaseClient } from '@/lib/supabaseClient'

export default function SignInPage() {
    const [stage, setStage] = useState<'start' | 'link' | 'setpw'>('start')
    const [username, setUsername] = useState('')
    const [defaultPassword, setDefaultPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function signInWithGoogle() {
        setError('')
        if (!supabaseClient) {
            setError('Supabase not configured')
            return
        }
        setLoading(true)
        const { data, error } = await supabaseClient.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/signin' } })
        if (error) setError(error.message)
        else setStage('link')
        setLoading(false)
    }

    async function handleLinkAccount() {
        setLoading(true)
        setError('')
        const session = await supabaseClient?.auth.getSession()
        const user = session?.data.session?.user
        if (!user) {
            setError('Not authenticated via OAuth')
            setLoading(false)
            return
        }
        const res = await fetch('/api/auth/link-account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                default_password: defaultPassword,
                oauth_user: { id: user.id, email: user.email, provider_id: user.user_metadata?.sub || '' },
            }),
        })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to link account')
        else setStage('setpw')
        setLoading(false)
    }

    async function handleSetPassword() {
        setLoading(true)
        setError('')
        const res = await fetch('/api/auth/set-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, new_password: newPassword }),
        })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to set password')
        else window.location.href = '/'
        setLoading(false)
    }

    return (
        <div className="max-w-md mx-auto py-10">
            <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
            {stage === 'start' && (
                <button disabled={loading} onClick={signInWithGoogle} className="px-4 py-2 bg-black text-white rounded">
                    Continue with Google
                </button>
            )}
            {stage === 'link' && (
                <div className="space-y-3">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" className="w-full border px-3 py-2 rounded" />
                    <input value={defaultPassword} onChange={(e) => setDefaultPassword(e.target.value)} placeholder="default password" type="password" className="w-full border px-3 py-2 rounded" />
                    <button disabled={loading} onClick={handleLinkAccount} className="px-4 py-2 bg-black text-white rounded">Link account</button>
                </div>
            )}
            {stage === 'setpw' && (
                <div className="space-y-3">
                    <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="new password" type="password" className="w-full border px-3 py-2 rounded" />
                    <button disabled={loading} onClick={handleSetPassword} className="px-4 py-2 bg-black text-white rounded">Set password</button>
                </div>
            )}
            {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
    )
}


