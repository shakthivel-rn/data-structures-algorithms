class TimeStampStore {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, [])
        this.keyStore.get(key).push([timestamp, value])
    }

    get(key, timestamp) {
        const values = this.keyStore.get(key) || []
        let left = 0, right = values.length - 1

        if (values.length === 0) return ''

        if (timestamp < values[left][0]) return ''
        if (timestamp >= values[right][0]) return values[right][1]

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (timestamp === values[mid][0]) return values[mid][1]
            else if (timestamp < values[mid][0]) right = mid - 1
            else left = mid + 1
        }

        return values[right][1]
    }
}
