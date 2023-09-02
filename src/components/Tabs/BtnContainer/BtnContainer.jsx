import PropTypes from "prop-types";

import './BtnContainer.css'

export const BtnContainer = ({ data, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {data.map((btn, index) => {
        return (
          <button className={`tab__btn ${currentItem === index ? "active" : ""}`} key={btn.id} onClick={() => setCurrentItem(index)}>{btn.company}</button>
        )
      })}
    </div>
  )
}

BtnContainer.propTypes = {
  data: PropTypes.array,
  currentItem: PropTypes.number,
  setCurrentItem: PropTypes.func,
}
