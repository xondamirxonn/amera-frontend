"use client";

import { useSelector } from "react-redux";

const CartPage = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);

  return (
    <div className="pt-[8%]">
      {products.map((item) => (
        <div>
          <img src={item.images[0].image} alt="" />
          <h1>{item.title}</h1>
          <h1>${item.price}</h1>
        </div>
      ))}
    </div>
  )

};

export default CartPage;
