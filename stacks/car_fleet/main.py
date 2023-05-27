class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        # make it a tuple for easier sorting
        cars = [(pos, s) for pos, s in zip(position, speed)]
        # sort the pair from largest to smallest
        cars.sort(reverse=True)
        # the times of each car (also the fleets)
        times = []
        for pos, s in cars:
            # the time it takes to get to the destination
            times.append((target - pos) / s)
            # if the time is >= than the last time
            if len(times) >= 2 and times[-1] <= times[-2]:
                times.pop()
        return len(times)

print(Solution().carFleet(target = 10, position=[0,4,2], speed = [2, 1, 3]))
