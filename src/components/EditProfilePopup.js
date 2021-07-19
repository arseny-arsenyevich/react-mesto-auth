import React, { useState, useContext, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup ({ onUpdateUser, isOpen, onClose }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const [nameValidity, setNameValidity] = useState(true);
    const [descriptionValidity, setDescriptionValidity] = useState(true);
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const checkFormValidity = (e, setError) => {
        if (!nameValidity || !descriptionValidity) {
            setError(e.target.validationMessage)
            setButtonState(true)
        }
        else {
            setError('')
            setButtonState(false)
        }
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
        setNameValidity(e.target.validity.valid);
        checkFormValidity(e, setNameError);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
        setDescriptionValidity(e.target.validity.valid);
        checkFormValidity(e, setDescriptionError);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        },
        setButtonState
        );
    }

    const clearErrors = () => {
        setNameValidity(true)
        setDescriptionValidity(true)
        setButtonState(false)
    }

    useEffect(() => {
        clearErrors()
        setName(currentUser.name);
        setDescription(currentUser.about);
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
            <label className='form__field'>
                <input 
                    value={name}
                    onChange={handleChangeName}
                    type='text' 
                    className={`form__input ${!nameValidity && 'form__input-invalid'}`} 
                    name='name' 
                    id='form-name' 
                    placeholder='Имя' 
                    required
                    minLength='2' 
                    maxLength='40' 
                />
                <span
                    className={`form__error ${!nameValidity && 'form__error_active'}`} 
                >{nameError}</span>
            </label>
            <label className='form__field'>
                <input 
                    value={description}
                    onChange={handleChangeDescription}
                    type='text' 
                    className={`form__input ${!descriptionValidity && 'form__input-invalid'}`} 
                    name='about' 
                    id='form-profession' 
                    placeholder='О себе' 
                    required 
                    minLength='2' 
                    maxLength='200' 
                />
                <span
                    className={`form__error ${!descriptionValidity && 'form__error_active'}`} 
                >{descriptionError}</span>
            </label>
    </PopupWithForm>
    )
}

export default EditProfilePopup