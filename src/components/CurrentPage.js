import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';

function CurrentPage() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default CurrentPage;