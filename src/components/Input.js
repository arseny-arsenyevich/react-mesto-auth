import React, { useCallback, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

function Input ({ 
                name,
                type, 
                inputRef,
                validities,
                setButtonState,
                placeholder, 
                minLength, 
                maxLength,
                isOpen,
                additionalClass
            }) {
    const [inputError, setInputError] = useState('');
    const [justOpened, setJustOpened] = useState(null);
    const history = useHistory();

    const checkFormValidity = (evt) => {
        console.log(validities[0].current.validity.valid);
        if (validities.some(a => !a.current.validity.valid)) {
            setInputError(evt.target.validationMessage);
            // console.log(evt.target.validationMessage);
            setButtonState(true);
        }
        else {
            setInputError('');
            setButtonState(false);
        }
    }
    
    const handleChange = useCallback((e) => {
        console.log(e);
        setJustOpened(true);
        checkFormValidity(e);
    }, [])

    useEffect(() => {
        setJustOpened(null);
        inputRef.current.addEventListener('input', handleChange);

        return () => inputRef?.current?.removeEventListener('input', handleChange);
    }, [isOpen, history])

    return (            
    <label className='form__field'>
    <input 
        type={type} 
        className={`form__input ${additionalClass} ${ 
            (justOpened !== null) && 
            (!validities[0].current?.validity.valid && 'form__input-invalid')}`} 
        id={`form-${name}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        ref={inputRef}
        required
    />
    <span className={`form__error ${
        (justOpened !== null) && 
        (!validities[0].current?.validity.valid && 'form__error_active')}`} >{inputError}</span>
    </label>)
}

export default Input