function determinFleetCount(target, position, speed) {
    const N = position.length
    const positionSpeedPairs = position.map((p, i) => [p, speed[i]])
    positionSpeedPairs.sort((a, b) => b[0] - a[0])

    let numberOfFleets = 0
    const timeToReach = Array.from({ length: N })
    for (let index = 0; index < N; index++) {
        timeToReach[index] = (target - positionSpeedPairs[index][0]) / positionSpeedPairs[index][1]

        if (index >= 1 && timeToReach[index] <= timeToReach[index - 1]) {
            timeToReach[index] = timeToReach[index - 1]
        } else {
            numberOfFleets += 1
        }
    }

    return numberOfFleets
}