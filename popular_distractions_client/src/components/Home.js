import React from 'react';
import Distracted from '../distracted.jpg'
import Image from 'react-bootstrap/Image'

const Home = () => {
    return (
        <div className="home">
            <br />
            <h1> Welcome to Popular Distractions!</h1>
            <h2>The premier place to get distracted</h2>
            <Image src ={Distracted} alt="distracted" roundedCircle/>
        </div>
    );
};

export default Home;