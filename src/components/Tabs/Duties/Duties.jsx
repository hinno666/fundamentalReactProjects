import PropTypes from "prop-types";

import './Duties.css'

export const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job__desc">
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}

Duties.propTypes = {
  duties: PropTypes.array.isRequired,
}
