import React from "react";

const MainTile = ({ itemBackgroundColors, itemTexts }) => {
  const gridItems = Array.from({ length: 9 }, (_, index) => (
    <div
      key={index}
      className="grid-item"
      style={{ backgroundColor: itemBackgroundColors[index] }}
    >
      <span>{itemTexts[index]}</span> {/* 텍스트를 배열로 전달받아 표시 */}
    </div>
  ));

  return <div className="grid-container">{gridItems}</div>;
};

export default MainTile;
