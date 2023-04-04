import React from 'react';
import './App.css';
import ControlPanel from './components/utils/ControlPanel';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Rules from './components/views/Rules';
import Icons from './components/views/Icons';

function App() {
    return (
        <div className='app'>
            <Header />
            <Icons />
            <ControlPanel />
            <Rules />
            <Footer />
        </div>
    );
}

export default App;
