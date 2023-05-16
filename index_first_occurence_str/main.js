function strStr(haystack, needle) {
    let old_needle = needle;
    let res = -1;
    for (let i = 0; i < haystack.length; ++i) {
        if (needle.length == 0)
            break;
        if (haystack[i] == needle[0]) {
            console.log(i);
            if (needle == old_needle) {
                res = i;
            }
            needle = needle.slice(1);
            continue;
        }
        res = -1;
        if (old_needle != needle) {
            i--;
        }
        needle = old_needle;
    }
    if (needle.length != 0) {
        res = -1;
    }
    return res;
}
;
console.log(strStr("mississippi", "issip"));
