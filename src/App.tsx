import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal.tsx';
import Distributive from './components/Distributive.tsx';
import Ncr from './components/Ncr.tsx';
import Tulip from './components/Tulip.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Terminal />} />
                <Route path='/distributive' element={<Distributive />} />
                <Route path='/ncr' element={<Ncr />} />
                <Route path='/tulip' element={<Tulip />} />
            </Routes>
        </Router>
    );
};

export default App;
