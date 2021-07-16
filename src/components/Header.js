import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Header ({ logoPic, headerLink, headerLinkTitle, headerBurger, setLoggedIn }) {
    const currentUser = useContext(CurrentUserContext)
    
    const [burgerState, setBurgerState] = useState(false)

    const handleChangeBurgerState = (e) => {
        setBurgerState(!burgerState)
    }

    const handleSignOut = () => {
        setLoggedIn && setLoggedIn(false)
        setLoggedIn && localStorage.removeItem('token')
    }

    return(
        <header className='header header_position_center' aria-label='логотип'>
            {headerBurger && <div className={`header__burger 
                header__burger_res_mobile 
                ${burgerState && 'header__burger_opened'}`}
            >
                {headerBurger && <p className='header__email'>{currentUser.email}</p>}
                <Link 
                    to={headerLink}  
                    className='header__link header__link_theme_dark'
                    onClick={handleSignOut}
                >
                    {headerLinkTitle}
                </Link>
            </div>}
            <div className='header__container'>
                <Link 
                    to="/cards"  
                    className='header__link'
                >
                    <img className='header__logo' src={logoPic} alt='логотип' />
                </Link>
                <div className={`header__burger ${headerBurger && 'header__burger_res_desktop'}`}>
                    {headerBurger && <p className='header__email'>{currentUser.email}</p>}
                    <Link 
                        to={headerLink} 
                        className={`header__link ${headerBurger && 'header__link_theme_dark'}`}
                        onClick={handleSignOut}
                    >
                        {headerLinkTitle}
                    </Link>
                </div>
                {headerBurger && <button 
                    onClick={handleChangeBurgerState}
                    type='button' 
                    className={`header__burger-icon ${burgerState && 'header__burger-icon_opened'}`}
                ><span /></button>}
            </div>
        </header>
    )
}

export default Header