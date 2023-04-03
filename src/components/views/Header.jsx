import React from 'react';
import githubOn from '../images/pink_on_git.svg';
import githubOff from '../images/pink_off_git.svg';

const Header = () => {
    const [isOn, setIsOn] = React.useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };
    return (
        <>
            <header>
                <h1 className='neonText'>Game of Life</h1>
            </header>
        </>
    );
};

export default Header;
