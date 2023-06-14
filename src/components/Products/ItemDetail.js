import axios from 'axios';
import { useEffect, useState } from 'react';

function ItemDetail({ itemId }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`/item/${itemId}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.itemName}</h1>
      <img src={item.itemImgDtoList[0].imgUrl} alt={item.itemNm} />
      {/* 나머지 데이터를 필요한 위치에 동적으로 출력 */}
    </div>
  );
}

export default ItemDetail;
