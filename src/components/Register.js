import React, {useState} from "react"
import api from "../utils/api"
import apiAuth from "../utils/apiAuth"

function Register (props) {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeMail = (evt) => {
        setMail(evt.target.value)
    }

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const handleRegister = (evt) => {
        apiAuth.signUp()
    }

    return (
        <div className="auth">
            <h2 className="auth__heading">Регистрация</h2>
            <form onSubmit="" className="form">
                <fieldset className="form__input-container form__input-container_theme_dark">
                <label className="form__field">
                <input 
                    value={mail}
                    onChange={handleChangeMail}
                    type="text" 
                    className="form__input form__input_theme_dark" 
                    name="name" 
                    id="form-place" 
                    placeholder="Email" 
                    required 
                    minLength="2" 
                    maxLength="60" 
                />
                <span className="form__error form__error_type_form-place"></span>
            </label>
            <label className="form__field">
                <input 
                    value={password}
                    onChange={handleChangePassword}
                    type="password" 
                    className="form__input form__input_theme_dark" 
                    name="link" 
                    id="form-link" 
                    placeholder="Пароль" 
                    required 
                />
                <span className="form__error form__error_type_form-link"></span>
            </label>
                </fieldset>
                <button type="submit" className="form__save-button form__save-button_theme_dark">Зарегистрироваться</button>
            </form>
            <a href="#" className="auth__if-registred">Уже зарегистрированы? Войти</a>
        </div>
    )
}

export default Register