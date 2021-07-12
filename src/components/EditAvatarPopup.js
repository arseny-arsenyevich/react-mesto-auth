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
            <label className="form__field">
                <input 
                    ref={avatarUrl}
                    type="url" 
                    className="form__input" 
                    name="avatar" id="form-avatar" 
                    placeholder="Ссылка на картинку" 
                    required 
                />
                <span className="form__error form__error_type_form-avatar"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup