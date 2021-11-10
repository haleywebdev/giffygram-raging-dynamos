<<<<<<< HEAD




=======
import { getUsers, getMessages, saveMessages } from "../data/dataAccess.js";

export const MessageForm = () => {
    let html = `
        <div class="directMessage">
            <h3>Direct Message</h3>
        <div> 
            Recipient: 
        <select name="directMessage_userSelect" class="message__input">
            <option>Choose a recipient...</option>
                <option value="messageRecipient--1">Taylor Swift</option>
                <option value="messageRecipient--2">Young Jeezy</option>
                <option value="messageRecipient--3">Bob Ross</option>
                <option value="messageRecipient--4">Billie Eilish</option>
                <option value="messageRecipient--5">Travis Scott</option>
        </select></div>
        <div>
            <label for="message">Message:</label>
                <input name="message" class="message__input" type="text" placeholder="Message to user">
        </div>
        <button id="directMessage__submit">Save</button>
        <button id="directMessage__cancel">Cancel</button>
        <button id="directMessage__close">x</button>
        </div>       
    `

    return html
}

// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "save") {
//         const userMessage = document.querySelector("input[name='message']").value
//         const userDescription = document.querySelector("input[name='']").value
//         const userRecipient = document.querySelector("input[name='directMessage_userSelect']").value

//         const dataToSendToAPI = {
//             userId: userDescription,
//             recipientId: userRecipient,
//             message: userMessage,
//         }

//         saveMessages(dataToSendToAPI)
//     }
// })
>>>>>>> main
