'use strict';

import { Animations } from './Animations.js';

const Backtracking = async(sudoku, renderCell, renderStatus) => {
    const sudokuSize = sudoku.length;
    if (Animations.status === true) {
        for (var row = 0; row < sudokuSize; row++) {
            for (var column = 0; column < sudokuSize; column++) {
                if (sudoku[row][column] === 0) {
                    for (var number = 1; number <= sudokuSize; number++) {
                        if (isValidNumber(sudoku, row, column, number)) {
                            sudoku[row][column] = number;
                            if (Animations.interval !== 0 && Animations.skip === false) {
                                renderCell(row, column, sudoku[row][column]);
                                await Animations.pause();
                            }
                            renderStatus();
                            if (await Backtracking(sudoku, renderCell, renderStatus)) return sudoku;
                            if (Animations.status === false) return;
                        }
                    }
                    sudoku[row][column] = 0;
                    return false; 
                }
            }
        }
        return true;
    }
    return;

}

function isValidNumber(sudoku, currentRow, currentColumn, number) {
    const sudokuSize = sudoku.length;
    const boxSize = Math.sqrt(sudokuSize);
    
    //check row
    for (var testColumn = 0; testColumn < sudokuSize; testColumn++) {
        if (testColumn !== currentColumn) {
            if (sudoku[currentRow][testColumn] === number) {
                return false;
            }
        }
    }
    //check column
    for (var testRow = 0; testRow < sudokuSize; testRow++) {
        if (testRow !== currentRow) {
            if (sudoku[testRow][currentColumn] === number) {
                return false;
            }
        }
    }
    //check sub box
    var currentBoxRow = parseInt((currentRow + boxSize)/boxSize);
    var currentBoxColumn = parseInt((currentColumn + boxSize)/boxSize);
    for (var testRow = currentBoxRow*boxSize - boxSize; testRow < currentBoxRow*boxSize; testRow++) {
        for (var testColumn = currentBoxColumn*boxSize - boxSize; testColumn < currentBoxColumn*boxSize; testColumn++) {
            if (testColumn !== currentColumn || testRow !== currentRow) {
                if (sudoku[testRow][testColumn] === number) {
                    return false;
                }
            }
        }
    }
    return true;
}

export { Backtracking };