const parentheses = {
    "{": "}",
    "[": "]",
    "(": ")"
}
function isValid(s: string): boolean {
    const stack: string[]  = []
    for (let i = 0; i < s.length; ++i) {
        if (s[i] in parentheses) {
            stack.push(parentheses[s[i]]);
        } else {
            if (stack.pop() != s[i]) {
                return false;
            }
        }
    }
    if (stack.length != 0) return false;
    return true;
};
const str = "(]"
console.log(isValid(str))
