import React from "react"

function PopupWithForm (props) {
    return (
        <div className={`popup popup_content_${props.name} ${props.isOpen && "popup_opened"}`}
            onClick={(e) => {if (e.target === e.currentTarget) props.onClose()}}
        >
        <div className="popup__container popup__container_position_center">
            <button className="popup__exit" type="button" onClick={props.onClose}></button>
            <h2 className="popup__heading">{props.title}</h2>
            <form onSubmit={props.onSubmit} className={`popup__forms popup__forms_content_${props.name}`} name={props.name}>
                <fieldset className="popup__input-container">
                    {props.children}
                </fieldset>
                <button type="submit" className="popup__save-button">{props.buttonTxt}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm