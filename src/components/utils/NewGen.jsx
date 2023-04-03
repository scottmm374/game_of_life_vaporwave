export default function NewGen(grid) {
    // copy of grid
    const newGenGrid = grid.map((array) => [...array]);

    // Game logic

    for (let row = 1; row < grid.length - 1; row++) {
        for (let col = 1; col < grid[0].length - 1; col++) {
            let neighbors = 0;

            // check if in bounds, Then add up neighbors
            if (
                row >= 0 &&
                col >= 0 &&
                row < grid.length &&
                col < grid[0].length
            ) {
                // bitwise operators to optimize
                neighbors += grid[row - 1][col - 1] | 0;
                neighbors += grid[row][col - 1] | 0;
                neighbors += grid[row + 1][col - 1] | 0;
                neighbors += grid[row - 1][col] | 0;
                neighbors += grid[row + 1][col] | 0;
                neighbors += grid[row - 1][col + 1] | 0;
                neighbors += grid[row][col + 1] | 0;
                neighbors += grid[row + 1][col + 1] | 0;
            }

            // Game Rules for Dead/Alive
            const cell = grid[row][col];
            if ((cell === 1 && neighbors <= 1) || neighbors >= 4) {
                newGenGrid[row][col] = 0;
            } else if (cell === 0 && neighbors === 3) {
                newGenGrid[row][col] = 1;
            }
        }
    }

    return newGenGrid;
}
