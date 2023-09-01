import { useToggle } from "../../../../hooks/Toggle";
import PropTypes from "prop-types";

import './MenuItem.css'

export const MenuItem = ({ img, title, price, desc }) => {

  const [show, toggleShow] = useToggle(true);

  const formatDescription = (show, desc) => show ? `${desc.substring(0, 30)}...` : desc;

  return (
    <article className='menu__item'>
      <img src={img} alt={title} className='img' />
      <div className='item__info'>
        <header>
          <h5>{title}</h5>
          <span className='item__price'>${price}</span>
        </header>
        <p className='item-text'>
          {formatDescription(show, desc)}
          <button className="btn show-text__btn" onClick={toggleShow}>{show ? 'read more' : 'less'}</button>
        </p>
      </div>
    </article>
  )
}

MenuItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
}
