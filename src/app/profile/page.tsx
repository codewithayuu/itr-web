"use client"
import { useEffect, useState } from 'react'

type LinkItem = { label: string; url: string }

export default function ProfilePage() {
    const [bio, setBio] = useState('')
    const [links, setLinks] = useState<LinkItem[]>([])
    const [file, setFile] = useState<File | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        // Optional: load current profile if we had an endpoint
    }, [])

    async function saveProfile() {
        setError('')
        const res = await fetch('/api/students/update-profile', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ bio, links }) })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to save profile')
        else alert('Saved')
    }

    async function uploadAvatar() {
        if (!file) return
        setError('')
        const form = new FormData()
        form.append('file', file)
        const res = await fetch('/api/students/upload-avatar', { method: 'POST', body: form })
        const data = await res.json()
        if (!res.ok) setError(data.error || 'Failed to upload')
        else alert('Avatar uploaded')
    }

    function addLink() {
        setLinks((prev) => [...prev, { label: '', url: '' }])
    }

    return (
        <div className="max-w-2xl mx-auto py-10 space-y-6">
            <h1 className="text-2xl font-semibold">Your Profile</h1>
            <div className="space-y-2 border p-4 rounded">
                <h2 className="font-medium">Bio</h2>
                <textarea className="border px-3 py-2 rounded w-full" rows={4} value={bio} onChange={(e) => setBio(e.target.value)} />
                <button className="px-4 py-2 bg-black text-white rounded" onClick={saveProfile}>Save</button>
            </div>
            <div className="space-y-2 border p-4 rounded">
                <h2 className="font-medium">Links</h2>
                {links.map((l, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-2">
                        <input className="border px-3 py-2 rounded" placeholder="label" value={l.label} onChange={(e) => setLinks((prev) => prev.map((p, i) => (i === idx ? { ...p, label: e.target.value } : p)))} />
                        <input className="border px-3 py-2 rounded" placeholder="url" value={l.url} onChange={(e) => setLinks((prev) => prev.map((p, i) => (i === idx ? { ...p, url: e.target.value } : p)))} />
                    </div>
                ))}
                <button className="px-4 py-2 bg-gray-200 rounded" onClick={addLink}>Add link</button>
                <button className="px-4 py-2 bg-black text-white rounded ml-2" onClick={saveProfile}>Save</button>
            </div>
            <div className="space-y-2 border p-4 rounded">
                <h2 className="font-medium">Avatar</h2>
                <input type="file" accept="image/png,image/jpeg" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <button className="px-4 py-2 bg-black text-white rounded" onClick={uploadAvatar}>Upload</button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
        </div>
    )
}


