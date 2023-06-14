import React, { useEffect, useState } from 'react';
import './Productsmanentire.css';

import Productsmainbest from './Productsmainbest';
import CustomProductItem from './CustomProductItem';
import { getItems , getItemsImage } from '../API/ItemAPI';
import ProductDetail from '../API/ProductDetail';

function Productsmanpants()
 {
   const [items, setItems] = useState([]);
   const [imageUrls, setImageUrls] = useState([]);
   const [selectedItemId, setSelectedItemId] = useState(null);

   useEffect(() => {
     fetchItemsData();
   }, []);

   useEffect(() => {
     fetchItemImageUrls();
   }, [items]);

   const fetchItemsData = async () => {
     try {
       const itemIds = ['76', '82', '88'];
       const itemDataPromises = itemIds.map(itemId => getItems(itemId));
       const itemData = await Promise.all(itemDataPromises);
       setItems(itemData);
     } catch (error) {
       console.error('Error fetching item data:', error);
     }
   };

   const fetchItemImageUrls = async () => {
     try {
       const itemIds = items.map(item => item.id);
       const urls = await Promise.all(itemIds.map(itemId => getItemsImage(itemId)));
       setImageUrls(urls);
     } catch (error) {
       console.error('Error fetching item image URLs:', error);
     }
   };

   const handleImageClick = (itemId) => {
     setSelectedItemId(itemId);
   };

   const itemList = items.map((item, index) => (
     <CustomProductItem
       key={index}
       name={item?.itemNm}
       price={item?.price}
       itemDetail={item?.itemDetail}
       imageUrl={imageUrls[index]}
       onItemClick={() => handleImageClick(item.id)}
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

