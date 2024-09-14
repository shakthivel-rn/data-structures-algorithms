function findMaxProfit(prices) {
    let minValue = Infinity, maxProfit = 0

    for (const price of prices) {
        minValue = Math.min(minValue, price)

        if (price >= minValue) {
            maxProfit = Math.max(maxProfit, price - minValue)
        }
    }

    return maxProfit
}