class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        stack = [] # (idx , height)
        maxAr = 0
        # loop through once
        for i, height in enumerate(heights):
            strt = i
            # remove uneeded stack entries, and put them in maxAr if needed
            while stack and stack[-1][1] > height:
                idx, h = stack.pop()
                width = i - idx
                maxAr = max(maxAr, h * width)
                strt = idx
            stack.append((strt, height))
        # clean up all the extra items in the stack and find the max
        for i, height in stack:
            width = len(heights) - i
            maxAr = max(maxAr, height * width)
        return maxAr

res = Solution().largestRectangleArea([1,2,3,4,5])
print(res)
