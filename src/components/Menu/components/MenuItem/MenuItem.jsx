import PropTypes from "prop-types";
import { useToggle } from "../../../../hooks/Toggle";
import './MenuItem.css'

export const MenuItem = ({ img, title, price, desc }) => {
    const [show, toggle] = useToggle(true);
    return (
        <article className='menu__item'>
            <img src={img} alt={title} className='img' />
            <div className='item__info'>
                <header>
                    <h5>{title}</h5>
                    <span className='item__price'>${price}</span>
                </header>
                <p className='item-text'>
                    {show ? `${desc.substring(0, 30)}...` : desc}
                    <button className="btn show-text__btn" onClick={toggle}>{show ? 'read more' : 'less'}</button>
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
