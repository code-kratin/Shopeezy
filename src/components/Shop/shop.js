import Select from 'react-select';
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { Fragment, useState } from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";
import "./shop.css"
const options = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
];

const customStyles = {   //https://react-select.com/styles
    control: (provided) => ({  
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
        marginBottom: "70px",
    }),
    option: (provided, state) => ({   //option styling
        ...provided,    //all the things in provided before + 
        backgroundColor: state.isSelected ? "#0f3460" : "white", //these new provided
        color: state.isSelected ? "white" : "#0f3460",
        // width: "200px",
        "&:hover": {
            backgroundColor: "#0f3460",
            color: "white",
        },
    }),
    singleValue: (provided) => ({   //just the button (without dropdown) style
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(items.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};



const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

const Shop = () => {
  const [filterList, setFilterList] = useState(
    items
  );

  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col sm={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ItemList items={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
