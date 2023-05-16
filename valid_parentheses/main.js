var parentheses = {
    "{": "}",
    "[": "]",
    "(": ")"
};
function isValid(s) {
    var stack = [];
    for (var i = 0; i < s.length; ++i) {
        if (s[i] in parentheses) {
            stack.push(parentheses[s[i]]);
        }
        else {
            if (stack.pop() != s[i]) {
                return false;
            }
        }
    }
    return true;
}
;
var str = "(]";
console.log(isValid(str));
