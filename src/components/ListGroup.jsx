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
      <h1 className="mx-5 mt-5">{heading}</h1>
      <ul className="list-group mx-5 mb-5">
        {cities.map((city, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active px-3"
                : "list-group-item px-3"
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


