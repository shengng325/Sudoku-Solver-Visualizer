import { retrievePuzzle } from './Puzzle.js';


class Sudoku {
    constructor(sudokuSize) {
        this.board = [];
        this.sudokuSize = sudokuSize;
        this.boardNumber = 0;
    }

    clearElements(sudokuSize) {
        this.board = [];
        for (let row = 0; row < sudokuSize; row++) {
            this.board.push([]);
            for (let column = 0; column < sudokuSize; column++) {
                this.board[row].push(0);
            }
        }
    }

    generateSudoku(sudokuSize) {
        this.board = retrievePuzzle(sudokuSize, this.boardNumber++);
        if (this.boardNumber > 2) this.boardNumber = 0;
        return this.board;
    }
}

export { Sudoku };