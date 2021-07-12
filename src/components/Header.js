import React, { useState } from "react"
import { Link } from "react-router-dom"

function Header ({ logoPic, headerLink, headerLinkTitle, headerEmail }) {
    const [burgerState, setBurgerState] = useState(false)

    const handleChangeBurgerState = (e) => {
        setBurgerState(!burgerState)
    }

    return(
        <header className="header header_position_center" aria-label="логотип">
            {headerEmail && <div className={`header__burger 
                header__burger_res_mobile 
                ${burgerState && 'header__burger_opened'}`}
            >
                {headerEmail && <p className="header__email">{headerEmail}</p>}
                <Link 
                    to={headerLink}  
                    className="header__link header__link_theme_dark"
                >
                    {headerLinkTitle}
                </Link>
            </div>}
            <div className="header__container">
                <img className="header__logo" src={logoPic} alt="логотип" />
                <div className={`header__burger ${headerEmail && 'header__burger_res_desktop'}`}>
                    {headerEmail && <p className="header__email">{headerEmail}</p>}
                    <Link 
                        to={headerLink} 
                        className={`header__link ${headerEmail && 'header__link_theme_dark'}`}
                    >
                        {headerLinkTitle}
                    </Link>
                </div>
                {headerEmail && <button 
                    onClick={handleChangeBurgerState}
                    type="button" 
                    className={`header__burger-icon ${burgerState && 'header__burger-icon_opened'}`}
                ><span /></button>}
            </div>
        </header>
    )
}

export default Header