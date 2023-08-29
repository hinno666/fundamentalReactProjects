import PropTypes from "prop-types";

import { MenuItem } from "./MenuItem";




export const MenuList = ({ menuItems }) => {
  return (
    <div className="menu__items">
      {menuItems.map((menuItem) => {
        return (
          <MenuItem key={menuItem.id} {...menuItem} />
        )
      })}
    </div>
  )
}

MenuList.propTypes = {
  menuItems: PropTypes.array,
}