import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm'

function PopupWithDelete ({ isOpen, onClose, onDelete }) {
    const [buttonState, setButtonState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        onDelete(setButtonState);
    }

    return (
            <PopupWithForm
                name='delete'
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={handleSubmit}
                title='Вы уверены?'
                buttonTxt='Удалить'
                buttonState={buttonState}
            >
        </PopupWithForm>
    )
}

export default PopupWithDelete