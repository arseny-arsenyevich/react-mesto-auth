import React, { useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';

function AddPlacePopup ({ onAddPlace, isOpen, onClose }) {
    const nameInput = useRef();
    const linkInput = useRef();
    const [buttonState, setButtonState] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddPlace({ name: nameInput.current.value, link: linkInput.current.value }, setButtonState)
    }

    useEffect(() => {
        setButtonState(true);
        nameInput.current.value= '';
        linkInput.current.value= '';
    }, [isOpen])

    return (
        <PopupWithForm 
            name='card'
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={() =>{
                nameInput.current.value= '';
                linkInput.current.value= '';
                onClose();
            }}
            title='Новое место'
            buttonTxt='Создать'
            buttonState={buttonState}
            >
            <Input 
                name='place'
                type='text'
                inputRef={nameInput}
                validities={[nameInput, linkInput]}
                setButtonState={setButtonState}
                placeholder='Название'
                minLength='2'
                maxLength='30'
                isOpen={isOpen}
            />
            <Input 
                name='place-link'
                type='url'
                inputRef={linkInput}
                validities={[linkInput, nameInput]}
                setButtonState={setButtonState}
                placeholder='Ссылка на картинку'
                isOpen={isOpen}
            />
    </PopupWithForm>
    )
}

export default AddPlacePopup