import PropTypes from "prop-types";
import { useState } from "react";

export const MenuItem = ({ img, title, price, desc }) => {


    const [showText, setShowText] = useState(true);

    return (
        <article className='menu__item'>
            <img src={img} alt={title} className='img' />
            <div className='item__info'>
                <header>
                    <h5>{title}</h5>
                    <span className='item__price'>${price}</span>
                </header>
                <p className='item-text'>
                    {showText ? `${desc.substring(0, 30)}...` : desc}
                    <button onClick={() => setShowText(!showText)}>show</button>
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
