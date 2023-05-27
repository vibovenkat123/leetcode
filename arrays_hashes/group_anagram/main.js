function groupAnagrams(strs) {
    var result = [];
    for (var i = 0; i < strs.length; i++) {
        var good = false;
        for (var j = 0; j < result.length; j++) {
            for (var k = 0; k < result[j].length; k++) {
                if (isAnagram(strs[i], result[j][k])) {
                    result[j].push(strs[i]);
                    good = true;
                    break;
                }
            }
        }
        if (!good) {
            result.push([strs[i]]);
        }
        good = false;
    }
    return result;
}
;
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
    if (t.length != 0)
        return false;
    return true;
}
;
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
