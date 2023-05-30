class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        set_nums = set(nums)
        longest_val = 0
        for num in set_nums:
            if (num - 1) not in set_nums:
                length_set = 0
                # start
                while (num + length_set) in set_nums:
                    length_set += 1
                if length_set > longest_val:
                    longest_val = length_set
        return longest_val
s = Solution()
print(s.longestConsecutive([100,4,200,1,3,2]))