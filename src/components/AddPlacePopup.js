import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({ onAddPlace, isOpen, onClose }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [buttonState, setButtonState] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeLink = (e) => {
        setLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddPlace({ name, link }, setButtonState);
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm 
            name='card'
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={() =>{
                setName('');
                setLink('');
                onClose();
            }}
            title='Новое место'
            buttonTxt='Создать'
            buttonState={buttonState}
        >
            <label className='form__field'>
                <input 
                    value={name}
                    onChange={handleChangeName}
                    type='text' 
                    className='form__input' 
                    name='name' 
                    id='form-place' 
                    placeholder='Название' 
                    required 
                    minLength='2' 
                    maxLength='30' 
                />
                <span className='form__error form__error_type_form-place'></span>
            </label>
            <label className='form__field'>
                <input 
                    value={link}
                    onChange={handleChangeLink}
                    type='url' 
                    className='form__input' 
                    name='link' 
                    id='form-link' 
                    placeholder='Ссылка на картинку' 
                    required 
                />
                <span className='form__error form__error_type_form-link'></span>
            </label>
    </PopupWithForm>
    )
}

export default AddPlacePopup