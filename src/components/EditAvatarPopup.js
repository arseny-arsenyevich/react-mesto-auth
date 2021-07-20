import React, { useState, useRef, useEffect } from 'react'
import Input from './Input';
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const avatarInput = useRef();
    const [buttonState, setButtonState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({ avatar: avatarInput.current.value }, setButtonState);
    }

    useEffect(() => {
        setButtonState(true);
        avatarInput.current.value= '';
    }, [isOpen])

    return (
        <PopupWithForm 
            name='avatar'
            title='Обновить аватар'
            buttonTxt='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonState={buttonState}
        >
            <Input 
                name='avatar'
                type='url'
                inputRef={avatarInput}
                validities={[avatarInput]}
                setButtonState={setButtonState}
                placeholder='Ссылка на картинку'
                isOpen={isOpen}
            />
        </PopupWithForm>
    )
}

export default EditAvatarPopup