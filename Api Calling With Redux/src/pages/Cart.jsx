import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const isLoading = useSelector((state) => state.cartItems.isLoading);
  const error = useSelector((state) => state.cartItems.error);

  const cartItems = useSelector(({ cartItems, products }) => {
    return cartItems.list
      .map(({ productId, quantity }) => {
        const cartItem = products.list.find(
          (product) => product.id === productId
        );
        return { ...cartItem, quantity };
      })
      .filter(({ title }) => title);
  });
  const totalAmount = cartItems
    .reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    .toFixed(2);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : error ? (
          <h2 style={{ textAlign: "center" }}>{error}</h2>
        ) : (
          cartItems.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          ))
        )}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalAmount}</div>
        </div>
      </div>
    </div>
  );
}
