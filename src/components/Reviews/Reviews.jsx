import { useState } from "react";
import { reviews } from "../../data";

import './Reviews.css'

const Reviews = () => {
  const [index, setIndex] = useState(0)

  const checkIndex = (index) => {
    if (index > reviews.length - 1) {
      return 0
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  }

  const nextReview = () => {
    setIndex((prev) => {
      const newReviewIndex = prev + 1;
      return checkIndex(newReviewIndex);
    })
  }

  const prevReview = () => {
    setIndex((prev) => {
      const newReviewIndex = prev - 1;
      return checkIndex(newReviewIndex);
    })
  }

  const randomReview = () => {
    setIndex(() => {
      let newReviewIndex = Math.floor(Math.random() * reviews.length)
      if (newReviewIndex === index) {
        newReviewIndex += 1;
      }
      return checkIndex(newReviewIndex);
    })
  }

  const { image, job, name, text } = reviews[index];

  return (
    <article className='review with-spacing' id="Reviews">
      <div className="project__name">Reviews</div>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
      </div>
      <h5 className="author">{name}</h5>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type='button' className="btn prev-btn" onClick={prevReview}>prev</button>
        <button type='button' className="btn next-btn" onClick={nextReview}>next</button>
      </div>
      <button type='button' className="btn" onClick={randomReview}>Surprise Me</button>
    </article>
  );
}

export default Reviews;
