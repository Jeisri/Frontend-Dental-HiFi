
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/LoginPage';
import Doctor from './components/DoctorProfile';
import Handson from './components/Handson';
import Filters from './components/Filters';
import Blog from './components/Blog';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/" element={<Doctor />} />
                    <Route path="/" element={<Handson />} />
                </Routes>
             
              
            </div> 
            
        </Router>
    );
};

export default App;
