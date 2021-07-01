import React from "react"
import api from "../utils/api"
import Card from "./Card"

function Main (props) {
    const [userName, setUserName] = React.useState(null)
    const [userDescription, setUserDescription] = React.useState(null)
    const [userAvatar, setUserAvatar] = React.useState(null)
    const [cards, setCards] = React.useState([])

    api.getUserInfo().then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
    })

    api.getCards().then((res) => {
        setCards(res)
    })

    return(
        <main className="main">
            <section className="profile profile_position_center">
                <div className = "profile__picture-edit">
                    <img className="profile__picture" src={userAvatar} alt="Фотография исследователя" />
                    <button className="profile__picture-edit-button" type="button"
                        onClick={props.onEditAvatar}
                    ></button>
                </div>
                <div className="profile__name-box">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button"
                        onClick={props.onEditProfile}
                    ></button>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={props.onAddPlace}
                ></button> 
            </section>

            <section className="elements" aria-label="места">
                <p className="elements__empty">Добавьте картинки</p>
                <ul className="elements__table">
                    {cards.map((card, i) => {
                        return (
                            <Card onCardClick={props.onCardClick} key={i} card={card} />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main