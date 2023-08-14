import React from "react";

const ProductContext=React.createContext({
    products: [],
    cartItems: [],
    addProduct: (item) =>{},
    addSmallToCart: (item) =>{},
    addMediumToCart:(item)=>{},
    addLargeToCart:(item)=>{},
    resetCart:()=>{},
});

export default ProductContext;