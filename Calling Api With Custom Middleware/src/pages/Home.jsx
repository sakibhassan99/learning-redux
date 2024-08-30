import Product from "../components/Product";
import { useSelector } from "react-redux";
import {
  getAllProductsData,
  getProductsError,
  getProductsLoadingState,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProductsData);
  const isLoading = useSelector(getProductsLoadingState);
  const error = useSelector(getProductsError);

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
