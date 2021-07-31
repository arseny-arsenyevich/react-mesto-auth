import React, { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card ({ card, onDelete, onCardClick, onCardLike }) {
    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `elements__trash ${!isOwn ? 'elements__trash_hidden' : ''}`
    ); 
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
    );

    return (
        <li className='elements__card'>
        <button onClick={() => {onDelete(card)}} className={cardDeleteButtonClassName}>
            <div className='elements__trash-icon' />
        </button>
        <div className='elements__background'>
            <img className='elements__picture' onClick={() => {onCardClick([card.link, card.name, card._id])}} src={card.link} alt='пейзаж' />
        </div>
        <div className='elements__text-area'>
            <h2 className='elements__title'>{card.name}</h2>
            <div className='elements__like'>
                <button onClick={() => {onCardLike(card)}} className={cardLikeButtonClassName} type='button'></button>
                <p className='elements__like-counter'>{card.likes.length}</p>
            </div>
        </div>
    </li>
    )
}

export default Card