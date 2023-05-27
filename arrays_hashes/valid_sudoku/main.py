import collections
class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set)
        grids = collections.defaultdict(set)
        for row in range(9):
            for col in range(9):
                curr = board[row][col]
                if curr == ".":
                    continue
                if (curr in rows[row] or
                    curr in cols[col] or
                    curr in grids[row // 3, col // 3]):
                    return False
                cols[col].add(curr)
                rows[row].add(curr)
                grids[(row // 3, col // 3)].add(curr)
        return True
sol = Solution()

board = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
print(sol.isValidSudoku(board))
