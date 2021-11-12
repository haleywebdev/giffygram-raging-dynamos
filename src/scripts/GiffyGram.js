
import { newPostButton, PostForm } from "./feed/PostEntry.js"
import { NavBar } from "./nav/NavBar.js"


import { FilterByDate, PostsFromDropdown, SortByFavorites } from "./footer/Footer.js"

import { MessageForm } from "./message/MessageForm.js"
import { Posts } from "./feed/Post.js"
import { getNewPost, getNewMessage } from "./data/dataAccess.js"


export const GiffyGram = () => {

    return `
    
    <header>${getNewMessage() ? MessageForm() : NavBar()}</header>
<div>
    ${getNewPost() ? PostForm() : newPostButton()}

    ${Posts()}
</div>
    <footer> 
    ${FilterByDate()}
    ${PostsFromDropdown()}
    ${SortByFavorites()}
    </footer>
    
    `
}
