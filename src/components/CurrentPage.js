import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

function CurrentPage() {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    )
}

export default CurrentPage;