import React from "react";
import "./List.scss";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

//---------------Original---------------
// const List = ({ subCats, maxPrice, sort, catId }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
//       (item) => `&[filters][sub_categories][id][$eq]=${item}`
//     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
//   );

//   return (
//     <div className="list">
//       {loading
//         ? "loading"
//         : data?.map((item) => <Card item={item} key={item.id} />)}
//     </div>
//   );
// };

//----------fake data------------
const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="list">{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
};

export default List;
