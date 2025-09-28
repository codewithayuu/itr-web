export interface Member {
    id: number;
    name: string;
    role?: string;
    avatarUrl?: string;
    email?: string;
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Update {
    id: number;
    title: string;
    content: string;
    imageUrl?: string;
    pinned: boolean;
    author?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface GalleryImage {
    id: number;
    filename: string;
    url: string;
    uploader?: string;
    caption?: string;
    createdAt: Date;
}

export interface Student {
    id: number;
    name: string;
    group: string;
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateMemberData {
    name: string;
    role?: string;
    email?: string;
    bio?: string;
    avatar?: File;
}

export interface CreateUpdateData {
    title: string;
    content: string;
    image?: File;
    pinned?: boolean;
    author?: string;
}

export interface UploadImageData {
    file: File;
    caption?: string;
    uploader?: string;
}





