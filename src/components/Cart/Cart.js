import './Cart.css';
import Modal from "../UI/Modal";
import ProductContext from "../../store/product-context";
import { useContext } from "react";

const Cart= (props)=>{

 const productCntxt=useContext(ProductContext);

 const combinedItems = [];
for (const item of productCntxt.cartItems) {
  const existingItem = combinedItems.find((combinedItem) => combinedItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    combinedItems.push({ ...item });
  }
}

let totalAmount = 0;
let totalQuantity = 0;
for (const item of combinedItems) {
  totalAmount += item.price * item.quantity;
  totalQuantity += item.quantity; 
}


 const cartItems =(
  <ul>
    {combinedItems.map((item) => (
      <li key={`${item.id}_${item.name}`}>
        <div>
            <h3>{item.name}</h3> 
        <div>
          <h4>${item.price}</h4>
          </div>
        </div>
        <hr/>
      </li>
    ))}
  </ul>
);

const orderHandler = () => {

    productCntxt.resetCart();
    props.onClose();
  };

  return(
      <Modal onClose={props.onClose}>
      <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (<p>Your cart is empty.</p>) : (cartItems)}
      <span>Total Amount</span>
      <span>{totalAmount.toFixed(2)}</span>
      <p>Total Items: {totalQuantity}</p> 
      </div>
      <button onClick={orderHandler}>Order</button>
      <button onClick={props.onClose}>
        Cancel
      </button>
    </Modal>
  )
};

export default Cart;