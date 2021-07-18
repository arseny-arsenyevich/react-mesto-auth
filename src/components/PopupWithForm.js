import React from 'react'

function PopupWithForm ({ name, isOpen, onClose, onSubmit, title, children, buttonTxt, buttonState }) {
    return (
        <div className={`popup popup_content_${name} ${isOpen && 'popup_opened'}`}
            onClick={(e) => {if (e.target === e.currentTarget) onClose()}}
        >
        <div className='popup__container popup__container_position_center'>
            <button className='popup__exit' type='button' onClick={onClose}></button>
            <h2 className='popup__heading'>{title}</h2>
            <form onSubmit={onSubmit} className={`form form_content_${name}`} name={name}>
                <fieldset className='form__input-container'>
                    {children}
                </fieldset>
                <button disabled={buttonState} type='submit' className='form__save-button'>{buttonTxt}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm