import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup (props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState("")

    const handleChangeName = (evt) => {
        setName(evt.target.value)
    }

    const [description, setDescription] = React.useState("")

    const handleChangeDescription = (evt) => {
        setDescription(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]); 

    return (
        <PopupWithForm
        name="name"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        title="Редактировать профиль"
        buttonTxt="Сохранить"
        >
            <label className="form__field">
                <input 
                    value={name}
                    onChange={handleChangeName}
                    type="text" 
                    className="form__input" 
                    name="name" 
                    id="form-name" 
                    placeholder="Имя" 
                    required
                    minLength="2" 
                    maxLength="40" 
                />
                <span className="form__error form__error_type_form-name"></span>
            </label>
            <label className="form__field">
                <input 
                    value={description}
                    onChange={handleChangeDescription}
                    type="text" 
                    className="form__input" 
                    name="about" 
                    id="form-profession" 
                    placeholder="О себе" 
                    required 
                    minLength="2" 
                    maxLength="200" 
                />
                <span className="popup__error popup__error_type_form-profession"></span>
            </label>
    </PopupWithForm>
    )
}

export default EditProfilePopup