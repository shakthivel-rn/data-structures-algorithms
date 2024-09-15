function replaceCharacterUptoK(s, k) {
    let windowStart = 0, longestSubString = 0, maxFreq = 0
    const LENGTH = s.length
    const charMap = {}

    for (let windowEnd = 0; windowEnd < LENGTH; windowEnd++) {
        const endChar = s[windowEnd]
        charMap[endChar] ??= 0
        charMap[endChar] += 1
        maxFreq = Math.max(maxFreq, charMap[endChar])

        if ((windowEnd - windowStart + 1) - maxFreq > k) {
            const startChar = s[windowStart]
            charMap[startChar] -= 1
            windowStart += 1
        }

        longestSubString = Math.max((windowEnd - windowStart + 1), longestSubString)
    }

    return longestSubString
}