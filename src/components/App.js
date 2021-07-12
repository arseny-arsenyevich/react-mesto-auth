import React, { useCallback } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from "../images/logo.svg";
import success from "../images/auth-success.svg";
import fail from "../images/auth-fail.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import InfoToolTip from "./InfoTooltip";

function App() {
    const handleEscClose = useCallback((evt) => {
        if (evt.key === "Escape") {
            closeAllPopups()
        }
    }, [])

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
        document.addEventListener("keydown", handleEscClose)
    }

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
        document.addEventListener("keydown", handleEscClose)
    }

    const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false)

    const handleAddPlaceClick = () => {
        setIsAddPlaceOpen(true)
        document.addEventListener("keydown", handleEscClose)
    }

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [selectedCardName, setSelectedCardName] = React.useState(null)

    const handleCardClick = (src) => {
        setSelectedCard(src[0])
        setSelectedCardName(src[1])
        document.addEventListener("keydown", handleEscClose)
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlaceOpen(false)
        setSelectedCard(null)
        document.removeEventListener("keydown", handleEscClose)
    }

    const [currentUser, setCurrentUser] = React.useState({
        name: "",
        about: "",
        avatar: ""
    })

    const handleUpdateUser = (data) => {
        api.redactProfile(data)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            }).catch((e) => {console.log(e)})
    }

    const handleUpdateAvatar = (data) => {
        api.redactAvatar(data)
        .then((res) => {
            setCurrentUser(res)
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

    const [cards, setCards] = React.useState([])
    
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

    React.useEffect(() => {
        api.getCards().then((res) => {
            setCards(res)
        }).catch((e) => {console.log(e)})
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {setCurrentUser(res)})
            .catch((e) => {console.log(e)})
    }, [])

    // ------------------------------------------------------------------------

    return (
    <div className="App">
    <div className="page">
    <CurrentUserContext.Provider value={currentUser}>

    <Switch>
    <Route exact path="/"><Redirect to="/cards" /></Route>

    {/* Регистрация */}
    <Route path="/sign-up">
        <Header logoPic={logo} headerLinkTitle="Войти" headerLink="/sign-in"/>
        <Register />
    </Route>
        
    {/* Вход */}
    <Route  path="/sign-in">
        <Header logoPic={logo} headerLinkTitle="Регистрация" headerLink="/sign-up"/>
        <Login />
    </Route>

    <Route path="/cards">
        <Header  
            logoPic={logo}
            headerLinkTitle="Выйти" 
            headerLink="/sign-in" 
            headerEmail='placeholder@mail.ru'
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
    </Route>

    <ProtectedRoute path="*">
        <h1>404:(</h1>
    </ProtectedRoute>
    </Switch>

    <section className="popups" aria-label="всплывающие окна">
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
            name="card"
            onClose={closeAllPopups}
            isOpen={isEditAvatarPopupOpen}
            isOpen={false}
            title="Вы уверены?"
            buttonTxt="Да"
        /> */}
        <InfoToolTip
            requestPic={success}
        />
    </section>

    </CurrentUserContext.Provider>
    </div>
    </div>
    );
}

export default App;
