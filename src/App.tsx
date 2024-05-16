import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal.tsx';
import S22 from './components/S22.tsx';
import F22 from './components/F22.tsx';
import S23 from './components/S23.tsx';
import W24 from './components/W24.tsx';
import S24 from './components/S24.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Terminal />} />
                <Route path='/S22' element={<S22 />} />
                <Route path='/F22' element={<F22 />} />
                <Route path='/S23' element={<S23 />} />
                <Route path='/W24' element={<W24 />} />
                <Route path='/S24' element={<S24 />} />
            </Routes>
        </Router>
    );
};

export default App;
