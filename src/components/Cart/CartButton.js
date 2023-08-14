import './CartButton.css';
import React, { useContext } from "react";
import ProductContext from "../../store/product-context";


const CartButton = (props) => {
  const productCntxt = useContext(ProductContext);

  let totalQuantity = 0;

  for (const item of productCntxt.cartItems) {
    totalQuantity += item.quantity;
  }

  return (
    <div className='cart'>
      <button onClick={props.onShowCart}>
      Cart ({totalQuantity})
    </button>
    </div>
  );
};

export default CartButton;
