import React from "react"

function Card (props) {
    return (
        <li className="elements__card">
        <button onClick={() => {props.onDelete(props.card)}} className={props.trashClass}></button>
        <div className="elements__background">
            <img className="elements__picture" onClick={() => {props.onCardClick([props.card.link, props.card.name])}} src={props.card.link} alt="пейзаж" />
        </div>
        <div className="elements__text-area">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__like">
                <button onClick={() => {props.onCardLike(props.card)}} className={props.likeClass} type="button"></button>
                <p className="elements__like-counter">{props.card.likes.length}</p>
            </div>
        </div>
    </li>
    )
}

export default Card