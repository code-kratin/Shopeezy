import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";
import SliderHome from "../slider/slider";

import "./HomePage.css";

function HomePage() {
  return (
    <section>
      <SliderHome />
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;
