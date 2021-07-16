import React, {useState} from 'react'
import apiAuth from '../utils/apiAuth'
import { Link, useHistory } from 'react-router-dom'

function Register ({ handleStatusPopup, setLoggedIn, setEmail }) {
    const history = useHistory()

    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [buttonState, setButtonState] = useState(false)

    const handleChangeMail = (evt) => {
        setMail(evt.target.value)
    }

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const handleRegister = (evt) => {
        evt.preventDefault()
        setButtonState(true)
        apiAuth.signUp({email, password})
            .then(res => {
                handleStatusPopup({result: true, text: 'Вы успешно зарегистрировались!'})
                setTimeout(() =>
                apiAuth.signIn({email, password})
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        setLoggedIn(true)
                        setEmail(res.data.email)
                        history.push('/cards')
                    })
                    .catch(res => history.push('/sign-in'))
                    //задержка выяснена опытным путем
                , 500)
            })
            .catch(res => {
                handleStatusPopup({result: false, text: 'Что-то пошло не так! Попробуйте ещё раз.'})
                console.log(res)
            })
            .finally(() => setButtonState(false))
    }

    return (
        <div className='auth'>
            <h2 className='auth__heading'>Регистрация</h2>
            <form onSubmit={handleRegister} className='form'>
                <fieldset className='form__input-container form__input-container_theme_dark'>
                <label className='form__field'>
                <input 
                    value={email}
                    onChange={handleChangeMail}
                    type='text' 
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