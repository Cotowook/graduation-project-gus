import React from 'react';

function CustomProductItem(props) {
  const handleClick = () => {
     if (props.onItemClick) {
       props.onItemClick(props.itemId);
     }
   };

   return (
      <div className="product-card" onClick={handleClick}>
        <div className="image-container">
          <img src={props.imageUrl} alt="제품 이미지" className="product-image"
          style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className="product-info">
          <h2 className="product-name">{props.name}</h2>
          <p className="product-price">{props.price}</p>
          <p className="product-detail">{props.itemDetail}</p>
        </div>
      </div>
    );
}

export default CustomProductItem;