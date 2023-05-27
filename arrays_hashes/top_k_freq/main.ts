// get the top k frequent elements in the array
// return the elements in descending order

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    const result = [];
    let i = 0;
    for (let [key, _] of sortedMap) {
        if (i < k) {
            result.push(key);
        }
        i++;
    }
    return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
