import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Orders() {
  const { orders } = useContext(GlobalContext);
  return (
    <>
    {!orders.length ? (
      <p>No Orders to display! Continue Shopping</p>
    ) : (
    <div className="cart-list">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div className="checkout-container" key={order.orderId}>
          <h3>#ID-62Z-{order.orderId}</h3>
          {order.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-price">Item price: ${item.price}</div>
              <div className="item-name">{item.name}</div>
              <div className="item-expectedDelivery"> Quantity: {item.quantity}</div>
              <div className="item-expectedDelivery"> Total Price: ${order.price}</div>  
              {/* total price (order.price property declared in checkout.js) */}
              <br/>
              <div className="item-expectedDelivery">
                (Expected cash on delivery 3 - 6 days)
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    )}
    </>
  );
}

export default Orders;
