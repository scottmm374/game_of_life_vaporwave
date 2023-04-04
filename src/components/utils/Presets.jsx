export default function Presets(choice) {
    const COLS = 70;
    const ROWS = 70;

    let presetGrid = Array.from({ length: ROWS }, () =>
        new Array(COLS).fill(0)
    );

    if (choice === 'dart') {
        const pattern = [
            [0, 1],
            [1, 0],
            [1, 2],
            [2, 0],
            [2, 3],
            [3, 2],
            [4, 0],
            [4, 1],
            [4, 2],
            [4, 3],
            [5, 1],
            [5, 3],
            [5, 4],
            [5, 6],
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 7],
            [6, 8],
            [7, 7],
            [7, 8],
            [8, 0],
            [8, 1],
            [8, 2],
            [8, 7],
            [8, 8],
            [9, 1],
            [9, 3],
            [9, 4],
            [9, 6],
            [10, 0],
            [10, 1],
            [10, 2],
            [10, 3],
            [11, 2],
            [12, 0],
            [12, 3],
            [13, 0],
            [13, 2],
            [14, 1],
        ];
        const row = 15;
        const col = 9;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        // Removed this to start at left and move right
        const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    } else if (choice === 'two_darts') {
        const pattern = [
            [0, 1],
            [0, 10],
            [1, 0],
            [1, 2],
            [1, 9],
            [1, 11],
            [2, 0],
            [2, 3],
            [2, 9],
            [2, 12],
            [3, 2],
            [3, 11],
            [4, 0],
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 9],
            [4, 10],
            [4, 11],
            [4, 12],
            [5, 1],
            [5, 3],
            [5, 4],
            [5, 6],
            [5, 10],
            [5, 12],
            [5, 13],
            [5, 15],
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 7],
            [6, 8],
            [6, 9],
            [6, 10],
            [6, 11],
            [6, 16],
            [6, 17],
            [7, 7],
            [7, 8],
            [7, 16],
            [7, 17],
            [8, 0],
            [8, 1],
            [8, 2],
            [8, 7],
            [8, 8],
            [8, 9],
            [8, 10],
            [8, 11],
            [8, 16],
            [8, 17],
            [9, 1],
            [9, 3],
            [9, 4],
            [9, 6],
            [9, 10],
            [9, 12],
            [9, 13],
            [9, 15],
            [10, 0],
            [10, 1],
            [10, 2],
            [10, 3],
            [10, 9],
            [10, 10],
            [10, 11],
            [10, 12],
            [11, 2],
            [11, 11],
            [12, 0],
            [12, 3],
            [12, 9],
            [12, 12],
            [13, 0],
            [13, 2],
            [13, 9],
            [13, 11],
            [14, 1],
            [14, 10],
        ];
        const row = 15;
        const col = 18;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    } else if (choice === 'spaceship') {
        const pattern = [
            [0, 23],
            [1, 23],
            [2, 22],
            [2, 24],
            [4, 21],
            [4, 25],
            [5, 20],
            [5, 21],
            [5, 25],
            [5, 26],
            [6, 18],
            [6, 19],
            [6, 21],
            [6, 25],
            [6, 27],
            [6, 28],
            [7, 16],
            [7, 17],
            [7, 19],
            [7, 21],
            [7, 25],
            [7, 27],
            [7, 29],
            [7, 30],
            [8, 12],
            [8, 16],
            [8, 17],
            [8, 18],
            [8, 20],
            [8, 26],
            [8, 28],
            [8, 29],
            [8, 30],
            [8, 34],
            [9, 12],
            [9, 13],
            [9, 14],
            [9, 15],
            [9, 16],
            [9, 17],
            [9, 29],
            [9, 30],
            [9, 31],
            [9, 32],
            [9, 33],
            [9, 34],
            [10, 11],
            [10, 14],
            [10, 19],
            [10, 27],
            [10, 32],
            [10, 35],
            [11, 19],
            [11, 27],
            [12, 10],
            [12, 11],
            [12, 12],
            [12, 34],
            [12, 35],
            [12, 36],
            [13, 9],
            [13, 11],
            [13, 12],
            [13, 34],
            [13, 35],
            [13, 37],
            [14, 8],
            [14, 11],
            [14, 35],
            [14, 38],
            [15, 8],
            [15, 38],
            [16, 9],
            [16, 10],
            [16, 36],
            [16, 37],
            [17, 9],
            [17, 10],
            [17, 36],
            [17, 37],
            [18, 0],
            [18, 1],
            [18, 2],
            [18, 9],
            [18, 37],
            [18, 44],
            [18, 45],
            [18, 46],
            [19, 1],
            [19, 8],
            [19, 9],
            [19, 10],
            [19, 36],
            [19, 37],
            [19, 38],
            [19, 45],
            [20, 6],
            [20, 7],
            [20, 10],
            [20, 36],
            [20, 39],
            [20, 40],
            [21, 2],
            [21, 3],
            [21, 5],
            [21, 7],
            [21, 8],
            [21, 9],
            [21, 37],
            [21, 38],
            [21, 39],
            [21, 41],
            [21, 43],
            [21, 44],
            [22, 1],
            [22, 5],
            [22, 7],
            [22, 39],
            [22, 41],
            [22, 45],
            [23, 1],
            [23, 5],
            [23, 6],
            [23, 40],
            [23, 41],
            [23, 45],
        ];
        const row = 24;
        const col = 47;
        // const offsetR = 23;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    } else if (choice === 'dragon') {
        const pattern = [
            [0, 16],
            [1, 0],
            [1, 15],
            [1, 16],
            [2, 1],
            [2, 2],
            [2, 7],
            [2, 9],
            [2, 15],
            [2, 16],
            [2, 18],
            [3, 5],
            [3, 10],
            [3, 13],
            [3, 14],
            [3, 15],
            [3, 19],
            [3, 23],
            [4, 0],
            [4, 3],
            [4, 4],
            [4, 5],
            [4, 11],
            [4, 13],
            [4, 20],
            [4, 23],
            [4, 27],
            [4, 28],
            [5, 5],
            [5, 7],
            [5, 9],
            [5, 13],
            [5, 20],
            [5, 21],
            [5, 23],
            [5, 27],
            [5, 28],
            [6, 1],
            [6, 2],
            [6, 10],
            [6, 12],
            [6, 23],
            [6, 27],
            [6, 28],
            [7, 0],
            [7, 7],
            [7, 22],
            [7, 23],
            [8, 6],
            [8, 8],
            [8, 21],
            [9, 6],
            [9, 8],
            [9, 21],
            [10, 0],
            [10, 7],
            [10, 22],
            [10, 23],
            [11, 1],
            [11, 2],
            [11, 10],
            [11, 12],
            [11, 23],
            [11, 27],
            [11, 28],
            [12, 5],
            [12, 7],
            [12, 9],
            [12, 13],
            [12, 20],
            [12, 21],
            [12, 23],
            [12, 27],
            [12, 28],
            [13, 0],
            [13, 3],
            [13, 4],
            [13, 5],
            [13, 11],
            [13, 13],
            [13, 20],
            [13, 23],
            [13, 27],
            [13, 28],
            [14, 5],
            [14, 10],
            [14, 13],
            [14, 14],
            [14, 15],
            [14, 19],
            [14, 23],
            [15, 1],
            [15, 2],
            [15, 7],
            [15, 9],
            [15, 15],
            [15, 16],
            [15, 18],
            [16, 0],
            [16, 15],
            [16, 16],
            [17, 16],
        ];
        const row = 18;
        const col = 29;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        const offsetC = 1;
        // const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    } else if (choice === 'random') {
        presetGrid = new Array(ROWS)
            .fill(null)
            .map(() =>
                new Array(COLS)
                    .fill(null)
                    .map(() => Math.floor(Math.random() * 2))
            );
    } else if (choice === 'beacon') {
        const pattern = [
            [0, 4],
            [0, 5],
            [0, 12],
            [0, 13],
            [1, 3],
            [1, 5],
            [1, 12],
            [1, 14],
            [2, 3],
            [2, 14],
            [3, 0],
            [3, 1],
            [3, 3],
            [3, 14],
            [3, 16],
            [3, 17],
            [4, 0],
            [4, 1],
            [4, 3],
            [4, 5],
            [4, 8],
            [4, 9],
            [4, 12],
            [4, 14],
            [4, 16],
            [4, 17],
            [5, 3],
            [5, 5],
            [5, 7],
            [5, 10],
            [5, 12],
            [5, 14],
            [6, 3],
            [6, 5],
            [6, 7],
            [6, 10],
            [6, 12],
            [6, 14],
            [7, 0],
            [7, 1],
            [7, 3],
            [7, 5],
            [7, 8],
            [7, 9],
            [7, 12],
            [7, 14],
            [7, 16],
            [7, 17],
            [8, 0],
            [8, 1],
            [8, 3],
            [8, 14],
            [8, 16],
            [8, 17],
            [9, 3],
            [9, 14],
            [10, 3],
            [10, 5],
            [10, 12],
            [10, 14],
            [11, 4],
            [11, 5],
            [11, 12],
            [11, 13],
        ];
        const row = 12;
        const col = 18;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    } else if (choice === 'gospers_glider_gun') {
        const pattern = [
            [0, 24],
            [1, 22],
            [1, 24],
            [2, 12],
            [2, 13],
            [2, 20],
            [2, 21],
            [2, 34],
            [2, 35],
            [3, 11],
            [3, 15],
            [3, 20],
            [3, 21],
            [3, 34],
            [3, 35],
            [4, 0],
            [4, 1],
            [4, 10],
            [4, 16],
            [4, 20],
            [4, 21],
            [5, 0],
            [5, 1],
            [5, 10],
            [5, 14],
            [5, 16],
            [5, 17],
            [5, 22],
            [5, 24],
            [6, 10],
            [6, 16],
            [6, 24],
            [7, 11],
            [7, 15],
            [8, 12],
            [8, 13],
        ];
        // const row = 9;
        // const col = 36;
        // const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        // const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[r + 3][c + 10] = 1;
        });
    } else if (choice === 'thunderbird_hassler') {
        const pattern = [
            [0, 3],
            [0, 4],
            [1, 3],
            [1, 4],
            [1, 6],
            [2, 7],
            [3, 4],
            [4, 5],
            [4, 7],
            [4, 8],
            [5, 7],
            [5, 8],
            [11, 12],
            [12, 0],
            [12, 6],
            [12, 7],
            [12, 11],
            [12, 13],
            [13, 0],
            [13, 5],
            [13, 8],
            [13, 10],
            [13, 14],
            [14, 0],
            [14, 6],
            [14, 7],
            [14, 11],
            [14, 13],
            [15, 12],
            [21, 7],
            [21, 8],
            [22, 5],
            [22, 7],
            [22, 8],
            [23, 4],
            [24, 7],
            [25, 3],
            [25, 4],
            [25, 6],
            [26, 3],
            [26, 4],
        ];
        const row = 27;
        const col = 15;
        const offsetR = Math.floor(ROWS / 2) - Math.floor(row / 2);
        const offsetC = Math.floor(COLS / 2) - Math.floor(col / 2);

        pattern.forEach(([r, c]) => {
            presetGrid[offsetR + r][offsetC + c] = 1;
        });
    }
    // console.log(`End of presets ${presetGrid}`);
    return presetGrid;
}
