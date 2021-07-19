import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Register ({ onSubmit }) {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonState, setButtonState] = useState(false);

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit({ email, password }, setButtonState);
    }

    return (
        <div className='auth'>
            <h2 className='auth__heading'>Регистрация</h2>
            <form onSubmit={handleSubmit} className='form'>
                <fieldset className='form__input-container form__input-container_theme_dark'>
                <label className='form__field'>
                <input 
                    value={email}
                    onChange={handleChangeMail}
                    type='email' 
                    className='form__input form__input_theme_dark' 
                    name='email' 
                    id='form-email' 
                    placeholder='Email' 
                    required 
                    minLength='2' 
                    maxLength='60' 
                />
                <span className='form__error form__error_type_form-place'></span>
            </label>
            <label className='form__field'>
                <input 
                    value={password}
                    onChange={handleChangePassword}
                    type='password' 
                    className='form__input form__input_theme_dark' 
                    name='password' 
                    id='form-password' 
                    placeholder='Пароль' 
                    required 
                />
                <span className='form__error form__error_type_form-link'></span>
            </label>
                </fieldset>
                <button 
                    disabled={buttonState} 
                    type='submit' 
                    className='form__save-button form__save-button_theme_dark'
                >
                {!buttonState ? 'Зарегистрироваться' : 'Загрузка...'}
                </button>
            </form>
            <Link to='/sign-in' className='auth__if-registred'>Уже зарегистрированы? Войти</Link>
        </div>
    )
}

export default Register