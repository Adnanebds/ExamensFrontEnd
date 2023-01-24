import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
const fetchProducts = async () => {
const token = localStorage.getItem("user");
const config = {
headers: {
"Content-type": "application/json",
//"Authorization": Bearer, ${token},
},
};
try {
const response = await axios.get("http://localhost:8800/products", config);
setProducts(response.data.Products);
console.log(response.data.Products);
} catch (error) {
console.log(error);
}
};
fetchProducts();
}, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.ProductName}</h2>
          <br></br>
          <p>{product.Desscription}</p>
          <br></br>
          <p>{product.Category}</p>
          <br></br>
          <p>{product.EAN}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;