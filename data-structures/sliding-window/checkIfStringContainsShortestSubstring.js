function checkIfStringContainsShortestSubstring(s, t) {
    let windowStart = 0, matched = 0, minLength = Infinity, subStrStart = 0
    const charMap = {}

    for (const char of t) {
        charMap[char] ??= 0
        charMap[char] += 1
    }

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const endChar = s[windowEnd]

        if (endChar in charMap) {
            charMap[endChar] -= 1
            if (charMap[endChar] === 0) matched += 1
        }

        while (matched === Object.keys(charMap).length) {
            if ((windowEnd - windowStart + 1) < minLength) {
                minLength = windowEnd - windowStart + 1
                subStrStart = windowStart
            }

            const startChar = s[windowStart]
            windowStart += 1

            if (startChar in charMap) {
                if (charMap[startChar] === 0) matched -= 1
                charMap[startChar] += 1
            }
        }
    }

    return minLength === Infinity ? "" : s.slice(subStrStart, subStrStart + minLength)
}