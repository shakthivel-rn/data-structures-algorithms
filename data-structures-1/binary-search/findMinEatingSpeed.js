function findMinEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles)
    let result = right

    while (left <= right) {
        const speed = Math.floor((left + right) / 2)
        const timeConsumed = computeTimeConsumed(piles, speed)

        if (timeConsumed <= h) {
            result = speed
            right = speed - 1
        } else {
            left = speed + 1
        }
    }

    return result
}

function computeTimeConsumed(piles, speed) {
    let timeConsumed = 0

    for (const pile of piles) {
        timeConsumed += Math.ceil(pile / speed)
    }

    return timeConsumed
}