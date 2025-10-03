import jwt from 'jsonwebtoken'
import { serialize, parse } from 'cookie'

type BaseToken = {
    sub: string
    role: 'student' | 'admin'
}

export type StudentToken = BaseToken & {
    username: string
}

export type AdminToken = BaseToken & {
    username: string
}

const STUDENT_COOKIE = 'student_jwt'
const ADMIN_COOKIE = 'admin_jwt'

function getJwtSecret(): string {
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error('Missing JWT_SECRET')
    return secret
}

export function signToken(payload: object, expiresIn: string = '7d'): string {
    return jwt.sign(payload as any, getJwtSecret(), { expiresIn })
}

export function verifyToken<T = any>(token: string): T | null {
    try {
        return jwt.verify(token, getJwtSecret()) as T
    } catch {
        return null
    }
}

export function issueCookie(name: 'student' | 'admin', token: string): string {
    const cookieName = name === 'student' ? STUDENT_COOKIE : ADMIN_COOKIE
    const isProd = process.env.NODE_ENV === 'production'
    return serialize(cookieName, token, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    })
}

export function clearCookie(name: 'student' | 'admin'): string {
    const cookieName = name === 'student' ? STUDENT_COOKIE : ADMIN_COOKIE
    const isProd = process.env.NODE_ENV === 'production'
    return serialize(cookieName, '', {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        path: '/',
        maxAge: 0,
    })
}

export function readCookie(headersList: Headers, name: 'student' | 'admin'): string | null {
    const cookie = headersList.get('cookie') || ''
    const cookieName = name === 'student' ? STUDENT_COOKIE : ADMIN_COOKIE
    const parsed = parse(cookie)
    return parsed[cookieName] || null
}


