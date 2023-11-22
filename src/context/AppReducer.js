/*
https://www.freecodecamp.org/news/three-dots-operator-in-javascript/
... used to copy
used to concat arrays or objects

You can use the spread operator to pass these elements into the function call as arguments using the spread operator:


action.payload is the argument passed to the action function 

https://www.youtube.com/watch?v=26ogBZXeBwc
Why return { ...state, }
Because if you don't write ...state, 
if you have multiple states like cart and orders, while updating cart with action, the orders will be nullified
if not provided
so a lot of work if we change one state we still have to give other states, but if we use ...state, we dont have to
it already considers all the other states to be at the position they are in

*/

const func= (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_CART":
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],   //Here item is stored in the form of object with {action.payload ( means item), quantity: quantity}
        };
      }
      
    case "REMOVE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),  //filter gives all the item present in cart as parameter item one by one eg, a=[1,2] a.filter((i)=> i=i*2) a becomes [2,4]
      };
    case "INCREASE_QUANTITY":
      // Increase the quantity of the item in the cart
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      // Decrease the quantity of the item in the cart
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "ADD_ITEM_IN_ORDER":
      return {
          // ...state,
          // orders: state.cart.map(item =>
          //   item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        
        ...state,
        orders: [action.payload, ...state.orders], //to concat cart with the payload i.e the new item passed in argument
      };
    case "REMOVE_ITEM_IN_ORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default func;