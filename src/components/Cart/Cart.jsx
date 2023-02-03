import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve T-shirt",
      desc: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Sweat pants",
      desc: "Sweat pants",
      isNew: true,
      oldPrice: 17,
      price: 11,
    },
  ];

  return (
    <div className="cart">
      <h1>Poducts in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price"> 1 x ${item.price} </div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">RESET CART</span>
    </div>
  );
}

export default Cart;
