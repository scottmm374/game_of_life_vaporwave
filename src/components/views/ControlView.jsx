import React from 'react';

const ControlView = ({ startGame, stopGame, clearBoard }) => {
    return (
        <div className='control-btn-container'>
            <button
                data-text='Play'
                className='control-button tooltip'
                onClick={startGame}
            >
                <i className='fa-solid fa-play'></i>
            </button>

            <button
                data-text='Pause'
                className='control-button tooltip'
                onClick={stopGame}
            >
                <i className='fa-solid fa-pause'></i>
            </button>
            <button
                data-text='Clear'
                className='control-button tooltip'
                onClick={clearBoard}
            >
                <i className='fa-solid fa-arrows-rotate'></i>
            </button>
        </div>
    );
};

export default ControlView;
