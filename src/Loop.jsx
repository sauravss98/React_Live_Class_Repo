import React from "react";
import ProductItem from "./ProductItem";

const Loop = () => {
  const shoes = [
    {
      id: 1,
      name: "Seltos",
      brand: "Kia",
      price: "300044",
    },
    { id: 2, name: "Creta", brand: "Hyundai", price: "432423" },
    { id: 3, name: "C5", brand: "Citreon", price: "423423" },
  ];

  const getProducts = () =>
    shoes.map((value) => <ProductItem item={value} key={value.id} />);
  return (
    <div>
      Loop
      {getProducts()}
    </div>
  );
};

export default Loop;
