import PropTypes from "prop-types";


export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn__container">{categories.map((category, index) => {
      return (
        <button className="btn__filter" key={index} onClick={() => filterItems(category)}>{category}</button>
      )
    })}</div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
}