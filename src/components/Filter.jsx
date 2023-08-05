import React from "react";

import "./styles/Filter.scss";

const Filter = ({ categories, handleClick }) => {
  const checkCount = (count) => {
    if (count < 9) {
      return `0${count}`;
    }
    return count;
  };

  return (
    <div className="filter">
      {categories &&
        categories.map((category) => (
          <button
            className="filter__btn"
            key={category.id}
            onClick={handleClick}
          >
            {category.title} <span>{checkCount(category.count)}</span>
          </button>
        ))}
    </div>
  );
};

export default Filter;
