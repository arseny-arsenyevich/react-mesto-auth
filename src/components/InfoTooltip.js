import React from "react"

function InfoToolTip ({ requestPic }) {
    return (
        <div className="popup">
            <div className="popup__container popup__container_position_center">
                <button className="popup__exit" type="button"></button>
                <img className="popup__message-pic" src={requestPic}/>
                <h2 className="popup__message">Вы успешно зарегистрировались!</h2>
            </div>
        </div>
    )
}

export default InfoToolTip