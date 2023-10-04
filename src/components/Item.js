import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const toggleCart = () => {
    setIsInCart(!isInCart);
  }

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  const liClassName = isInCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
