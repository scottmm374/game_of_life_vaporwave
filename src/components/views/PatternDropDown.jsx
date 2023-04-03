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
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='beacon'
                            >
                                Beacon
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='dart'
                            >
                                Dart
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='spaceship'
                            >
                                Spaceship
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='dragon'
                            >
                                Dragon
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='two_darts'
                            >
                                Two Darts
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='gospers_glider_gun'
                            >
                                Gospers Glider Gun
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='thunderbird_hassler'
                            >
                                Thunderbird Hassler
                            </button>
                        </li>
                        <li onClick={handleOpen} className='menu-item'>
                            <button
                                className='preset-button'
                                onClick={props.handlePresets}
                                value='random'
                            >
                                Random
                            </button>
                        </li>
                    </ul>
                ) : null}
                {/* {open ? <div>{EventTarget.value}</div> : <div>Is Closed</div>} */}
            </div>
        </div>

        // <div className='preset-container'>
        //     <div className='button-container'>
        //         <button className='titles-preset-rules'>Choose a Preset</button>
        //         <ul className='drowpdown'>
        //             <li>
        //                 <button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='thunderbird'
        //                 >
        //                     Thunderbird
        //                 </button>
        //             </li>
        //             <li>
        //                 <button
        //                     button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='quad_thunderbird'
        //                 >
        //                     Quad-Thunderbird
        //                 </button>
        //             </li>
        //             <li>
        //                 <button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='infinite'
        //                 >
        //                     Infinite
        //                 </button>
        //             </li>
        //             <li>
        //                 <button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='gospers_glider_gun'
        //                 >
        //                     Gospers Glider Gun
        //                 </button>
        //             </li>
        //             <li>
        //                 <button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='mash_up'
        //                 >
        //                     Mash-up
        //                 </button>
        //             </li>
        //             <li>
        //                 <button
        //                     className='preset-button'
        //                     onClick={props.handlePresets}
        //                     value='random'
        //                 >
        //                     Random
        //                 </button>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
};

export default PresetView;
