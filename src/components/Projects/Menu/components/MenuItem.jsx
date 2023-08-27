
export const MenuItem = ({ img, title, price, desc }) => {
    return (
        <article className='menu__item'>
        <img src={img} alt={title} className='img' />
        <div className='item__info'>
            <header>
                <h5>{title}</h5>
                <span className='item__price'>${price}</span>
            </header>
            <p className='item-text'>
                {desc}
            </p>
        </div>
    </article>
    )
}
