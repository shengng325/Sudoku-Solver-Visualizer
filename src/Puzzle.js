function retrievePuzzle (sudokuSize, boardNumber) {
    switch (sudokuSize) {
        case 4:  return puzzleSizeFour(boardNumber);
        case 9:  return puzzleSizeNine(boardNumber);
        case 16:  return puzzleSizeSixteen(boardNumber);
        case 25:  return puzzleSizeTwentyFive(boardNumber);
    }
}

function puzzleSizeFour (boardNumber){
    switch (boardNumber) {
        case 0: return ([
                    [4, 0, 0, 3],
                    [0, 2, 1, 0],
                    [0, 3, 4, 0],
                    [1, 0, 0, 2]
                ]);
                break;
        case 1: return ([
                    [1, 0, 0, 0],
                    [0, 2, 0, 0],
                    [0, 0, 3, 0],
                    [0, 0, 0, 4]
                ]);
                break;
        case 2: return ([
                    [0, 3, 1, 0],
                    [1, 0, 0, 3],
                    [2, 0, 0, 4],
                    [0, 4, 2, 0]
                ]);
                break;
    }
}

function puzzleSizeNine (boardNumber){
    switch (boardNumber) {
        case 0: return ([
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 3, 0, 0, 0, 0, 1, 6, 0],
                    [0, 6, 7, 0, 3, 5, 0, 0, 4],
                    [6, 0, 8, 1, 2, 0, 9, 0, 0],
                    [0, 9, 0, 0, 8, 0, 0, 3, 0],
                    [0, 0, 2, 0, 7, 9, 8, 0, 6],
                    [8, 0, 0, 6, 9, 0, 3, 5, 0],
                    [0, 2, 6, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]);
                break;
        case 1: return ([
                    [0, 0, 0, 0, 0, 8, 9, 1, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 3],
                    [9, 0, 0, 0, 2, 7, 0, 0, 5],
                    [3, 0, 2, 5, 6, 0, 0, 0, 0],
                    [5, 0, 0, 0, 0, 0, 0, 0, 8],
                    [0, 0, 0, 0, 8, 3, 5, 0, 4],
                    [8, 0, 0, 7, 4, 0, 0, 0, 2],
                    [6, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 5, 7, 3, 0, 0, 0, 0, 0]
                ]);
                break;
        case 2: return ([
                    [0, 5, 9, 0, 0, 0, 3, 8, 0],
                    [2, 0, 0, 9, 0, 1, 0, 0, 6],
                    [8, 0, 0, 0, 7, 0, 0, 0, 2],
                    [9, 0, 0, 0, 0, 0, 0, 0, 3],
                    [1, 0, 0, 0, 0, 0, 0, 0, 5],
                    [0, 2, 0, 0, 0, 0, 0, 7, 0],
                    [0, 0, 1, 0, 0, 0, 8, 0, 0],
                    [0, 0, 0, 5, 0, 6, 0, 0, 0],
                    [0, 0, 0, 0, 2, 0, 0, 0, 0]
                ]);
                break;
    }
}

