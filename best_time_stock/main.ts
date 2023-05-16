type stock = {
    bought: number,
    sold: number,
}
function maxProfit(prices: number[]): number {
    const stack: stock[] = []
    let max = prices[0];
    let min = prices[0];
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > max) {
            max = prices[i];
            stack.push({bought: min, sold: max})
        }
        if (prices[i] < min) {
            min = prices[i]
            max = min;
        }
    }
    let maxDiff = 0;
    for (let i = 0; i < stack.length; ++i) {
        const diff = stack[i].sold - stack[i].bought;
        if ((diff) > maxDiff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
};

const prices = [1, 5, 2, 7, 2, 3, 4];
console.log(maxProfit(prices))
