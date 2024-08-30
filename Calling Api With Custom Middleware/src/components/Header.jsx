import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../store/slices/productsSlice";
import {
  fetchCartError,
  fetchCartProducts,
  loadCartItems,
} from "../store/slices/cartSlice";
import { makeApiCall } from "../middlewares/api";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      makeApiCall({
        url: "products",
        onStart: fetchProducts.type,
        onSuccess: updateAllProducts.type,
        onError: fetchProductsError.type,
      })
    );

    dispatch(
      makeApiCall({
        url: "carts/5",
        onStart: fetchCartProducts.type,
        onSuccess: loadCartItems.type,
        onError: fetchCartError.type,
      })
    );
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{cartCount}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
