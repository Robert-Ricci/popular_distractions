import React from 'react';
import Distracted from '../distracted.jpg'
const Home = () => {
    return (
        <div className="home">
            <br />
            <h1> Welcome to Popular Distractions!</h1>
            <h2>The premier place to get distracted</h2>
            <img src ={Distracted} alt="distracted" />
        </div>
    );
};

export default Home;