import { useEffect, useState, useRef } from 'react';
import Presets from './Presets';

export const height = 700;
export const width = 700;
export const cell_size = 7;

export function useAnimate() {
    const canvasRef = useRef(null);
    const [gen, setGen] = useState(0);

    const [nextGrid, setNextGrid] = useState(
        Presets('gospers_glider_gun', height, width, cell_size)
    );

    const ROWS = Math.floor(height / cell_size);
    const COLS = Math.floor(width / cell_size);

    // creates initial grid 2d filled with zeros
    const [initialGrid] = useState(
        new Array(ROWS).fill(null).map(() => new Array(COLS).fill(0))
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function render(grid, context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let row = 0; row < grid.length; row++) {
                for (let col = 0; col < grid[row].length; col++) {
                    const cell = grid[row][col];

                    context.beginPath();

                    context.rect(
                        col * cell_size,
                        row * cell_size,
                        cell_size,
                        cell_size
                    );

                    if (cell === 1) {
                        context.fillStyle = 'hsl(322,100%,69%)';
                    } else {
                        context.fillStyle = 'hsl(237, 69%, 13%)';
                    }
                    context.fill();
                    context.lineWidth = 0.25;
                    context.strokeStyle = 'hsl(205, 35%, 33%)';

                    context.stroke();
                }
            }
        }
        // clear canvas before next render
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.clearRect(0, 0, height, width);

        render(nextGrid, ctx);
    }, [nextGrid, gen]);
    // console.log(`initialGrid: ${initialGrid}`);
    return [
        canvasRef,
        cell_size,
        initialGrid,
        nextGrid,
        setNextGrid,
        gen,
        setGen,
        width,
        height,
    ];
}
