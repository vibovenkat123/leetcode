var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; --i) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        digits[i] = 0;
    }
    if (digits[0] == 0) {
        return __spreadArray([1], digits, true);
    }
    return digits;
}
;
console.log(plusOne([1, 2, 3]));
