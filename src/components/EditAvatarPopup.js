import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {
    const avatarUrl = React.useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onUpdateAvatar({avatar: avatarUrl.current.value})
    }

    return (
        <PopupWithForm 
            name="avatar"
            title="Обновить аватар"
            buttonTxt="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input 
                    ref={avatarUrl}
                    type="url" 
                    className="popup__form popup__form_input_avatar" 
                    name="avatar" id="form-avatar" 
                    placeholder="Ссылка на картинку" 
                    required 
                />
                <span className="popup__error popup__error_type_form-avatar"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup