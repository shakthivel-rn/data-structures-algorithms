function checkIfStringContainsPermutation(s1, s2) {
    let windowStart = 0, matched = 0
    const charMap = {}

    for (const char of s1) {
        charMap[char] ??= 0
        charMap[char] += 1
    }

    for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        const endChar = s2[windowEnd]

        if (endChar in charMap) {
            charMap[endChar] -= 1
            if (charMap[endChar] === 0) matched += 1
        }

        if (matched === Object.keys(charMap).length) return true

        if (windowEnd >= s1.length - 1) {
            const startChar = s2[windowStart]
            windowStart += 1

            if (startChar in charMap) {
                if (charMap[startChar] === 0) matched -= 1
                charMap[startChar] += 1
            }
        }
    }

    return false
}