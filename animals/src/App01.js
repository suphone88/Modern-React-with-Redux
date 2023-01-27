import React, { useState } from "react";

function App() {
  function makeArray() {
    return [1, 10, 32, 40];
  }

  const [firstElement, secondElement] = makeArray();
  console.log(firstElement, secondElement);
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={handleClick}> Add Animal </button>
  //     <h2>Number of animals : {count} </h2>
  //   </div>
  // );
}

export default App;
