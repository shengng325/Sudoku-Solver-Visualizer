'use strict';

import { Sudoku } from './Sudoku.js';
import { Render } from './Render.js';
import { Animations } from './Animations.js';

import './index.css';

const sudoku = new Sudoku(9);
const view = new Render();
view.renderGrid(sudoku.sudokuSize);
view.renderSudokuElements(sudoku.generateSudoku(sudoku.sudokuSize));

const solveButton = document.getElementById('solve-button');
solveButton.addEventListener('click', async (event) => {
    if (Animations.status) {
        $('.pop').popover('disable');
        console.log('clicked');
        event.target.disabled = true;
        Animations.skip = true;
    } else {
        await view.renderSolvingAnimation(sudoku.board);
        view.renderSudokuElements(sudoku.board);
        Animations.status = false;
        event.target.disabled = false;
    }
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', async event => {
    await view.stopAnimation();
    view.clearSudokuElements(sudoku.sudokuSize);
    view.resetStatus();
    view.renderSudokuElements(sudoku.generateSudoku(sudoku.sudokuSize));
});

const sudokuTableElement = document.getElementById('sudoku');
const buttonSizeFour = document.getElementById('button-4x4');
const buttonSizeNine = document.getElementById('button-9x9');
const buttonSizeSixteen = document.getElementById('button-16x16');

buttonSizeFour.addEventListener('click', event => {
    sudokuTableElement.classList.add('small-table');
    sudokuTableElement.classList.remove('big-table');

    buttonSizeFour.classList.add("active");
    buttonSizeNine.classList.remove("active");
    buttonSizeSixteen.classList.remove("active");

    view.stopAnimation();
    sudoku.sudokuSize = 4;
    view.renderGrid(sudoku.sudokuSize);//9,9
    view.renderSudokuElements(sudoku.generateSudoku(sudoku.sudokuSize));
    view.resetStatus();
});

buttonSizeNine.addEventListener('click', event => {
    sudokuTableElement.classList.remove('small-table');
    sudokuTableElement.classList.remove('big-table');

    buttonSizeFour.classList.remove("active");
    buttonSizeNine.classList.add("active");
    buttonSizeSixteen.classList.remove("active");

    view.stopAnimation();
    sudoku.sudokuSize = 9;
    view.renderGrid(sudoku.sudokuSize);//9,9
    view.renderSudokuElements(sudoku.generateSudoku(sudoku.sudokuSize));
    view.resetStatus();
});

buttonSizeSixteen.addEventListener('click', event => {
    sudokuTableElement.classList.remove('small-table');
    sudokuTableElement.classList.add('big-table');

    buttonSizeFour.classList.remove("active");
    buttonSizeNine.classList.remove("active");
    buttonSizeSixteen.classList.add("active");

    view.stopAnimation();
    sudoku.sudokuSize = 16;
    view.renderGrid(sudoku.sudokuSize);//9,9
    view.renderSudokuElements(sudoku.generateSudoku(sudoku.sudokuSize));
    view.resetStatus();
});

$('.pop').popover().click(function () {
    setTimeout(function () {
        $('.pop').popover('hide');
        $('.pop').popover('disable');
    }, 5000);
});

$("#animation-slider").slider({
    formatter: function(value) {
        return Animations.interval + 'ms';
    }
});

$("#animation-slider").on("change", function(event) {
    console.log(event.value.newValue);
    const sliderValue = parseInt(event.value.newValue);
    let animationSpeed = 5 - sliderValue;
    if (animationSpeed > 1) animationSpeed*= 10;
    console.log(animationSpeed);
    Animations.setInterval(animationSpeed);
});
