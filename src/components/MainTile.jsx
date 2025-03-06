const MainTile = ({ itemBackgroundColors, itemTexts, onItemClick }) => {
  const gridItems = Array.from({ length: 9 }, (_, index) => {
    const handleClick = () => {
      if (index === 4) {
        // 5번째 아이템 (index는 0부터 시작)
        onItemClick(index);
      }
    };

    return (
      <div
        key={index}
        className="grid-item"
        style={{ backgroundColor: itemBackgroundColors[index] }}
        onClick={handleClick} // 클릭 이벤트 추가
      >
        <span>{itemTexts[index]}</span>
      </div>
    );
  });

  return <div className="grid-container">{gridItems}</div>;
};

export default MainTile;
