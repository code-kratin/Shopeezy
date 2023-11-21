import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

// function Cart() {
//   const { cart, addItemToCartList, removeItemFromCartList} = useContext(GlobalContext);
//   return (
//     <div classNameName="cart-container">
//       <h1>Cart</h1>
//       {!cart.length ? (
//         <p>No Item Added! Please add something to your cart</p>
//       ) : (
//         <>
//           <div classNameName="cart-list">
//             {cart.map((item) => (
//               <div classNameName="cart-item" key={item.id}>
//                 <div classNameName="item-price">${item.price}</div>
//                 <div classNameName="item-name">{item.name}</div>
//                 <div classNameName="item-expectedDelivery">
//                   (Expected Delivery 3 - 6 days)
//                 </div>
//                 <button classNameName="item-btn" onClick={()=>{removeItemFromCartList(item)}}>Remove Item</button>
//                 <button classNameName="item-btn" onClick={()=>{addItemToCartList(item)}}>Add Item</button>
//               </div>
//             ))}
//           </div>
//           <Link to="/checkout">
//             <button classNameName="item-btn">Next</button>
//           </Link>
          
//         </>
//       )}
//     </div>
 
//   );
// }

function Cart() {
  const { cart, removeItemFromCartList, increaseQuantity, decreaseQuantity } = useContext(GlobalContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Calculate the total cost whenever the cart changes
    var total=0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [cart]);  //dependency array 
  //Whenever any of the dependencies specified in the array change, the function is re-executed.
  return (
    <div className="shopping-cart">
      <h1>Cart</h1>
       {!cart.length ? (
         <p>No Item Added! Please add something to your cart</p>
       ) : (
      <>
      <div className="title">
        Shopping Bag
      </div>
        
        {cart.map((item) => (
        <div className="item" key={item.id}>
          <div className="buttons">
              <ion-icon onClick={()=>{removeItemFromCartList(item)}} name="close-circle-outline"></ion-icon>

          </div>
      
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          
          <div className="description">
            <span>{item.name}</span>
            <span className="brand">{item.brand} </span>
            <span>White</span>
          </div>
      
          <div className="quantity">
            <button className="plus-btn btn" type="button" name="button" onClick={()=>{decreaseQuantity(item)}}>
            <ion-icon name="remove"></ion-icon>
            </button>
            <span>{item.quantity}</span>
            <button className="minus-btn btn" type="button" name="button" onClick={()=>{increaseQuantity(item)}}>
            <ion-icon name="add"></ion-icon>
            </button>
          </div>
      
          <div className="total-price">${String(item.price* item.quantity)}</div>
        </div>
        ))}
        <div className="total-price">Total Cost: ${totalCost}</div>
      <Link to="/checkout">
             <button className="item-btn">Checkout</button>
        </Link>
      </>
      )}
  </div>
 
  );
}

export default Cart;
