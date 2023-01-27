import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("cars");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //console.log("I need to tell the parent about some data!!");
    onSubmit("cars");
  };

  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value.replace(/[a-z]/, ""));
  };

  return (
    <div>
      <form onClick={handleFormSubmit}>
        confirm your serach : {term}
        <input value={term} onChange={handleChange} />
        {term.length < 5 && "term must be no longer"}
      </form>
    </div>
  );
};

export default SearchBar;
