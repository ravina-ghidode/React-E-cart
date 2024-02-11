import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data.tsx";
import Product from "./Product.tsx";
import { ToastContainer, toast } from "react-toastify";
const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id: id,
      price: price,
      title: title,
      description: description,
      imgSrc: imgSrc,
    };

    setCart([...cart, obj]);
    console.log("cart ", cart);

    toast.success("Item added on cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  useEffect(() => {
    const filterProduct = items.filter((product: any) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProduct(relatedProducts);
  }, [id, product.category]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container d-flex align-items-center">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button type="button" className="btn btn-primary mx-3">
            {product.price} ₹
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetails;
