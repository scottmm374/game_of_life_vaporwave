import * as React from 'react';
import billboard from '../../images/rules.svg';

const Rules = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <div className='rules-container'>
            <img
                src={billboard}
                alt='billboard'
                width='500'
                className='billboard'
            />
        </div>
    );
};

export default Rules;
