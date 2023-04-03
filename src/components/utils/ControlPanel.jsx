import React, { useState, useRef, useCallback } from 'react';
import ControlView from '../views/ControlView';
import { useAnimate } from './useAnimate';
import NewGen from './NewGen';
import Presets from './Presets';
import PatternDropDown from '../views/PatternDropDown';
import Rules from '../views/Rules';

function ControlPanel() {
    const interval = useRef(null);
    const [gameRunning, setGameRunning] = useState(false);
    const [speed, setSpeed] = useState(25);

    const [
        canvasRef,
        cell_size,
        initialGrid,
        nextGrid,
        setNextGrid,
        gen,
        setGen,
        width,
        height,
    ] = useAnimate();

    function updateGrid() {
        setNextGrid((grid) => NewGen(grid, height, width, cell_size));
        setGen((prevGen) => prevGen + 1);
    }

    // gpt version
    const handleClick = useCallback(
        (e) => {
            stopGame();
            let mousePos = getCoodinates(e, canvasRef, cell_size);

            const currentCood = {
                x: mousePos.x,
                y: mousePos.y,
            };

            const newGrid = nextGrid.map((row, key) => {
                if (key === currentCood.y / cell_size) {
                    return row.map((col, col_key) => {
                        if (col_key === currentCood.x / cell_size) {
                            return col === 0 ? 1 : 0;
                        } else {
                            return col;
                        }
                    });
                } else {
                    return row;
                }
            });
            setNextGrid(newGrid);
        },
        [canvasRef, cell_size, nextGrid]
    );

    const stopGame = useCallback(() => {
        setGameRunning(false);
        clearInterval(interval.current);
    }, []);

    const startGame = useCallback(() => {
        stopGame();
        setGameRunning(true);
        interval.current = setInterval(
            () => requestAnimationFrame(updateGrid),
            speed
        );
    }, [stopGame, speed]);

    const clearBoard = useCallback(() => {
        stopGame();
        setNextGrid(initialGrid);
        setGen(0);
    }, [stopGame, initialGrid]);

    const handlePresets = useCallback(
        (e) => {
            stopGame();
            clearBoard();
            setNextGrid(Presets(e.target.value, height, width, cell_size));
            setGen(0);
        },
        [stopGame, height, width, cell_size]
    );

    const controlSpeed = useCallback(
        (e) => {
            stopGame();
            setSpeed(e.target.value);
            startGame();
        },
        [stopGame, startGame]
    );

    const getCoodinates = useCallback((e, canvasRef, cell_size) => {
        let bound = canvasRef.current.getBoundingClientRect();
        const currentCood = {
            x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
            y: e.clientY - bound.top - ((e.clientY - bound.top) % cell_size),
        };
        return currentCood;
    }, []);

    return (
        <>
            <ControlView
                controlSpeed={controlSpeed}
                startGame={startGame}
                stopGame={stopGame}
                clearBoard={clearBoard}
                gameRunning={gameRunning}
                handlePresets={handlePresets}
                speed={speed}
            />
            <PatternDropDown handlePresets={handlePresets} />
            <Rules />

            <canvas
                ref={canvasRef}
                id='canvas'
                width={width}
                height={height}
                onClick={handleClick}
            />
        </>
    );
}

export default ControlPanel;
