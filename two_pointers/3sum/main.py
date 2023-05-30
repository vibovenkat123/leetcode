class Solution:
    # brute force
    # def threeSum(self, nums: list[int]) -> list[list[int]]:
    #     sol = []
    #     for i, a in enumerate(nums):
    #         b_nums = nums.copy()
    #         b_nums.pop(i)
    #         for j, b in enumerate(b_nums):
    #             c_nums = b_nums.copy()
    #             c_nums.pop(j)
    #             for c in c_nums:
    #                if a + b + c == 0:
    #                    res = [a, b, c]
    #                    res.sort()
    #                    if not res in sol:
    #                        sol.append(res)
    #     return sol
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # sort array for two sum II
        nums.sort()
        sol = []
        for i, num in enumerate(nums):
            # if its a duplicate
            if i > 0 and num == nums[i - 1]:
                continue
            # positive numbers have already been covered
            if num > 0:
                break
            # the target for two sum II
            target = 0 - num
            left, right = i + 1, len(nums) - 1
            # go through two pointers
            while left < right:
                sum = nums[left] + nums[right]
                # if the target is the sum
                if sum == target:
                    # append it to the stack
                    sol.append([num, nums[left], nums[right]])
                    # move over the pointers
                    left += 1
                    right -= 1
                    # keep moving if there are duplicates
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                elif sum > target:
                    right -= 1
                elif sum < target:
                    left += 1

        return sol

print(Solution().threeSum([-1,0,1,2,-1,-4]))
