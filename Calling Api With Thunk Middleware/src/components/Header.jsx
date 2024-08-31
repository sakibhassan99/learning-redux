import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/slices/productsSlice";
import { getAllCartItemsData } from "../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCartItemsData());
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
