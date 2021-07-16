import React from 'react'

function InfoToolTip ({ isOpen, onClose, statusPic, statusText }) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}
            onClick={(e) => {if (e.target === e.currentTarget) onClose()}}
        >
            <div className='popup__container popup__container_position_center'>
                <button onClick={onClose} className='popup__exit' type='button'></button>
                <img className='popup__message-pic' alt='auth result message' src={statusPic}/>
                <h2 className='popup__message'>{statusText}</h2>
            </div>
        </div>
    )
}

export default InfoToolTip