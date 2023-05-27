class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            sum = numbers[left] + numbers[right]
            print(sum, left, right)
            if sum == target:
                return [left + 1, right + 1]
            if sum > target:
                right -= 1
            elif sum < target:
                left += 1
        return [-1, -1]

print(Solution().twoSum([5,25,75], 100))
