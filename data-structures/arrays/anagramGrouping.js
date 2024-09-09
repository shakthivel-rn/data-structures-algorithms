function anagramGrouping(strs) {
    const groupedAnagrams = {}

    for (const str of strs) {
        const strKey = str.split("").sort().join("")

        groupedAnagrams[strKey] ??= []
        groupedAnagrams[strKey].push(str)
    }

    return Object.values(groupedAnagrams)
}

function anagramGrouping(strs) {
    const groupedAnagrams = {}

    for (const str of strs) {
        const count = Array.from({ length: 26 }, () => 0)
        for (const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }

        const strKey = count.join("#")
        groupedAnagrams[strKey] ??= []
        groupedAnagrams[strKey].push(str)
    }

    return Object.values(groupedAnagrams)
}