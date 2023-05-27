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
const s = "rat"
const t = "car"
console.log(isAnagram(s, t))
