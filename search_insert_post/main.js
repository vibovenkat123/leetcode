function searchInsert(nums, target) {
    let lowVal = 0;
    let highVal = nums.length;
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    if (target < nums[0]) {
        return 0;
    }
    do {
        const middle = Math.floor(lowVal + (highVal - lowVal) / 2);
        const middleVal = nums[middle];
        if (middleVal == target) {
            return middle;
        }
        if (middleVal > target) {
            if (nums[middle - 1] < target) {
                return middle;
            }
            highVal = middle;
        }
        else {
            if (nums[middle + 1] > target) {
                return middle;
            }
            lowVal = middle + 1;
        }
    } while (lowVal < highVal);
    return -1;
}
;
console.log(searchInsert([1, 3, 5, 6], 7));
