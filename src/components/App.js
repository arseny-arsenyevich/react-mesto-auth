import React from "react";
import logo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    }

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }

    const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false)

    const handleAddPlaceClick = () => {
        setIsAddPlaceOpen(true)
    }

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [selectedCardName, setSelectedCardName] = React.useState(null)

    const handleCardClick = (src) => {
        setSelectedCard(src[0])
        setSelectedCardName(src[1])
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlaceOpen(false)
        setSelectedCard(null)
    }

    return (
    <div className="App">

    <div className="page">
        <Header logoPic={logo} />

        <Main 
            onEditProfile={handleEditProfileClick} 
            onEditAvatar={handleEditAvatarClick} 
            onAddPlace={handleAddPlaceClick} 
            onCardClick={handleCardClick}
        />

        <Footer />

        <section className="popups" aria-label="всплывающие окна">
            <PopupWithForm 
                name="name"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                title="Редактировать профиль"
                buttonTxt="Сохранить"
                >
                        <label className="popup__field">
                            <input type="text" className="popup__form popup__form_input_name" name="name" id="form-name" placeholder="Имя" required minLength="2" maxLength="40" />
                            <span className="popup__error popup__error_type_form-name"></span>
                        </label>
                        <label className="popup__field">
                            <input type="text" className="popup__form popup__form_input_profession" name="about" id="form-profession" placeholder="О себе" required minLength="2" maxLength="200" />
                            <span className="popup__error popup__error_type_form-profession"></span>
                        </label>
            </PopupWithForm>

            <PopupWithForm 
                name="card"
                isOpen={isAddPlaceOpen}
                onClose={closeAllPopups}
                title="Новое место"
                buttonTxt="Создать"
            >
                        <label className="popup__field">
                            <input type="text" className="popup__form popup__form_input_place" name="name" id="form-place" placeholder="Название" required minLength="2" maxLength="30" />
                            <span className="popup__error popup__error_type_form-place"></span>
                        </label>
                        <label className="popup__field">
                            <input type="url" className="popup__form popup__form_input_link" name="link" id="form-link" placeholder="Ссылка на картинку" required />
                            <span className="popup__error popup__error_type_form-link"></span>
                        </label>
            </PopupWithForm>

            <PopupWithForm 
                name="avatar"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                title="Обновить аватар"
                buttonTxt="Сохранить"
            >
                        <label className="popup__field">
                            <input type="url" className="popup__form popup__form_input_avatar" name="avatar" id="form-avatar" placeholder="Ссылка на картинку" required />
                            <span className="popup__error popup__error_type_form-avatar"></span>
                        </label>
            </PopupWithForm>

            <ImagePopup 
                card={selectedCard}
                cardName={selectedCardName}
                onClose={closeAllPopups}
            />

            {/* <PopupWithForm 
                name="card"
                onClose={closeAllPopups}
                //isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
                isOpen={false}
                title="Вы уверены?"
                buttonTxt="Да"
            /> */}
            {/* <div className="popup popup_content_delete-card">
                <div className="popup__container popup__container_position_center">
                    <button className="popup__exit popup__exit_content_card" type="button"></button>
                    <h2 className="popup__heading">Вы уверены?</h2>
                    <form className="popup__forms popup__forms_content_delete-card" name="forms">
                        <button type="submit" className="popup__save-button popup__save-button_content_delete-card">Да</button>
                    </form>
                </div>
            </div> */}
        </section>
    </div>
    </div>
    );
}

export default App;
