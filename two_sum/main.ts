function twoSum(nums: number[], target: number): [number, number] {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const idx = map.get(target - nums[i])
        if (idx != undefined) {
            return [i, idx]
        }
        map.set(nums[i], i)
    }
    return [-1, -1]
};

