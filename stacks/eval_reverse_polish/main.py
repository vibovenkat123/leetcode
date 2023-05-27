class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        stack = []
        for token in tokens:
            match token:
                case "+":
                    stack.append(stack.pop() + stack.pop())
                    continue
                case "-":
                    stack.append(-stack.pop() + stack.pop())
                    continue
                case "*":
                    stack.append(stack.pop() * stack.pop())
                    continue
                case "/":
                    val1 = stack.pop()
                    val2 = stack.pop()
                    stack.append(int(val2 / val1))
                    continue
            stack.append(int(token))
        return stack[0]
sol = Solution()
print(sol.evalRPN(["2","1","+","3","*"]))
