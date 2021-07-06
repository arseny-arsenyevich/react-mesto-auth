import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card (props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `elements__trash ${!isOwn ? 'elements__trash_hidden' : ''}`
    ); 
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
    );

    return (
        <li className="elements__card">
        <button onClick={() => {props.onDelete(props.card)}} className={cardDeleteButtonClassName}></button>
        <div className="elements__background">
            <img className="elements__picture" onClick={() => {props.onCardClick([props.card.link, props.card.name])}} src={props.card.link} alt="пейзаж" />
        </div>
        <div className="elements__text-area">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__like">
                <button onClick={() => {props.onCardLike(props.card)}} className={cardLikeButtonClassName} type="button"></button>
                <p className="elements__like-counter">{props.card.likes.length}</p>
            </div>
        </div>
    </li>
    )
}

export default Card