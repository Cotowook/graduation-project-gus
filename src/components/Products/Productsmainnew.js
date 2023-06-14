import React from 'react';
import './Productsmainnew.css';
function Productsmainnew(props) {
    return (
        <div className="main_new1">
                            <div className="new_img1"></div>
                            <div className="new_text1"><h2>{props.name}</h2>{props.price}</div>
                        </div>
    );
}

export default Productsmainnew;