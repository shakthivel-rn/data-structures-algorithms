function findLengthOfLongestUniqueSubString(s) {
    const LENGTH = s.length
    const charMap = {}
    let windowStart = 0, maxLength = 0

    for (let windowEnd = 0; windowEnd < LENGTH; windowEnd++) {
        const char = s[windowEnd]
        charMap[char] ??= 0
        charMap[char] += 1

        while (charMap[char] > 1) {
            const startChar = s[windowStart]

            charMap[startChar] -= 1
            if (charMap[startChar] === 0) delete charMap[startChar]

            windowStart += 1
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}