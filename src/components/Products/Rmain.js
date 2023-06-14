import React from 'react';
import './Rmain.css';
function Rmain(props) {
    return (
        <div className="rap_main">
        
        <div className="rap_main_img">{props.number}</div>
        <div className="rap_main_name">{props.name}</div>
        <div className="rap_main_price"> {props.local} {props.price}원</div>
                
        </div>
    );
}

export default Rmain;