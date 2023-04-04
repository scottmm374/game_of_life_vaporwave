import * as React from 'react';

const PresetView = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='preset-container'>
            <div className='dropdown'>
                <button className='preset-button' onClick={handleOpen}>
                    Choose Pattern
                </button>
                {open ? (
                    <ul className='menu'>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='beacon'
                            >
                                Beacon
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='dart'
                            >
                                Dart
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='spaceship'
                            >
                                Spaceship
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='dragon'
                            >
                                Dragon
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='two_darts'
                            >
                                Two Darts
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='gospers_glider_gun'
                            >
                                Gospers Glider Gun
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='thunderbird_hassler'
                            >
                                Thunderbird Hassler
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                // className='preset-button'
                                onClick={props.handlePresets}
                                value='random'
                            >
                                Random
                            </button>
                        </li>
                    </ul>
                ) : null}
            </div>
        </div>
    );
};

export default PresetView;
