"use client"
import { useEffect, useState } from 'react'

export default function AdminPage() {
    const [auth, setAuth] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [form, setForm] = useState({ username: '', roll: 1, group_tag: 'r1', display_name: '', email: '', default_password: '' })
    const [update, setUpdate] = useState({ title: '', body: '' })
    const [error, setError] = useState('')

    useEffect(() => {
        // Best-effort: try calling a protected endpoint to see if cookie present
        fetch('/api/students').then(() => {}).catch(() => {})
    }, [])

    async function login() {
        setError('')
        const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Login failed')
        else setAuth(true)
    }

    async function createStudent() {
        setError('')
        const res = await fetch('/api/admin/create-student', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to create student')
        else alert('Student created')
    }

    async function postUpdate() {
        setError('')
        const res = await fetch('/api/admin/updates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to post update')
        else alert('Update posted')
    }

    return (
        <div className="max-w-2xl mx-auto py-10 space-y-6">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            {!auth && (
                <div className="space-y-2 border p-4 rounded">
                    <input className="border px-3 py-2 rounded w-full" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                    <input type="password" className="border px-3 py-2 rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    <button className="px-4 py-2 bg-black text-white rounded" onClick={login}>Login</button>
                </div>
            )}
            {auth && (
                <>
                    <div className="space-y-2 border p-4 rounded">
                        <h2 className="font-medium">Create Student</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <input className="border px-3 py-2 rounded" placeholder="username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                            <input className="border px-3 py-2 rounded" placeholder="roll" type="number" value={form.roll} onChange={(e) => setForm({ ...form, roll: Number(e.target.value) })} />
                            <input className="border px-3 py-2 rounded" placeholder="group_tag (r1/r2...)" value={form.group_tag} onChange={(e) => setForm({ ...form, group_tag: e.target.value })} />
                            <input className="border px-3 py-2 rounded" placeholder="display_name" value={form.display_name} onChange={(e) => setForm({ ...form, display_name: e.target.value })} />
                            <input className="border px-3 py-2 rounded" placeholder="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                            <input className="border px-3 py-2 rounded" placeholder="default_password" value={form.default_password} onChange={(e) => setForm({ ...form, default_password: e.target.value })} />
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded" onClick={createStudent}>Create</button>
                    </div>
                    <div className="space-y-2 border p-4 rounded">
                        <h2 className="font-medium">Post Update</h2>
                        <input className="border px-3 py-2 rounded w-full" placeholder="title" value={update.title} onChange={(e) => setUpdate({ ...update, title: e.target.value })} />
                        <textarea className="border px-3 py-2 rounded w-full" placeholder="body" rows={5} value={update.body} onChange={(e) => setUpdate({ ...update, body: e.target.value })} />
                        <button className="px-4 py-2 bg-black text-white rounded" onClick={postUpdate}>Publish</button>
                    </div>
                </>
            )}
            {error && <p className="text-red-600">{error}</p>}
        </div>
    )
}


