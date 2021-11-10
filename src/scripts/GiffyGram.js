import { PostForm } from "./feed/PostEntry.js"
import { MessageForm } from "./message/MessageForm.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <h2> this is a test </h2> 
    ${PostForm()}
    ${MessageForm()}
    
    //! Function that has the HTML interpolation for the NavBar
    //! Function that has the giffygram__feed HTML interpolation which includes the array of posts and the "Have a gif to Post? button included. 
    //! Function that has the footer HTML interpolation for the Posts since dropdown, posts by user dropdown, and dhow only favorites checkbox. 
    `
}
