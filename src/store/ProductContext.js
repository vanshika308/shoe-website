import React, { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [products, updateProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  const addProductHandler = (product) => {
    updateProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateQuantitiesAndCart = (product, sizeProp) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id && p[sizeProp] > 0) {
        return {
          ...p,
          [sizeProp]: p[sizeProp] - 1,
        };
      }
      return p;
    });

    updateProducts(updatedProducts);

    const existingCartItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      updateCartItems(updatedCartItems);
    } else {
      updateCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const addSmallToCartHandler = (product) => {
    updateQuantitiesAndCart(product, "small_quantity");
  };

  const addMediumToCartHandler = (product) => {
    updateQuantitiesAndCart(product, "medium_quantity");
  };

  const addLargeToCartHandler = (product) => {
    updateQuantitiesAndCart(product, "large_quantity");
  };

  const resetCartHandler = () => {
    updateCartItems([]);
  };
  
  const productContext = {
    products: products,
    cartItems: cartItems,
    addProduct: addProductHandler,
    addSmallToCart: addSmallToCartHandler,
    addMediumToCart: addMediumToCartHandler,
    addLargeToCart: addLargeToCartHandler,
    resetCart: resetCartHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
