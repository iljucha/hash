function hash(s) {
    let h, i = 0, length = s.length
    for (i; i < length; i++) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0
    }
    return h
}
module.exports = hash