function puzzleSizeSixteen (boardNumber){
    // return ([
    //     [0, 13, 0, 1, 9, 0, 15, 0, 0, 7, 0, 3, 2, 0, 14, 0],
    //     [16, 0, 0, 7, 10, 6, 0, 2, 11, 0, 5, 12, 8, 0, 0, 15],
    //     [0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0],
    //     [5, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4],
    //     [1, 9, 12, 0, 0, 0, 13, 0, 0, 3, 0, 0, 0, 5, 6, 10],
    //     [0, 15, 0, 0, 0, 14, 11, 0, 0, 10, 16, 0, 0, 0, 12, 0],
    //     [13, 0, 0, 0, 2, 7, 0, 0, 0, 0, 8, 4, 0, 0, 0, 1],
    //     [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    //     [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
    //     [12, 0, 0, 0, 16, 8, 0, 0, 0, 0, 9, 15, 0, 0, 0, 14],
    //     [0, 10, 0, 0, 0, 4, 12, 0, 0, 11, 6, 0, 0, 0, 7, 0],
    //     [2, 3, 15, 0, 0, 0, 1, 0, 0, 14, 0, 0, 0, 6, 13, 9],
    //     [6, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 5],
    //     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0],
    //     [4, 0, 0, 8, 15, 9, 0, 3, 1, 0, 13, 7, 11, 0, 0, 16],
    //     [0, 14, 0, 2, 5, 0, 4, 0, 0, 15, 0, 10, 3, 0, 1, 0]]
    // );

    // return ([
    //     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 16, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 10, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 9, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

        return ([
            [0, 0, 0, 4, 0, 0, 0, 9, 8, 0, 0, 0, 12, 0, 0, 0],
            [0, 0, 7, 8, 0, 0, 4, 0, 0, 14, 0, 0, 3, 9, 0, 0],
            [0, 15, 10, 0, 0, 13, 0, 0, 0, 0, 3, 0, 0, 6, 7, 0],
            [12, 13, 0, 0, 8, 0, 0, 0, 0, 0, 0, 9, 0, 0, 4, 10],
            [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0],
            [0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0],
            [0, 9, 0, 0, 0, 0, 0, 14, 2, 0, 0, 0, 0, 0, 8, 0],
            [13, 0, 0, 0, 0, 0, 10, 0, 0, 5, 0, 0, 0, 0, 0, 4],
            [3, 0, 0, 0, 0, 0, 5, 0, 0, 8, 0, 0, 0, 0, 0, 14],
            [0, 11, 0, 0, 0, 0, 0, 8, 15, 0, 0, 0, 0, 0, 9, 0],
            [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0],
            [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
            [4, 3, 0, 0, 10, 0, 0, 0, 0, 0, 0, 18, 0, 0, 12, 9],
            [0, 7, 6, 0, 0, 8, 0, 0, 0, 0, 12, 0, 0, 4, 10, 0],
            [0, 0, 14, 10, 0, 0, 12, 0, 0, 9, 0, 0, 11, 13, 0, 0],
            [0, 0, 0, 9, 0, 0, 0, 11, 4, 0, 0, 0, 8, 0, 0, 0]]);

    // switch (boardNumber) {
    //     case 0,1,2: return ([
    //                 [0, 13, 0, 1, 9, 0, 15, 0, 0, 7, 0, 3, 2, 0, 14, 0],
    //                 [16, 0, 0, 7, 10, 6, 0, 2, 11, 0, 5, 12, 8, 0, 0, 15],
    //                 [0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0],
    //                 [5, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4],
    //                 [1, 9, 12, 0, 0, 0, 13, 0, 0, 3, 0, 0, 0, 5, 6, 10],
    //                 [0, 15, 0, 0, 0, 14, 11, 0, 0, 10, 16, 0, 0, 0, 12, 0],
    //                 [13, 0, 0, 0, 2, 7, 0, 0, 0, 0, 8, 4, 0, 0, 0, 1],
    //                 [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    //                 [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
    //                 [12, 0, 0, 0, 16, 8, 0, 8, 0, 0, 9, 15, 0, 0, 0, 14],
    //                 [0, 10, 0, 0, 0, 4, 12, 0, 0, 11, 6, 0, 0, 0, 7, 0],
    //                 [2, 3, 15, 0, 0, 0, 1, 0, 0, 14, 0, 0, 0, 6, 13, 9],
    //                 [6, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 5],
    //                 [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0],
    //                 [4, 0, 0, 8, 15, 9, 0, 3, 1, 0, 13, 7, 11, 0, 0, 16],
    //                 [0, 14, 0, 2, 5, 0, 4, 0, 0, 15, 0, 10, 3, 0, 1, 0]]
    //             );
    //             break;
    //     case 1: return ([
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    //             );
    //             break;
    //     case 2: return ([
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    //             );
    //             break;
    // }
}

function puzzleSizeTwentyFive (boardNumber){
    // return ([
    //     [5, 8, 12, 0, 15, 6, 10, 0, 0, 20, 0, 21, 0, 14, 0, 3, 0, 0, 2, 19, 13, 0, 25, 1, 18],
    //     [7, 0, 0, 23, 0, 0, 0, 4, 15, 2, 3, 5, 9, 12, 13, 25, 21, 1, 0, 0, 0, 20, 0, 0, 17],
    //     [21, 0, 9, 0, 0, 16, 17, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 24, 13, 4, 0, 0, 3, 0, 22],
    //     [0, 6, 0, 0, 20, 7, 0, 0, 0, 9, 23, 1, 11, 25, 15, 22, 0, 0, 0, 18, 10, 0, 0, 5, 0],
    //     [10, 0, 0, 18, 13, 0, 0, 3, 25, 0, 0, 17, 0, 20, 0, 0, 11, 7, 0, 0, 4, 8, 0, 0, 24],
    //     [4, 0, 25, 7, 0, 0, 20, 15, 0, 0, 18, 23, 10, 16, 12, 0, 0, 6, 19, 0, 0, 17, 2, 0, 9],
    //     [3, 0, 11, 0, 0, 23, 2, 0, 0, 24, 0, 0, 13, 0, 0, 7, 0, 0, 25, 8, 0, 0, 22, 0, 20],
    //     [0, 20, 1, 0, 5, 12, 0, 0, 13, 0, 0, 3, 22, 21, 0, 0, 24, 0, 0, 2, 16, 0, 11, 6, 0],
    //     [0, 24, 0, 0, 22, 0, 0, 8, 0, 0, 1, 0, 0, 0, 11, 0, 0, 18, 0, 0, 23, 0, 0, 12, 0],
    //     [23, 12, 0, 16, 0, 0, 14, 0, 0, 22, 0, 0, 15, 17, 0, 13, 0, 0, 20, 0, 0, 25, 0, 18, 4],
    //     [0, 15, 0, 1, 0, 17, 0, 0, 10, 0, 0, 11, 0, 24, 0, 0, 7, 0, 0, 14, 0, 2, 0, 16, 0],
    //     [9, 10, 0, 19, 23, 24, 0, 16, 0, 1, 21, 0, 0, 0, 2, 0, 0, 3, 0, 15, 5, 6, 0, 22, 25],
    //     [0, 11, 3, 12, 0, 22, 0, 13, 0, 25, 0, 0, 7, 0, 0, 24, 0, 20, 0, 16, 0, 21, 15, 23, 0],
    //     [14, 7, 0, 24, 21, 8, 0, 20, 0, 0, 17, 0, 0, 0, 3, 1, 0, 5, 0, 13, 9, 18, 0, 4, 12],
    //     [0, 25, 0, 5, 0, 4, 0, 0, 14, 0, 0, 22, 0, 8, 0, 0, 18, 0, 0, 12, 0, 11, 0, 17, 0],
    //     [8, 23, 0, 21, 0, 0, 16, 0, 0, 19, 0, 14, 5, 0, 0, 10, 0, 0, 11, 0, 0, 3, 0, 2, 1],
    //     [0, 3, 0, 0, 12, 0, 0, 24, 0, 0, 22, 0, 0, 0, 16, 0, 0, 2, 0, 0, 25, 0, 0, 19, 0],
    //     [0, 14, 16, 0, 110, 1, 0, 0, 3, 0, 0, 4, 12, 19, 0, 0, 13, 0, 0, 25, 22, 0, 9, 20, 0],
    //     [20, 0, 17, 0, 0, 2, 8, 0, 0, 13, 0, 0, 18, 0, 0, 15, 0, 0, 24, 21, 0, 0, 12, 0, 6],
    //     [11, 0, 18, 25, 0, 0, 4, 14, 0, 0, 8, 24, 23, 1, 6, 0, 0, 12, 7, 0, 0, 10, 16, 0, 5],
    //     [15, 0, 0, 4, 7, 0, 0, 9, 20, 0, 0, 25, 0, 5, 0, 0, 10, 17, 0, 0, 14, 12, 0, 0, 8],
    //     [0, 21, 0, 0, 2, 25, 0, 0, 0, 12, 4, 6, 14, 7, 17, 20, 0, 0, 0, 22, 19, 0, 0, 15, 0],
    //     [12, 0, 24, 0, 0, 3, 15, 11, 0, 0, 0, 0, 21, 0, 0, 0, 0, 19, 1, 23, 0, 0, 17, 0, 10],
    //     [25, 0, 0, 11, 0, 0, 0, 10, 17, 4, 15, 13, 8, 2, 23, 12, 6, 9, 0, 0, 0, 22, 0, 0, 16],
    //     [1, 18, 19, 0, 17, 14, 22, 0, 0, 5, 0, 10, 0, 9, 0, 8, 0, 0, 16, 11, 7, 0, 4, 21, 13]
    // ]);
    return ([
        [25, 24, 23, 0, 0,          22, 3, 0, 0, 0,          9, 0, 0, 0, 0,              14, 0, 16, 0, 0,              19, 20, 0, 0, 0],
        [9, 0, 0, 0, 0,          0, 16, 23, 0, 18,          19, 20, 21, 24, 25,              0, 0, 7, 8, 10,              0, 12, 0, 14, 22],
        [22, 0, 0, 0, 16,          0, 20, 21, 24, 25,          0, 8, 0, 0, 18,              9, 3, 0, 5, 0,              0, 0, 0, 15, 23],
        [0, 0, 17, 18, 21,          0, 5, 1, 2, 0,          22, 0, 0, 23, 16,              0, 12, 0, 19, 20,              0, 7, 8, 0, 0],
        [7, 0, 19, 20, 0,          0, 10, 0, 12, 13,          0, 0, 0, 0, 0,              22, 0, 23, 24, 25,              3, 0, 16, 17, 0],

        [1, 0, 0, 17, 22,          5, 0, 9, 0, 0,          0, 21, 0, 19, 0,              0, 0, 25, 23, 24,              12, 16, 0, 20, 8],
        [16, 0, 25, 0, 19,          1, 2, 12, 21, 0,          24, 17, 23, 14, 0,              0, 11, 10, 0, 22,              13, 0, 0, 6, 15],
        [24, 0, 18, 0, 0,          20, 0, 0, 23, 0,          0, 0, 7, 0, 0,              0, 0, 19, 0, 21,              0, 0, 0, 25, 0],
        [0, 0, 0, 0, 20,          7, 15, 0, 18, 10,          25, 0, 0, 9, 8,              0, 0, 6, 0, 5,              21, 24, 0, 0, 19],
        [21, 0, 0, 0, 23,          24, 0, 16, 25, 22,          0, 0, 20, 0, 12,              0, 0, 8, 0, 13,              0, 1, 14, 0, 5],

        [12, 1, 2, 0, 0,          21, 13, 0, 0, 0,          20, 19, 0, 0, 14,              0, 23, 24, 0, 0,              0, 25, 0, 22, 0],
        [15, 17, 7, 6, 0,          16, 0, 14, 22, 9,          0, 25, 10, 8, 0,              0, 0, 20, 12, 2,              23, 0, 0, 18, 21],
        [0, 21, 10, 22, 0,          0, 0, 0, 0, 12,          0, 1, 24, 0, 0,              25, 0, 14, 0, 8,              0, 3, 20, 16, 0],
        [0, 14, 0, 25, 0,          0, 0, 0, 4, 0,          0, 23, 0, 21, 9,              19, 22, 0, 0, 15,              0, 0, 0, 8, 10],
        [0, 19, 16, 23, 0,          17, 25, 24, 0, 0,          0, 22, 0, 15, 4,              0, 7, 18, 21, 0,              14, 0, 1, 0, 0],

        [2, 20, 1, 11, 0,          10, 0, 0, 0, 23,          6, 0, 0, 13, 19,              24, 0, 22, 0, 17,              25, 15, 0, 0, 16],
        [13, 22, 0, 0, 7,          0, 6, 4, 1, 0,          0, 15, 17, 0, 20,              21, 19, 0, 25, 14,              0, 0, 5, 0, 24],
        [0, 18, 5, 21, 25,          0, 0, 0, 0, 16,          3, 0, 4, 1, 0,              0, 0, 12, 10, 0,              20, 0, 6, 7, 0],
        [23, 0, 9, 0, 10,          14, 24, 25, 0, 0,          18, 0, 12, 5, 21,              20, 0, 0, 1, 3,              22, 0, 19, 0, 0],
        [14, 6, 15, 24, 17,          8, 0, 0, 20, 19,          23, 0, 25, 0, 22,              16, 0, 5, 13, 0,              10, 21, 0, 1, 0],

        [3, 16, 0, 0, 0,          0, 22, 0, 0, 21,          8, 6, 0, 0, 10,              23, 25, 0, 11, 0,              24, 4, 0, 0, 0],
        [0, 25, 21, 7, 11,          0, 0, 0, 0, 1,          0, 12, 22, 0, 23,              0, 0, 0, 14, 19,              0, 5, 18, 0, 0],
        [18, 5, 13, 0, 24,          25, 17, 0, 14, 0,          21, 0, 2, 3, 0,              0, 20, 0, 22, 16,              0, 0, 23, 0, 0],
        [0, 0, 20, 19, 15,          0, 23, 13, 0, 24,          0, 18, 0, 4, 7,              0, 10, 3, 0, 0,              0, 0, 25, 21, 11],
        [0, 23, 22, 0, 12,          0, 8, 0, 19, 15,          17, 13, 0, 25, 24,              5, 0, 21, 18, 0,              0, 0, 0, 0, 1],
    ]);
    // return ([
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // ]);
}

export { retrievePuzzle };