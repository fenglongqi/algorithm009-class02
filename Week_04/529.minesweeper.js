/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = (board, click) => {
    let [row, col] = [...click]
    if (board[row][col] === 'E') dfs(board, row, col)
    if (board[row][col] === 'M') board[row][col] = 'X'
    return board
  };
  
  const dfs = (board, row, col) => {
    let nearlyMineCount = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let [nearRow, nearCol] = [row+i, col+j]
        if (i === 0 && j === 0) continue
        if (isInvalid(board, nearRow, nearCol)) continue
        if (board[nearRow][nearCol] === 'M' || board[nearRow][nearCol] === 'X') {
          nearlyMineCount++
        }
      }
    }     
    if (nearlyMineCount) {
      board[row][col] = nearlyMineCount.toString()  
      return
    } 
    
    board[row][col] = 'B'
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let [nearRow, nearCol] = [row+i, col+j]
        if (i === 0 && j === 0) continue
        if (isInvalid(board, nearRow, nearCol)) continue
        if (board[nearRow][nearCol] === 'E') dfs(board, nearRow, nearCol)
      }
    }
  }
  
  const isInvalid = (board, row, col) => {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length
  }