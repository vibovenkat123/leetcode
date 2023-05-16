function lengthOfLastWord(s: string): number {
    s = s.trim();
    const words = s.split(" ");
    return words[words.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
