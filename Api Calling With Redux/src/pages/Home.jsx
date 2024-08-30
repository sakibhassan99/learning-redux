import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

export default function Home() {
  const productsList = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <div className="products-container">
      {productsList.list.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
