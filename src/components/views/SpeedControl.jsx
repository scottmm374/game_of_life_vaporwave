import React from 'react';

const SpeedControl = ({ speed, controlSpeed }) => {
    return (
        <div className='speed-container'>
            <label htmlFor='speed'></label>
            <input
                type='range'
                min='1'
                max='300'
                value={speed}
                onChange={controlSpeed}
                className='speed-slider'
                id='speed'
            />
            <output htmlFor='speed' className='speed-output'>
                {speed} ms
            </output>
        </div>
    );
};

export default SpeedControl;
