import React, {useState} from 'react'
import apiAuth from '../utils/apiAuth'
import { useHistory } from 'react-router-dom'

function Login ({ setLoggedIn, handleStatusPopup, setEmail }) {
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

    const handleLogin = (evt) => {
        evt.preventDefault()
        setButtonState(true)
        apiAuth.signIn({email, password})
            .then(res => {
                localStorage.setItem('token', res.token);

                apiAuth.checkToken()
                .then((info) => {
                    setEmail(info.data.email)
                })
                .catch((e) => {console.log(e)})

                setLoggedIn(true)
                history.push('/cards')
            })
            .catch((res) => {
                handleStatusPopup({result: false, text: 'Что-то пошло не так! Попробуйте ещё раз.'})
                console.log(res)
            })
            .finally(() => setButtonState(false))
    }

    return (
        <div className='auth'>
            <h2 className='auth__heading'>Вход</h2>
            <form onSubmit={handleLogin} className='form'>
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
                {!buttonState ? 'Войти' : 'Загрузка...'}
                </button>
            </form>
        </div>
    )
}

export default Login