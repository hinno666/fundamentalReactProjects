import PropTypes from "prop-types";
import { useState } from "react";

import "./Categories.css"


export const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="btn__container">{categories.map((category, index) => {
      return (
        <button className={`btn__filter${activeCategory === category ? " active" : ""}`}
          key={index}
          onClick={() => {
            filterItems(category)
            setActiveCategory(category)
          }}
        >
          {category}
        </button>
      )
    })}</div>

  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
}
