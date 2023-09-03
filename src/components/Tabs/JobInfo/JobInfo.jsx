import PropTypes from "prop-types";
import { Duties } from "../Duties/Duties";

import './JobInfo.css'

export const JobInfo = ({ data, currentItem }) => {
  const { company, dates, duties, title } = data[currentItem];

  return (
    <div className="job__info">
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </div>
  )
}

JobInfo.propTypes = {
  data: PropTypes.array.isRequired,
  currentItem: PropTypes.number.isRequired,
}
