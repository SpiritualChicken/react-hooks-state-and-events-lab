import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectCategory, setSelectCategory] = useState("All")

  const handleCategoryChange = (event) => {
    setSelectCategory(event.target.value);
  };

  const filtereditems = selectCategory === "All" ? items : items.filter(item => item.category === selectCategory);



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtereditems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
