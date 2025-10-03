type Counter = { count: number; resetAt: number }

const counters = new Map<string, Counter>()

export function rateLimitKey(ip: string, bucket: string): string {
    return `${bucket}:${ip}`
}

export function canAttempt(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now()
    const found = counters.get(key)
    if (!found || found.resetAt < now) {
        counters.set(key, { count: 1, resetAt: now + windowMs })
        return true
    }
    if (found.count < limit) {
        found.count += 1
        return true
    }
    return false
}

export function timeToResetMs(key: string): number {
    const now = Date.now()
    const found = counters.get(key)
    if (!found) return 0
    return Math.max(0, found.resetAt - now)
}


