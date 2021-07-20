import React, { useState, useContext, useEffect, useRef } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Input from './Input';

function EditProfilePopup ({ onUpdateUser, isOpen, onClose }) {
    const currentUser = useContext(CurrentUserContext);
    const nameInput = useRef();
    const descriptionInput = useRef();
    const [buttonState, setButtonState] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name: nameInput.current.value,
            about: descriptionInput.current.value,
        },
        setButtonState
        );
    }

    useEffect(() => {
        setButtonState(false)
        nameInput.current.value = currentUser.name;
        descriptionInput.current.value = currentUser.about;
    }, [currentUser, isOpen]); 

    return (
        <PopupWithForm
        name='name'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        title='Редактировать профиль'
        buttonTxt='Сохранить'
        buttonState={buttonState}
        >
            <Input 
                name='name'
                type='text'
                inputRef={nameInput}
                validities={[nameInput, descriptionInput]}
                setButtonState={setButtonState}
                placeholder='Имя'
                minLength='2'
                maxLength='40'
                isOpen={isOpen}
            />
            <Input 
                name='description'
                type='text'
                inputRef={descriptionInput}
                validities={[descriptionInput, nameInput]}
                setButtonState={setButtonState}
                placeholder='О себе'
                minLength='2'
                maxLength='200'
                isOpen={isOpen}
            />
    </PopupWithForm>
    )
}

export default EditProfilePopup