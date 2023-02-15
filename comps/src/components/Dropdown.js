import React, { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);
    // What option did the user click on ??
    //console.log(event);
    onChange(option);
  };

  // let content = "Select ...";
  // if (selection) {
  //   content = selection.label;
  // }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}> {value?.label || "Select...."} </div>
      {isOpen && <div>{renderedOptions} </div>}
    </div>
  );
}

export default Dropdown;
