import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header ({ logoPic, headerLink, headerLinkTitle, headerBurger, setLoggedIn, email, loading }) {
    const [burgerState, setBurgerState] = useState(false);

    const handleChangeBurgerState = (e) => {
        e.preventDefault();
        setBurgerState(!burgerState);
    }

    const handleSignOut = () => {
        setLoggedIn && setLoggedIn(false);
        setLoggedIn && localStorage.removeItem('token');
    }

    return(
        <header className='header header_position_center' aria-label='шапка'>
            {headerBurger && <div className={`header__burger 
                header__burger_res_mobile 
                ${burgerState && 'header__burger_opened'}`}
            >
                {headerBurger && <p className='header__email'>{email}</p>}
                <Link 
                    to={headerLink}  
                    className='header__link header__link_theme_dark'
                    onClick={handleSignOut}
                >
                    {headerLinkTitle}
                </Link>
            </div>}
            <div className={`header__loading ${loading && 'header__loading_active'}`} />
            <div className='header__container'>
                <Link 
                    to={`${!loading && '/cards'}`}  
                    className={`header__link ${loading && 'header__link_loading'}`}
                >
                    <img 
                        className={`header__logo ${loading && 'header__logo_loading'}`} 
                        src={logoPic} alt='логотип' 
                    />
                </Link>
                <div className={`header__burger ${headerBurger && 'header__burger_res_desktop'}`}>
                    {headerBurger && <p className='header__email'>{email}</p>}
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