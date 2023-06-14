import React, { useEffect, useState } from 'react';
import { getItems, getItemsImage } from './ItemAPI';
import { useNavigate } from 'react-router-dom';

function ProductDetail({ itemId }) {
  const [item, setItem] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItemData();
  }, []);

  const fetchItemData = async () => {
    try {
      const itemData = await getItems(itemId);
      const itemImageUrl = await getItemsImage(itemId);
      setItem(itemData);
      setImageUrl(itemImageUrl);
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [count]);

  const calculateTotalPrice = () => {
    const totalCount = Number(count);
    const itemPrice = Number(price);
    const calculatedPrice = totalCount * itemPrice;
    setTotalPrice(calculatedPrice);
  };

  const order = () => {
    const url = "/order";
    const paramData = {
      itemId: itemId,
      count: count
    };

  };

  const addCart = () => {
    const url = "/cart";
    const paramData = {
      itemId: itemId,
      count: count
    };
  };

  const handleImageClick = () => {
    navigate(`/Products/manpants/${itemId}`);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={imageUrl} alt="Item Image" onClick={handleImageClick} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <input type="number" id="count" value={count} onChange={event => setCount(event.target.value)} />
      <input type="number" id="price" value={price} onChange={event => setPrice(event.target.value)} />
      <div id="totalPrice">{totalPrice}원</div>
      <button onClick={calculateTotalPrice}>Calculate Total Price</button>
      <button onClick={order}>Order</button>
      <button onClick={addCart}>Add to Cart</button>
    </div>
  );
}
export default ProductDetail;


