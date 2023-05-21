class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        res = []
        stack = []
        def gen(p_opened, p_closed):
            if n == p_opened == p_closed:
                res.append("".join(stack))
                return
            if p_closed < p_opened:
                stack.append(")")
                gen(p_opened, p_closed + 1)
                stack.pop()
            if p_opened < n:
                stack.append("(")
                gen(p_opened + 1, p_closed)
                stack.pop()

        gen(0, 0)
        return res

sol = Solution()
print(sol.generateParenthesis(3))
