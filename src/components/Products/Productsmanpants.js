import React, { useEffect, useState } from 'react';
import './Productsmanentire.css';

import Productsmainbest from './Productsmainbest';
import CustomProductItem from './CustomProductItem';
import { getItems , getItemsImage } from '../API/ItemAPI';
import ProductDetail from '../API/ProductDetail';

function Productsmanpants() {
  const [item, setItems] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const item1 = await getItems('76');
        const item2 = await getItems('82');
        const item3 = await getItems('88');

        const ItemData = [item1, item2, item3];
        setItems(ItemData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItemImageUrls = async () => {
      try {
        const itemIds = item.map((item) => item.id);
        const urls = await Promise.all(itemIds.map((itemId) => getItemsImage(itemId)));
        setImageUrls(urls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItemImageUrls();
  }, [item]);


 const handleImageClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const itemList = item.map((item, index) => (
    <CustomProductItem
         key={index}
         name={item?.itemNm}
         price={item?.price}
         itemDetail={item?.itemDetail}
         imageUrl={imageUrls[index]}
    />
  ));

  return (
       <div className="Productsmain">
            <h1>Pants</h1>
            <div className="main_best">
              <div className="main_bestscroll">{itemList}</div>
            </div>
            {selectedItemId && <ProductDetail itemId={selectedItemId} />}
          </div>
  );
}

export default Productsmanpants;

