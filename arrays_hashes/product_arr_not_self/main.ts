function productExceptSelf(nums: number[]): number[] {
  const first = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    const prev = first[i]
    first.push(prev * nums[i])
  }
  const last = Array(nums.length - 1).fill(0)
  last.push(1)

  for (let i = nums.length - 1; i > 0; i--) {
    const next = last[i]
    last[i - 1] = next * nums[i]
  }
  return first.map((num, i) => num * last[i])
}
