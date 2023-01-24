import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8800/products");
      setProducts(response.data);
      console.log(response.data)
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.ProductName}</h2>
          <p>{product.Description}</p>
          <p>{product.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;