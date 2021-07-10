import React from "react"

function Header (props) {
    return(
        <header className="header header_position_center" aria-label="логотип">
            <img className="header__logo" src={props.logoPic} alt="логотип" />
            <h2 className="header__title">{props.headerTitle}</h2>
        </header>
    )
}

export default Header