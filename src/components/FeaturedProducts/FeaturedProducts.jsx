import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ types }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1034675/pexels-photo-1034675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/8310755/pexels-photo-8310755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/9214286/pexels-photo-9214286.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleve Graphic T-shirt",
      isNew: true,
      oldPrice: 22,
      price: 11,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8310755/pexels-photo-8310755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleve Graphic T-shirt",
      isNew: true,
      oldPrice: 20,
      price: 10,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{types} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, velit
          rem, sint corporis officia eum autem repellendus quo fuga voluptate
          itaque. Voluptatem cumque quibusdam rerum sed magnam aspernatur ipsum
          aut!
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
