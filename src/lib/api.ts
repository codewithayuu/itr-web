import { Member, Update, GalleryImage, CreateMemberData, CreateUpdateData, UploadImageData } from '@/types'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api'

class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message)
        this.name = 'ApiError'
    }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE}${endpoint}`

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        ...options,
    })

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An error occurred' }))
        throw new ApiError(response.status, errorData.message || 'Request failed')
    }

    return response.json()
}

async function uploadFile<T>(endpoint: string, formData: FormData): Promise<T> {
    const url = `${API_BASE}${endpoint}`

    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Upload failed' }))
        throw new ApiError(response.status, errorData.message || 'Upload failed')
    }

    return response.json()
}

// Members API
export const membersApi = {
    getAll: (): Promise<Member[]> => fetchApi('/members'),

    create: (data: CreateMemberData): Promise<Member> => {
        const formData = new FormData()
        formData.append('name', data.name)
        if (data.role) formData.append('role', data.role)
        if (data.email) formData.append('email', data.email)
        if (data.bio) formData.append('bio', data.bio)
        if (data.avatar) formData.append('avatar', data.avatar)

        return uploadFile('/members', formData)
    },

    delete: (id: number): Promise<void> =>
        fetchApi(`/members/${id}`, { method: 'DELETE' }),
}

// Updates API
export const updatesApi = {
    getAll: (): Promise<Update[]> => fetchApi('/updates'),

    getById: (id: number): Promise<Update> => fetchApi(`/updates/${id}`),

    create: (data: CreateUpdateData): Promise<Update> => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('content', data.content)
        if (data.pinned) formData.append('pinned', 'true')
        if (data.author) formData.append('author', data.author)
        if (data.image) formData.append('image', data.image)

        return uploadFile('/updates', formData)
    },

    delete: (id: number): Promise<void> =>
        fetchApi(`/updates/${id}`, { method: 'DELETE' }),
}

// Gallery API
export const galleryApi = {
    getAll: (): Promise<GalleryImage[]> => fetchApi('/gallery'),

    upload: (data: UploadImageData): Promise<GalleryImage> => {
        const formData = new FormData()
        formData.append('file', data.file)
        if (data.caption) formData.append('caption', data.caption)
        if (data.uploader) formData.append('uploader', data.uploader)

        return uploadFile('/gallery/upload', formData)
    },

    delete: (id: number): Promise<void> =>
        fetchApi(`/gallery/${id}`, { method: 'DELETE' }),
}





