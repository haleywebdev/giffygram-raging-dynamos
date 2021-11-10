//* Give us access to the DOM
import { GiffyGram } from "./GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp()

//* eventListener to listen for when there is a change in state. 
applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)