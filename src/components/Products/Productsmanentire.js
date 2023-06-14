import {React,useEffect,useState} from 'react';
import './Productsmanentire.css';

import Productsmainbest from './Productsmainbest';
import CustomProductItem from './CustomProductItem';
import { getItems , getItemsImage } from '../API/ItemAPI';
import ProductDetail from '../API/ProductDetail';

function Productsmantire()
{
  const [items, setItems] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const itemIds = Array.from({ length: 107 }, (_, index) => index.toString());

  useEffect(() => {
    fetchItemsData();
  }, []);

  useEffect(() => {
    fetchItemImageUrls();
  }, [items]);


const fetchItems = async () => {
  try {
    const itemData = await Promise.all(itemIds.map(itemId => getItems(itemId)));
    const filteredItems = itemData.filter(item => item !== null);
    setItems(filteredItems);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchItems();
}, []);

const renderItems = () => {
  const itemsPerRow = 3; // 한 행에 출력할 상품 수
  const rows = Math.ceil(itemIds.length / itemsPerRow); // 전체 행 수

  const itemList = [];
  for (let i = 0; i < rows; i++) {
    const startIndex = i * itemsPerRow;
    const endIndex = startIndex + itemsPerRow;
    const rowItems = items.slice(startIndex, endIndex);

    const row = (
      <div key={i} className="row">
        {rowItems.map((item, index) => (
          <CustomProductItem
            key={index}
            name={item?.itemNm}
            price={item?.price}
            itemDetail={item?.itemDetail}
            imageUrl={imageUrls[startIndex + index]}
          />
        ))}
      </div>
    );

    itemList.push(row);
  }

  return itemList;
};

useEffect(() => {
  fetchItems();
}, []);

  const fetchItemsData = async () => {
    try {
      const itemIds = Array.from({ length: 107 }, (_, index) => index.toString());

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

export default Productsmantire;