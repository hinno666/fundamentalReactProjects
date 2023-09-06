import PropTypes from "prop-types";
import { Duties } from "../Duties/Duties";

import './JobInfo.css'

export const JobInfo = ({ data, currentItem }) => {
  const { company, dates, duties, title } = data?.[currentItem] ?? {};

  if (!data?.[currentItem]) {
    return null
  }

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
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  currentItem: PropTypes.number.isRequired,
}
