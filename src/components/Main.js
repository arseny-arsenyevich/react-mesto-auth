import React from "react"
import Card from "./Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Main (props) {
    const currentUser = React.useContext(CurrentUserContext)

    return(
        <main className="main">
            <section className="profile profile_position_center">
                <div className = "profile__picture-edit">
                    <img className="profile__picture" src={currentUser.avatar} alt="Фотография исследователя" />
                    <button className="profile__picture-edit-button" type="button"
                        onClick={props.onEditAvatar}
                    ></button>
                </div>
                <div className="profile__name-box">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button"
                        onClick={props.onEditProfile}
                    ></button>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={props.onAddPlace}
                ></button> 
            </section>

            <section className="elements" aria-label="места">
                <p className="elements__empty">Добавьте картинки</p>
                <ul className="elements__table">
                    {props.cards.map((card) => {
                        const isOwn = card.owner._id === currentUser._id;
                        const cardDeleteButtonClassName = (
                            `elements__trash ${!isOwn ? 'elements__trash_hidden' : ''}`
                        ); 
                        const isLiked = card.likes.some(i => i._id === currentUser._id);
                        const cardLikeButtonClassName = (
                            `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
                        );

                        return (
                            <Card 
                                likeClass={cardLikeButtonClassName} 
                                onCardLike={props.onCardLike}
                                onDelete={props.onCardDelete}
                                trashClass={cardDeleteButtonClassName} 
                                onCardClick={props.onCardClick} 
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