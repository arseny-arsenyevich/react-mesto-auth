import React from "react"

function Header (props) {
    return(
        <header className="header header_position_center" aria-label="логотип">
            <img className="header__logo" src={props.logoPic} alt="логотип" />
        </header>
    )
}

export default Header