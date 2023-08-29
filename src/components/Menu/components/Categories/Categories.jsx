import PropTypes from "prop-types";
import { useState } from "react";



export const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  return (
    <div className="btn__container">{categories.map((category, index) => {
      return (
        <button className={activeCategory === category ? 'btn__filter active' : 'btn__filter'}
          key={index}
          onClick={() => {
            filterItems(category)
            setActiveCategory(category)
            console.log(activeCategory);
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