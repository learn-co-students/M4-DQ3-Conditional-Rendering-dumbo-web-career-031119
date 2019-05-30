import React from 'react'

const MenuBar = ({setPageToDisplay, pageToDisplay}) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const isActive = (page) => {
    return page === pageToDisplay ? "item active" : "item"
  }

  return (
    <div className="ui four item menu" >
      <a className={isActive("profile")} id="profile" onClick={() => setPageToDisplay("profile")}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={isActive("photo")} id="photo" onClick={() => setPageToDisplay("photo")}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={isActive("cocktail")} id="cocktail" onClick={() => setPageToDisplay("cocktail")}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={isActive("pokemon")} id="pokemon" onClick={() => setPageToDisplay("pokemon")}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )

}

export default MenuBar
