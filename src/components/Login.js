import React, { useState, useRef } from 'react'
import Input from './Input';

function Login ({ onSubmit }) {
    const emailInput = useRef();
    const passwordInput = useRef();
    const [buttonState, setButtonState] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            email: emailInput.current.value, 
            password: passwordInput.current.value
        }, setButtonState);
    }

    return (
        <div className='auth'>
            <h2 className='auth__heading'>Вход</h2>
            <form onSubmit={handleSubmit} className='form'>
                <fieldset className='form__input-container form__input-container_theme_dark'>
                <Input 
                    name='email-login'
                    type='email'
                    inputRef={emailInput}
                    validities={[emailInput, passwordInput]}
                    setButtonState={setButtonState}
                    placeholder='Email'
                    minLength='4'
                    maxLength='30'
                    additionalClass='form__input_theme_dark'
                />
                <Input 
                    name='password-login'
                    type='password'
                    inputRef={passwordInput}
                    validities={[passwordInput, emailInput]}
                    setButtonState={setButtonState}
                    placeholder='Пароль'
                    minLength='6'
                    maxLength='30'
                    additionalClass='form__input_theme_dark'
                />
                </fieldset>
                <button 
                    disabled={buttonState}
                    type='submit' 
                    className='form__save-button form__save-button_theme_dark'
                >
                Войти
                </button>
            </form>
        </div>
    )
}

export default Login