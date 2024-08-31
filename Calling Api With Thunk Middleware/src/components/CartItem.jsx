import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../store/slices/cartSlice.js";
import { useDispatch } from "react-redux";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(decreaseCartItemQuantity({ productId }));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseCartItemQuantity({ productId }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(removeCartItem({ productId }));
          }}
        >
          Remove Item
        </button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  );
}
