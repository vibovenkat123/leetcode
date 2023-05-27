class MinStack:
    def __init__(self):
        self.stack = []
        self.min_val_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if len(self.min_val_stack) == 0:
            min_val = val
        else:
            min_val = min(val, self.min_val_stack[-1])
        self.min_val_stack.append(min_val)
    def pop(self) -> None:
        self.stack.pop()
        self.min_val_stack.pop()
    def top(self) -> int:
        if len(self.stack) == 0:
            return 0
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_val_stack[-1]


# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

min_stack = MinStack()

min_stack.push(23)
min_stack.push(56)
min_stack.pop()
min_stack.push(13)
min_stack.push(15)
min_stack.push(103)
min_stack.push(48)
min_stack.push(896)
min_stack.push(25)
print(min_stack.getMin())
