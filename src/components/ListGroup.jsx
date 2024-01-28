import { useState } from "react";
import React from "react";

function ListGroup() {
  const heading = "List Item";
  let cities = ["sanandreas", "banepa", "dhulikhel", "kathmandu", "New York"];
  let [selectedItem, setSelectedItem] = useState(-1);
  const onHandleClick = (city, index) => {
    setSelectedItem(index);

  };


  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              onHandleClick(city, index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;


