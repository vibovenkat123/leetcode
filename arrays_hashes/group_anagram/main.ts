// unimproved
function groupAnagrams(strs: string[]): string[][] {
    const result: string[][]  = []
    for (let i = 0; i < strs.length; i++) {
        let good = false;
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < result[j].length; k++) {
                if (isAnagram(strs[i], result[j][k])) {
                    result[j].push(strs[i])
                    good = true
                    break
                }
            }
        }
        if (!good) {
            result.push([strs[i]])
        }
        good = false
    }
    return result
};

function get(s: string, target: string): number{
    for (let i = 0; i < s.length; ++i) {
        if (s[i] == target) {
            return i
        }
    }
    return  -1
}

function isAnagram(s: string, t: string): boolean {
    for (let i = 0; i < s.length; ++i) {
        if (get(t, s[i]) == -1){
            return false
        }
        else {
            t = t.slice(0, get(t, s[i])) + t.slice(get(t, s[i]) + 1)
        }
    }
    if (t.length != 0) return false;
    return true
};
