function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i + 1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
;
const dups = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(dups));
