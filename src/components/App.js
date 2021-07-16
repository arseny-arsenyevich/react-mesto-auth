import React, { useCallback, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import logo from '../images/logo.svg';
import success from '../images/auth-success.svg';
import fail from '../images/auth-fail.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoToolTip from './InfoTooltip';
import apiAuth from '../utils/apiAuth';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [selectedCardName, setSelectedCardName] = useState(null)
    const [isAuthStatusPopupOpen, setIsAuthStatusPopupOpen] = useState(false)
    const [authStatusPic, setAuthStatusPic] = useState('')
    const [authStatusText, setAuthStatusText] = useState('')

    const [cards, setCards] = useState([])
    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: ''
    })
    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()
    
    const handleEscClose = useCallback((evt) => {
        if (evt.key === 'Escape') {
            closeAllPopups()
        }
    }, [])
        
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlaceOpen(false)
        setSelectedCard(null)
        setIsAuthStatusPopupOpen(false)
        document.removeEventListener('keydown', handleEscClose)
    }
    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
        document.addEventListener('keydown', handleEscClose)
    }


    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
        document.addEventListener('keydown', handleEscClose)
    }


    const handleAddPlaceClick = () => {
        setIsAddPlaceOpen(true)
        document.addEventListener('keydown', handleEscClose)
    }

    const handleCardClick = (src) => {
        setSelectedCard(src[0])
        setSelectedCardName(src[1])
        document.addEventListener('keydown', handleEscClose)
    }

    const handleUpdateUser = (data) => {
        api.redactProfile(data)
            .then((res) => {
                setCurrentUser({...currentUser, ...res})
                closeAllPopups()
            }).catch((e) => {console.log(e)})
    }

    const handleUpdateAvatar = (data) => {
        api.redactAvatar(data)
        .then((res) => {
            setCurrentUser({...currentUser, ...res})
            closeAllPopups()
        }).catch((e) => {console.log(e)})
    }    

    const handleAddPlaceSubmit = (data) => {
        api.addCard(data)
        .then((res) => {
            setCards([res, ...cards])
            closeAllPopups()
        }).catch((e) => {console.log(e)})
    }

    const handleAuthStatusPopup = ( {result, text} ) => {
        setIsAuthStatusPopupOpen(true)
        result ? setAuthStatusPic(success) : setAuthStatusPic(fail)
        setAuthStatusText(text)
        document.addEventListener('keydown', handleEscClose)
    }

    
    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id)
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((e) => {console.log(e)})
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            }).catch((e) => {console.log(e)})
    } 

    useEffect(() => {
        api.getCards().then((res) => {
            setCards(res)
        }).catch((e) => {console.log(e)})
    }, [])

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((e) => {console.log(e)})
    }, [])

    useEffect(() => {
        apiAuth.checkToken()
            .then((res) => {
                setLoggedIn(true)
                setEmail(res.data.email)
                history.push('/cards')
            })
            .catch((e) => {console.log(e)})
    }, [])

    return (
    <div className='App'>
    <div className='page'>
    <CurrentUserContext.Provider value={currentUser}>

    <Switch>
    <Route exact path='/react-mesto-auth'><Redirect to='/cards' /></Route>
    <Route exact path='/'><Redirect to='/cards' /></Route>

    {/* Регистрация */}
    <Route path='/sign-up'>
        <Header logoPic={logo} headerLinkTitle='Войти' headerLink='/sign-in'/>
        <Register setLoggedIn={setLoggedIn} handleStatusPopup={handleAuthStatusPopup} setEmail={setEmail} />
    </Route>
        
    {/* Вход */}
    <Route  path='/sign-in'>
        <Header logoPic={logo} headerLinkTitle='Регистрация' headerLink='/sign-up'/>
        <Login setLoggedIn={setLoggedIn} handleStatusPopup={handleAuthStatusPopup} setEmail={setEmail} />
    </Route>

    <ProtectedRoute path='/cards' loggedIn={loggedIn}>
        <Header  
            setLoggedIn={setLoggedIn}
            logoPic={logo}
            headerLinkTitle='Выйти' 
            headerLink='/sign-in' 
            email={email}
            headerBurger
        />
        <Main 
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onEditProfile={handleEditProfileClick} 
            onEditAvatar={handleEditAvatarClick} 
            onAddPlace={handleAddPlaceClick} 
            onCardClick={handleCardClick}
        />
        <Footer />
    </ProtectedRoute>

    <Route path='*'>
        <Header logoPic={logo} headerLinkTitle='Войти' headerLink='/sign-in'/>
        <h1 className="not-found">404:(</h1>
    </Route>
    </Switch>

    <section className='popups' aria-label='всплывающие окна'>
        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup 
            isOpen={isAddPlaceOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup 
            card={selectedCard}
            cardName={selectedCardName}
            onClose={closeAllPopups}
        />
        {/* <PopupWithForm 
            name='card'
            onClose={closeAllPopups}
            isOpen={isEditAvatarPopupOpen}
            isOpen={false}
            title='Вы уверены?'
            buttonTxt='Да'
        /> */}
        <InfoToolTip
            isOpen={isAuthStatusPopupOpen}
            onClose={closeAllPopups}
            onAuthStatus={handleAuthStatusPopup}
            statusPic={authStatusPic}
            statusText={authStatusText}
        />
    </section>

    </CurrentUserContext.Provider>
    </div>
    </div>
    );
}

export default App;
