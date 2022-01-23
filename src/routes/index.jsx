import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const Paths = () => {
    return (
        <Routes>
            <Route exact path="/" element={< SignIn/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<SignIn />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    )
}

export default Paths;