import React from 'react'

function ImagePopup ({ card, onClose, cardName }) {
    return (
        <div className={`popup popup_content_picture  ${card && 'popup_opened'}`}
            onClick={(e) => {if (e.target === e.currentTarget) onClose()}}
        >
            <div className='popup__pic-container'>
                <button className='popup__exit popup__exit_content_picture' onClick={onClose} type='button'></button>
                <img className='popup__picture' src={card} alt='пейзаж' />
                <p className='popup__picture-title'>{cardName}</p>
            </div>
        </div>
    )
}

export default ImagePopup