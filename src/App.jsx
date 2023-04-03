import React from 'react';
import './App.css';
import ControlPanel from './components/utils/ControlPanel';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
    return (
        <div className='app'>
            <Header />
            <ControlPanel />
            <Footer />
        </div>
    );
}

export default App;
