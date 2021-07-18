import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const [avatar, setAvatar] = useState('');

    const handleChangeAvatar = (e) => {
        setAvatar(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAvatar({ avatar });
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
                    value={avatar}
                    onChange={handleChangeAvatar}
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