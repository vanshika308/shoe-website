import './ProductList.css';
import React, { useContext } from 'react';
import ProductContext from '../../store/product-context';

const ProductList = () => {
  const productCntxt = useContext(ProductContext);

  const addSmallToCartHandler = (product) => {
    if (product.small_quantity > 0) {
      productCntxt.addSmallToCart(product);
    }
  };

  const addMediumToCartHandler = (product) => {
    if (product.medium_quantity > 0) {
      productCntxt.addMediumToCart(product);
    }
  };

  const addLargeToCartHandler = (product) => {
    if (product.large_quantity > 0) {
      productCntxt.addLargeToCart(product);
    }
  };

  return (
    <div className='products'>
      <h2>Product List</h2>
      <ul>
        {productCntxt.products.map((product) => (
          <li key={product.id}>
            Name: {product.name} - Price: {product.price}
            <button onClick={() => addSmallToCartHandler(product)} disabled={product.small_quantity === 0}>
              Buy Small ({product.small_quantity})
            </button>
            <button onClick={() => addMediumToCartHandler(product)} disabled={product.medium_quantity === 0}>
              Buy Medium ({product.medium_quantity})
            </button>
            <button onClick={() => addLargeToCartHandler(product)} disabled={product.large_quantity === 0}>
              Buy Large ({product.large_quantity})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
