import { getUsers, getNewMessage, saveMessages } from "../data/dataAccess.js";

export const MessageForm = () => {
    const usersObj = getUsers()
    const messagesArray = getNewMessage()
    

    let html = ""
    html += `
        <div class="directMessage">
            <h3>Direct Message</h3>
        <div> 
            Recipient: 
        <select name="directMessage_userSelect" class="message__input">
            <option value="0">Choose a recipient...</option>
            ${usersObj.map(user => {
                return `<option value="${user.id}">${user.name}</option>`
            }
            ).join("")
            }
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