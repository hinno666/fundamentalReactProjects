import { Categories } from "./components/Categories"
import { MenuList } from "./components/MenuList"
import { menu } from "../../../data";

export const Menu = () => {
    return (
        <article className="menu project">
            <div className="project__name">Menu</div>
            <Categories />
            <MenuList menu={menu} />
        </article>
    )
}
