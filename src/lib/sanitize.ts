export function sanitizeText(input: string, maxLen = 5000): string {
    const trimmed = (input || '').toString().slice(0, maxLen)
    // Remove script/style tags and basic HTML tags to avoid XSS when rendering dangerously
    return trimmed.replace(/<\/?(script|style)[^>]*>/gi, '').replace(/<[^>]+>/g, '')
}

export function isValidUrl(input: string): boolean {
    try {
        const url = new URL(input)
        return url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
        return false
    }
}


