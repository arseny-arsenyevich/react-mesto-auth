import React, { useContext } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main ({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardLike, onCardDelete, onCardClick }) {
    const currentUser = useContext(CurrentUserContext)

    return(
        <main className='main'>
            <section className='profile profile_position_center'>
                <div className = 'profile__picture-edit'>
                    <img className='profile__picture' src={currentUser.avatar} alt='Фотография исследователя' />
                    <button className='profile__picture-edit-button' type='button'
                        onClick={onEditAvatar}
                    ></button>
                </div>
                <div className='profile__name-box'>
                    <h1 className='profile__name'>{currentUser.name}</h1>
                    <button className='profile__edit-button' type='button'
                        onClick={onEditProfile}
                    ></button>
                    <p className='profile__profession'>{currentUser.about}</p>
                </div>
                <button className='profile__add-button' type='button'
                    onClick={onAddPlace}
                ></button> 
            </section>

            <section className='elements' aria-label='места'>
                <p className={`elements__empty ${!cards.length && 'elements__empty_active'}`}>Добавьте картинки</p>
                <ul className='elements__table'>
                    {cards.map((card) => {
                        return (
                            <Card 
                                onCardLike={onCardLike}
                                onDelete={onCardDelete}
                                onCardClick={onCardClick} 
                                key={card._id} 
                                card={card} 
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main