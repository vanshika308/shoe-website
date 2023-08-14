import './InputForm.css';
import React, { useState,useContext } from 'react';
import ProductContext from '../../store/product-context';


const InputForm=(props)=>{

   const productcntxt= useContext(ProductContext);

    const[enteredProductName,setEnteredProductName]=useState('');
    const[enteredPrice,setEnteredPrice]=useState('');
    const[enteredProductDescription,setEnteredProductDescription]=useState('');
    const[enteredsmallQuantity,setEnteredsmallQuantity]=useState('');
    const[enteredmediumQuantity,setEnteredmediumQuantity]=useState('');
    const[enteredlargeQuantity,setEnteredlargeQuantity]=useState('');

    const nameChangeHandler=(event)=>{
     setEnteredProductName(event.target.value);
    }
    const descriptionChangeHandler=(event)=>{
     setEnteredProductDescription(event.target.value);
     }
     const priceChangeHandler=(event)=>{
         setEnteredPrice(event.target.value);
     }
     const smallquantityChangeHandler=(event)=>{
         setEnteredsmallQuantity(event.target.value);
     }
     const mediumquantityChangeHandler=(event)=>{
        setEnteredmediumQuantity(event.target.value);
    }
    const largequantityChangeHandler=(event)=>{
        setEnteredlargeQuantity(event.target.value);
    }
     const addProductHandler=(event)=>{
        event.preventDefault();
        const product={
            id: 'quantity_'+enteredProductName,
           name: enteredProductName,
           description: enteredProductDescription ,
           price  : parseFloat(enteredPrice),
           small_quantity: parseInt(enteredsmallQuantity),
           medium_quantity: parseInt(enteredmediumQuantity),
           large_quantity: parseInt(enteredlargeQuantity)
        }
        console.log('Submitted Product:', product);
        productcntxt.addProduct(product);
 
        setEnteredProductName('');
        setEnteredProductDescription('');
        setEnteredPrice('');
        setEnteredsmallQuantity('');
        setEnteredmediumQuantity('');
        setEnteredlargeQuantity('');
     }

    return <form >
    <div className='entry'>
    <label>Shoe Name:</label>
    <input
       type='text' 
       id='name'
       onChange={nameChangeHandler}
       value={enteredProductName}></input><br/>
    </div>
    <div className='entry'>
    <label>Description:</label>
    <input 
       type='text'
       id='description'
       onChange={descriptionChangeHandler}
       value={enteredProductDescription}></input><br/>
    </div>
    <div className='entry'>
    <label>Price:</label>
    <input 
       type='number' 
       id='price'
       onChange={priceChangeHandler}
       value={enteredPrice}></input><br/>
    </div>
    <div className='quantity'>
       <label>Quantity available:</label><br/>
       <div className='entry'>
       <label>Large:</label>
       <input 
       type='number' 
       id='large_quantity'
       onChange={smallquantityChangeHandler}
       value={enteredsmallQuantity}></input><br/>
       </div>
       <div className='entry'>
       <label>Medium:</label>
        <input 
       type='number' 
       id='medium_quantity'
       onChange={mediumquantityChangeHandler}
       value={enteredmediumQuantity}></input><br/> 
       </div>
       <div className='entry'>
       <label>Small:</label>
       <input 
       type='number' 
       id='small_quantity'
       onChange={largequantityChangeHandler}
       value={enteredlargeQuantity}></input>
       </div>
    </div>
       <button onClick={addProductHandler} className='btn'>Add product</button>
  </form>
}

export default InputForm;