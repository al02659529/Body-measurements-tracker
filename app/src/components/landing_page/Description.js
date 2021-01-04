import React from 'react';
import './Description.css'
import demo from './../../media/demo.png'

const Description = () => {
    return (
        <div className="description">
            <h1>Fitness progress tracker web based app</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quia, temporibus! Ad animi commodi dolor magni maiores nostrum</p>
            <button className="btn btn--red m-lr-s">Overview app</button>
            <img src={demo} alt="demo"/>
        </div>
    );
};

export default Description;
