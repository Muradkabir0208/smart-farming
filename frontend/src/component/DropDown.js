import React, { useState } from "react";
import states from "../dropDownData";

const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (event) => {
    const value = event.target.value;
    props.onClick(value);
  };

  return (
    <select onChange={handleSelect}>
      {states.map((state) => (
        <option key={state.id} value={JSON.stringify(state)}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
