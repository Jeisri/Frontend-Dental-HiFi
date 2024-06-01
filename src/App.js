import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './components/Home'; 
import Handson from './components/Handson';
import Filters from './components/Filters';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/handson" element={<Handson />} />
                </Routes>
               <Filters />
            </div> 
            
        </Router>
    );
};

export default App;
