function search(nums, target) {
    var low = 0;
    var hi = nums.length - 1;
    while (low <= hi) {
        var middle = Math.floor((low + hi) / 2);
        var val = nums[middle];
        if (target == val)
            return middle;
        if (middle < target) {
            low = middle + 1;
        }
        else {
            hi = middle;
        }
    }
    return -1;
}
;
var nums = [2, 5];
console.log(search(nums, 2));
