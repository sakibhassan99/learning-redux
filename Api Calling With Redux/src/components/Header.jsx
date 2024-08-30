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

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data));
      })
      .catch((err) => {
        dispatch(fetchProductsError());
      });

    dispatch(fetchCartProducts());
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadCartItems(data));
      })
      .catch((err) => {
        dispatch(fetchCartError());
      });
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  console.log(cartItems);
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
