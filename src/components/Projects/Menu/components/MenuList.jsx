import PropTypes from "prop-types";

import { MenuItem } from "./MenuItem";


export const MenuList = ({ menu }) => {
  return (
    <div className="menu__items">
      {menu.map((menuItem) => {
        return (
          <MenuItem key={menuItem.id} {...menuItem} />
        )
      })}
    </div>
  )
}

MenuList.propTypes = {
  menu: PropTypes.array,
}