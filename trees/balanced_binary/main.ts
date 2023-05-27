class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    const res = getHeight(root.left) - getHeight(root.right)
    if (Math.abs(res) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};
function getHeight(root: TreeNode | null): number {
    if (!root) return 0;
    const left = getHeight(root.left)
    const right = getHeight(root.right)
    const max = Math.max(left, right) + 1
    return max
}
