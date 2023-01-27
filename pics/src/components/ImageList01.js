import React from "react";

const ImageList = ({ images }) => {
  return (
    <div>
      <h2>ImageList : {images && images.length}</h2>
    </div>
  );
};

export default ImageList;
