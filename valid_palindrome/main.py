class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        valid_s = ""
        for char in s:
            if not self.isAlphanumeric(char):
                continue
            valid_s += char.lower()
        s = valid_s
        reversed = s[::-1]
        for i, char in enumerate(reversed):
            if not self.isAlphanumeric(char):
                continue
            matching_char = s[i]
            if matching_char !=  char:
                return False
        return True
    def isAlphanumeric(self, char):
         return (
            ord("a") <= ord(char) <= ord("z")
            or ord("A") <= ord(char) <= ord("Z")
            or ord("0") <= ord(char) <= ord("9")
        )
print(Solution().isPalindrome("A man, a plan, a canal: Panama"))
