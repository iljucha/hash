export default function hash(s: string): number {
    let h: number, i = 0, length = s.length
    for (i; i < length; i++) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0
    }
    return h
}