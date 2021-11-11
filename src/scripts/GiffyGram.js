
import { newPostButton, PostForm } from "./feed/PostEntry.js"


import { FilterByDate, PostsFromDropdown, SortByFavorites } from "./footer/Footer.js"

import { MessageForm } from "./message/MessageForm.js"
import { Posts } from "./feed/Post.js"
import { getNewPost } from "./data/dataAccess.js"


export const GiffyGram = () => {

    // Show main main UI
    return `

    <h2> this is a test </h2> 
    ${getNewPost() ? PostForm() : newPostButton()}
    ${MessageForm()}
    ${Posts()}
    <footer> 
    ${FilterByDate()}
    ${PostsFromDropdown()}
    ${SortByFavorites()}
    </footer>
    
    `
}
