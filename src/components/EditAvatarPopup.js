import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const avatarUrl = useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onUpdateAvatar({avatar: avatarUrl.current.value})
    }

    return (
        <PopupWithForm 
            name='avatar'
            title='Обновить аватар'
            buttonTxt='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className='form__field'>
                <input 
                    ref={avatarUrl}
                    type='url' 
                    className='form__input' 
                    name='avatar' id='form-avatar' 
                    placeholder='Ссылка на картинку' 
                    required 
                />
                <span className='form__error form__error_type_form-avatar'></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup