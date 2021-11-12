import { setNewMessage } from "../data/dataAccess.js"
import { renderApp } from "../main.js"


export const NavBar = () => {

return `
    <nav class="navigation"> 
    <div class="navigation__item navigation__icon">
    <img src="/images/pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name">
        Giffygram
    </div>
    <div class="navigation__item navigation__search"></div>
    
    
    <div class="navigation__item navigation__message">
        <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
        <div class="notification__count">0</div>
            </div>
    <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
            `
}

document.addEventListener(
    "click",
    (clickEvt) => {
        if(clickEvt.target.id === "directMessageIcon"){
            setNewMessage(true)
}})

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "logout")
        localStorage.removeItem('gg_user')
        renderApp()
    }

)