import { Categories } from "./components/Categories/Categories"
import { MenuList } from "./components/MenuList/MenuList"
import { menu } from "../../data";
import { useState } from "react";
import './Menu.css'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

export const Menu = () => {
    const [menuItems, setMenuItems] = useState(menu)
    const [categories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            return setMenuItems(menu);
        }
        
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems)
    }

    return (
        <article className="menu withSpacing" id="Menu">
            <div className="project__name">Menu</div>
            <Categories categories={categories} filterItems={filterItems} />
            <MenuList menuItems={menuItems} />
        </article>
    )
}
