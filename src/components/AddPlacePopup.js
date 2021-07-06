import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup (props) {
    const [name, setName] = React.useState("")

    const handleChangeName = (evt) => {
        setName(evt.target.value)
    }

    const [link, setLink] = React.useState("")

    const handleChangeLink = (evt) => {
        setLink(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onAddPlace({
            name,
            link
        })
        setName("")
        setLink("")
    }

    return (
        <PopupWithForm 
            name="card"
            onSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={() =>{
                setName("")
                setLink("")
                props.onClose()
            }}
            title="Новое место"
            buttonTxt="Создать"
        >
            <label className="popup__field">
                <input 
                    value={name}
                    onChange={handleChangeName}
                    type="text" 
                    className="popup__form popup__form_input_place" 
                    name="name" 
                    id="form-place" 
                    placeholder="Название" 
                    required 
                    minLength="2" 
                    maxLength="30" 
                />
                <span className="popup__error popup__error_type_form-place"></span>
            </label>
            <label className="popup__field">
                <input 
                    value={link}
                    onChange={handleChangeLink}
                    type="url" 
                    className="popup__form popup__form_input_link" 
                    name="link" 
                    id="form-link" 
                    placeholder="Ссылка на картинку" 
                    required 
                />
                <span className="popup__error popup__error_type_form-link"></span>
            </label>
    </PopupWithForm>
    )
}

export default AddPlacePopup