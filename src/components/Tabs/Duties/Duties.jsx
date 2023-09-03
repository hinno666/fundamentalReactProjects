import PropTypes from "prop-types";
import { FaAngleDoubleRight } from 'react-icons/fa';

import './Duties.css'

export const Duties = ({ duties }) => {
  return (
    <div className="duties">
      {duties.map((duty, index) => {
        return (
          <div key={index} className="duty">
            <FaAngleDoubleRight className='duty-icon'></FaAngleDoubleRight>
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
