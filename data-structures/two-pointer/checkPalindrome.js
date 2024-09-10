function checkPalindrome(s) {
    const normalizedS = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let start = 0, end = normalizedS.length - 1

    while (start < end) {
        if (normalizedS[start] !== normalizedS[end]) return false

        start += 1
        end -= 1
    }

    return true
}