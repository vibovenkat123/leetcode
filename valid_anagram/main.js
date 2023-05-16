function get(s, target) {
    for (var i = 0; i < s.length; ++i) {
        if (s[i] == target) {
            return i;
        }
    }
    return -1;
}
function isAnagram(s, t) {
    for (var i = 0; i < s.length; ++i) {
        if (get(t, s[i]) == -1) {
            return false;
        }
        else {
            t = t.slice(0, get(t, s[i])) + t.slice(get(t, s[i]) + 1);
        }
    }
    if (s.length != 0)
        return false;
    return true;
}
;
var s = "rat";
var t = "car";
console.log(isAnagram(s, t));
