function maxProfit(prices) {
    var stack = [];
    var max = prices[0];
    var min = prices[0];
    for (var i = 1; i < prices.length; ++i) {
        if (prices[i] > max) {
            max = prices[i];
            stack.push({ bought: min, sold: max });
        }
        if (prices[i] < min) {
            min = prices[i];
            stack.push({ bought: min, sold: max });
            max = min;
        }
    }
    var maxDiff = 0;
    for (var i = 0; i < stack.length; ++i) {
        if ((stack[i].sold - stack[i].bought) > maxDiff) {
            maxDiff = stack[i].sold - stack[i].bought;
        }
    }
    return maxDiff;
}
;
var prices = [1, 5, 2, 7, 2, 3, 4];
console.log(maxProfit(prices));
