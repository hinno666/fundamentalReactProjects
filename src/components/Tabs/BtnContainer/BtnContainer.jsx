import PropTypes from "prop-types";

import './BtnContainer.css'

export const BtnContainer = ({ data, currentItem, setCurrentItem }) => {

  return (
    <div className='btn__container'>
      {Array.isArray(data) && data.map((btn, index) => {
        return (
          <button className={`tab__btn ${currentItem === index ? "active" : ""}`} key={btn.id} onClick={() => setCurrentItem(index)}>{btn.company}</button>
        )
      })}
    </div>
  )
}

BtnContainer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  currentItem: PropTypes.number,
  setCurrentItem: PropTypes.func,
}
