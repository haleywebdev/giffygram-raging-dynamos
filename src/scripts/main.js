import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchLikes, fetchUsers } from "./data/dataAccess.js"
import { fetchPosts } from "./data/dataAccess.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
    .then(()=> fetchLikes())
    .then(()=> {
        const user = parseInt(localStorage.getItem("gg_user"))
        if (user) {
            fetchPosts().then(
                () => {
                    applicationElement.innerHTML = GiffyGram()
                }
            )
        } else {
            applicationElement.innerHTML = LoginForm()
        } 
        
        } 
    )
    

    }    
    // const applicationElement = document.querySelector(".giffygram")

    // export const renderApp = () => {
    //     const user = parseInt(localStorage.getItem("gg_user"))
    
    //     if (user) {
    //         applicationElement.innerHTML = GiffyGram()
    //     } else {
    //         applicationElement.innerHTML = LoginForm()
    //     }
    // }


renderApp()

//* eventListener to listen for when there is a change in state. 
applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)