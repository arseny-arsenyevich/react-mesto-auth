import React from "react"

function ImagePopup (props) {
    return (
        <div className={`popup popup_content_picture  ${props.card && "popup_opened"}`}
            onClick={(e) => {if (e.target === e.currentTarget) props.onClose()}}
        >
            <div className="popup__pic-container">
                <button className="popup__exit popup__exit_content_picture" onClick={props.onClose} type="button"></button>
                <img className="popup__picture" src={props.card} alt="пейзаж" />
                <p className="popup__picture-title">{props.cardName}</p>
            </div>
        </div>
    )
}

export default ImagePopup