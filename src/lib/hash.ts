import bcrypt from 'bcrypt'

const SALT_ROUNDS = 12

export async function hashPassword(plain: string): Promise<string> {
    if (!plain || plain.length < 8) {
        throw new Error('Password must be at least 8 characters long')
    }
    return bcrypt.hash(plain, SALT_ROUNDS)
}

export async function verifyPassword(candidate: string, hash: string): Promise<boolean> {
    if (!candidate || !hash) return false
    return bcrypt.compare(candidate, hash)
}


