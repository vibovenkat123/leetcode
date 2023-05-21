class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        res = [0] * len(temperatures)
        temps = []  # tuple: [idx, temp]
        # loop through
        for i, temp in enumerate(temperatures):
            # for each temperature its greater than
            while temps and temp > temps[-1][1]:
                # set the index of res to the number of days in between
                idx, _ = temps.pop()
                res[idx] = i - idx
            # add to the stack
            temps.append((i, temp))
        return res
sol = Solution()
print(sol.dailyTemperatures([73,74,75,71,69,72,76,73]))

