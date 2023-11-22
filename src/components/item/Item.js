import React, {useContext} from "react";
// import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import "./Item.css";


// function Item({ name, rating, price, saleDiscount, image, brand }) {



// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../app/features/cart/cartSlice";

const Rating = ({ rating }) => {
  var h = [];
  for (var i = 0; i < rating; i++) {
    h.push(<span className="fa fa-star checked" key={i}></span>);
  }
  return <span>{h}</span>;
};

const Item = ({ item, itemid, name, rating, price, saleDiscount, image, brand }) => {

  const { addItemToCartList } = useContext(GlobalContext);

  // const dispatch = useDispatch();
  // const router = useNavigate();
  // const handelClick = () => {
  //   router(`/shop/${productItem.id}`);
  // };
  // const handelAdd = (productItem) => {
  //   dispatch(addToCart({ product: productItem, num: 1 }));
  //   toast.success("Product has been added to cart!");
  // };
  return (
    // <Link to={`/item/${itemid}`} key={itemid}>
    <div className="item-card">
      
      <div className="img-container">
      <div className="product-like">
          <ion-icon name="heart-outline"></ion-icon>
      </div> 
      {saleDiscount ? (
        <span className="discount">{saleDiscount}% Off</span>
      ) : null}
        <img src={image} alt={"Product item"} width="100%" />
      </div>
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-rating"><span>Rating: {rating} </span> <Rating rating={rating}></Rating></div>
      <div className="item-info">
        <div className="item-price">${price}</div>
        <div className="price">
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => addItemToCartList(item)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
      </div>
    </div>
    </div>
    // </Link>
  );
};

export default Item;