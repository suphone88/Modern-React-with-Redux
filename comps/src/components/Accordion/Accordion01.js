import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    // if (index === expandedIndex) {
    //   console.log("expanded");
    // } else {
    //   console.log("collapsed");
    // }

    const isExpanded = index === expandedIndex;

    const content = isExpanded && <div> {item.content} </div>;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {content}
        {/* <div> {item.content} </div> */}
      </div>
    );
  });
  return <div> {renderedItems} </div>;
}

export default Accordion;
