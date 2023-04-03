import * as React from 'react';
import billboard_rules from '../../assets/images/billboard_rules.svg';

const Rules = () => {
    return (
        <div className='rules-container'>
            <img src={billboard_rules} alt='billboard' className='billboard' />
        </div>
    );
};

export default Rules;
