import React from 'react';
import './Productsmainbest.css';
function Productsmainbest(props) {
    return (
        <div className="main_best1">
        <div className="main_img1"></div>
        <div className="main_text1"><h2>{props.name}</h2>{props.price}원</div>
    </div>
    );
}

export default Productsmainbest;