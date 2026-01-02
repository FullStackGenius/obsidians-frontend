import React from 'react'

const Header = () => {
  return (
   <header id="myheader" className="header_main">
      <div className="container">
        <div className="header_row">
          <div className="logo_col">
            <a href="/"><img src="./images/logo-white.svg" /></a>
          </div>

          <div className="header_navmenu_col">
            <ul className="nav_menu_listing">
              <li className="nav_menu_item">
                <a className="nav_link" href="/">Home</a>
              </li>
              <li className="nav_menu_item">
                <a className="nav_link sub_menu" href="/">What We Do</a>
              </li>
              <li className="nav_menu_item">
                <a className="nav_link sub_menu" href="/">Our Approach</a>
              </li>
              <li className="nav_menu_item">
                <a className="nav_link" href="/">About</a>
              </li>
              <li className="nav_menu_item">
                <a className="nav_link" href="/">Insights</a>
              </li>
              <li className="nav_menu_item">
                <a className="nav_link" href="/">Success Stories</a>
              </li>
            </ul>
          </div>

          <div className="header_btn_col">
            <a className="primary_btn" href="/">Get A Quote</a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header