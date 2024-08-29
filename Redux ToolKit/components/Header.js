import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "../react-redux.js";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
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
