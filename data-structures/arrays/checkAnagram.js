function checkAnagram(s, t) {
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")

    return sortedS === sortedT
}

function checkAnagram(s, t) {
    if (s.length !== t.length) return false

    const counter = {}

    for (let index = 0; index < s.length; index++) {
        counter[s[index]] = (counter[s[index]] || 0) + 1
        counter[t[index]] = (counter[t[index]] || 0) - 1
    }

    for (const value of Object.values(counter)) {
        if (value !== 0) return false
    }

    return true
}