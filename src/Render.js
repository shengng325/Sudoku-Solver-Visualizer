'use strict';

import { Backtracking } from './Backtracking.js';
import { Animations } from './Animations.js';


class Render {
    constructor() {
        this.sudokuTableElement = document.getElementById('sudoku');
        this.iterationCountElement = document.getElementById('iteration-count');
        this.timeCountElement = document.getElementById('time-count');

        this.iterationCount = 0;
        this.timeCount = 0;
        this.start = new Date().getTime();
    }

    renderGrid(sudokuSize) {
        this.sudokuTableElement.innerHTML = '';
        for (let row = 0; row < sudokuSize; row++) {
            let sudokuRow = document.createElement('tr');
            for (let column = 0; column < sudokuSize; column++) {
                let sudokuCell = document.createElement('td');
                sudokuCell.id = `cell-${row}-${column}`;

                switch (sudokuSize) {
                    case 4:
                        if (row === 1 || row === 3) {
                            sudokuCell.classList.add('bottom-border');
                        }
                        if (column === 1 || column === 3) {
                            sudokuCell.classList.add('right-border');
                        }
                        break;
                    case 9:
                        if (row === 2 || row === 5) {
                            sudokuCell.classList.add('bottom-border');
                        }
                        if (column === 2 || column === 5) {
                            sudokuCell.classList.add('right-border');
                        }
                        break;
                    case 16:
                        if (row === 3 || row === 7 || row === 11) {
                            sudokuCell.classList.add('bottom-border');
                        }
                        if (column === 3 || column === 7 || column === 11) {
                            sudokuCell.classList.add('right-border');
                        }    
                        break;
                }
                 sudokuRow.appendChild(sudokuCell);
            }
            this.sudokuTableElement.appendChild(sudokuRow);
        }
    }

    renderSudokuElements(sudoku) {
        const sudokuSize = sudoku.length;
        for (let row = 0; row < sudokuSize; row++) {
            for (let column = 0; column < sudokuSize; column++) {
                if (sudoku[row][column] !== 0) {
                    this.renderCell(row, column, sudoku[row][column]);
                }
            }
        }
    }

    clearSudokuElements(sudokuSize) {
        for (let row = 0; row < sudokuSize; row++) {
            for (let column = 0; column < sudokuSize; column++) {
                this.renderCell(row, column, '');
            }
        }
    }

    async renderSolvingAnimation(sudoku) {
        Animations.status = true;
        Animations.skip = false;
        this.resetStatus();
        return await Backtracking(sudoku, this.renderCell, this.renderStatus.bind(this));
    }

    async stopAnimation(){
        await Animations.stop();
    }

    renderCell (row, column, value) {
        const cellId = `cell-${row}-${column}`;
        const cell = document.getElementById(cellId);
        cell.textContent = value;
        if (Animations.status === true) {
            cell.classList.add('backtracking-cell');
            setTimeout(function() {
                cell.classList.remove('backtracking-cell');
            }, 200);
        }
    }

    renderStatus () {
        this.renderIterationCount ();
        this.renderTimeCount ();
    }

    renderIterationCount () {
        this.iterationCount++;
        this.iterationCountElement.innerHTML = 'Iterations: ' + this.iterationCount;
    }

    renderTimeCount () {
        this.timeCount = (new Date().getTime() - this.start)/1000;
        this.timeCountElement.innerHTML = 'Time: ' + this.timeCount.toFixed(1) + 's';
    } 

    resetStatus(){
        this.iterationCount = 0;
        this.timeCount = 0;
        this.start = new Date().getTime();

        this.iterationCountElement.innerHTML = 'Iterations: 0';
        this.timeCountElement.innerHTML = 'Time: 0ms';
    }
}

export { Render };