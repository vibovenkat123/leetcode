function removeElement(nums: number[], val: number): number {
    let i = nums.indexOf(val);
    while (i != -1) {
        nums.splice(i, 1);
        i = nums.indexOf(val);
    }
    return nums.length
}
