import React, { useEffect,useState} from 'react';
import { getItems, getItemsImage } from './ItemAPI';

const ProductDetail = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetchItemData();
  }, [itemId]);

  const fetchItemData = async () => {
    try {
      const itemData = await getItems(itemId);
      const itemImageUrl = await getItemsImage(itemId);
      setItem(itemData);
      setImageUrl(itemImageUrl);
    } catch (error) {
      console.error('아이템 데이터를 가져오는 중 에러 발생:', error);
    }
  };

  const order = () => {
    // 주문하기 함수의 구현
  };

  const addCart = () => {
    // 장바구니 담기 함수의 구현
  };

  if (!item) {
    return null; // 아이템 데이터가 없을 경우 아무 것도 렌더링하지 않음
  }

  return (
    <div className="d-flex">
      <div className="repImgDiv">
        <img src={imageUrl} className="rounded repImg" alt={item.itemNm} />
      </div>
      <div className="wd50">
        <div className="h4">{item.itemNm}</div>
        <hr className="my-4" />

        <div className="text-right">
          <div className="h4 text-danger text-left">
            <input type="hidden" value={item.price} id="price" name="price" />
            {item.price}원
          </div>
          <div className="input-group w-50">
            <div className="input-group-prepend">
              <span className="input-group-text">수량</span>
            </div>
            <input type="number" name="count" id="count" className="form-control" value="1" min="1" />
          </div>
        </div>
        <hr className="my-4" />

        <div className="text-right mgt-50">
          <h5>결제 금액</h5>
          <h3 name="totalPrice" id="totalPrice" className="font-weight-bold"></h3>
        </div>

          <div className="text-right">
            <button type="button" className="btn btn-light border border-primary btn-lg" onClick={addCart}>
              장바구니 담기
            </button>
            <button type="button" className="btn btn-primary btn-lg" onClick={order}>
              주문하기
            </button>
          </div>
        ) : (
          <div className="text-right">
            <button type="button" className="btn btn-danger btn-lg">품절</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
