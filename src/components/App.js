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
import PopupWithDelete from './PopupWithDelete';
import InfoToolTip from './InfoTooltip';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import { loginService } from './LoginService';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardName, setSelectedCardName] = useState(null);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [cardToBeDeleted, setCardToBeDeleted] = useState(null);
    const [isAuthStatusPopupOpen, setIsAuthStatusPopupOpen] = useState(false);
    const [authStatusPic, setAuthStatusPic] = useState('');
    const [authStatusText, setAuthStatusText] = useState('');

    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: ''
    });
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    
    const handleEscClose = useCallback((e) => {
        if (e.key === 'Escape') closeAllPopups();
    }, [])
        
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlaceOpen(false);
        setIsImagePopupOpen(false);
        setIsDeletePopupOpen(false);
        setIsAuthStatusPopupOpen(false);

        document.removeEventListener('keydown', handleEscClose);
    }
    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleAddPlaceClick = () => {
        setIsAddPlaceOpen(true);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleCardClick = ([link, description]) => {
        setIsImagePopupOpen(true);
        setSelectedCard(link);
        setSelectedCardName(description);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleDeletePopupOpen = (card) => {
        setIsDeletePopupOpen(true);
        setCardToBeDeleted(card);
    } 

    const handleAuthStatusPopup = ({ result, text }) => {
        setIsAuthStatusPopupOpen(true);
        result ? setAuthStatusPic(success) : setAuthStatusPic(fail);
        setAuthStatusText(text);
        
        document.addEventListener('keydown', handleEscClose);
    }
    
    const handleUpdateUser = (data, setButtonState) => {
        setButtonState(true)

        api.redactProfile(data)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }

    const handleUpdateAvatar = (data, setButtonState) => {
        setButtonState(true)

        api.redactAvatar(data)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }    

    const handleAddPlaceSubmit = (data, setButtonState) => {
        setButtonState(true)

        return api.addCard(data)
        .then(res => {
            setCards([res, ...cards]);
            closeAllPopups();
        })
        .catch((e) => console.log(e))
        .finally(() => setButtonState(false))
    }

    const handleCardDelete = (setButtonState) => {
        setButtonState(true)
        api.deleteCard(cardToBeDeleted._id)
        .then(() => setCards(state => state.filter(c => c._id !== cardToBeDeleted._id)))
        .catch(e => console.log(e))
        .finally(() => {
            closeAllPopups();
            setButtonState(false);
        })
    }
    
    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => setCards(state => state.map((c) => c._id === card._id ? newCard : c)))
        .catch((e) => console.log(e))
    }

    const checkToken = () => {
        loginService.checkToken()
        .then(() => {
            history.push('/cards');
        })
        .catch(e => {
            setLoggedIn(false);
            localStorage.removeItem('token');
            console.log(e);
        })
    }

    const handleRegister = ({ email, password }, setButtonState) => {
        setButtonState(true);
        loginService.signUp({ email, password })
        .then(() => {
            handleAuthStatusPopup({ result: true, text: 'Вы успешно зарегистрировались!' });
            // Авторизация при успешной регистрации
            setTimeout(() =>
                loginService.signIn({ email, password })
                .then(data => checkToken(data))
                .catch(() => history.push('/sign-in'))
            , 500)
        })
        .catch((res) => {
            handleAuthStatusPopup({ result: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
            console.log(res);
        })
        .finally(() => setButtonState(false))
    }
    
    const handleLogin = ({ email, password }, setButtonState) => {
        setButtonState(true);
        loginService.signIn({ email, password })
        .then(res => checkToken(res))
        .catch((res) => {
            handleAuthStatusPopup({ result: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
            console.log(res);
        })
        .finally(() => setButtonState(false))
    }

    useEffect(() => {
        loginService.on(() => { setLoggedIn(true) });
        loginService.on((info) => { setEmail(info?.data?.email) });
        checkToken();
    }, [])

    useEffect(() => {
        setLoading(true)
        Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userData, cardsData]) => {
            setCurrentUser(userData);
            setCards(cardsData);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])

    return (
    <div className='App'>
    <div className={`page ${loading && 'page_loading'}`}>
    <CurrentUserContext.Provider value={currentUser}>

    <Switch>
    <Route exact path='/'><Redirect to='/cards' /></Route>

    {/* Регистрация */}
    <Route path='/sign-up'>
        <Header logoPic={logo} headerLinkTitle='Войти' headerLink='/sign-in'/>
        <Register onSubmit={handleRegister} />
    </Route>
        
    {/* Вход */}
    <Route  path='/sign-in'>
        <Header logoPic={logo} headerLinkTitle='Регистрация' headerLink='/sign-up'/>
        <Login onSubmit={handleLogin} />
    </Route>

    <ProtectedRoute path='/cards' loggedIn={loggedIn}>
        <Header  
            setLoggedIn={setLoggedIn}
            logoPic={logo}
            headerLinkTitle='Выйти' 
            headerLink='/sign-in' 
            email={email}
            loading={loading}
            headerBurger
        />
        <Main 
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleDeletePopupOpen}
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
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
            cardName={selectedCardName}
        />
        <PopupWithDelete 
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onDelete={handleCardDelete}
        />
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
