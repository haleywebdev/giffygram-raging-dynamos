import { savePosts, setNewPost } from "../data/dataAccess.js"





document.addEventListener(
    "click",
    (clickEvt) => {
        if(clickEvt.target.id === "save"){
            const gifTitle = document.querySelector("#title").value
            const gifURL = document.querySelector("#url").value
            const gifDescription = document.querySelector("#description").value

            const gifSavedObj= {
      title: gifTitle,
      imageURL: gifURL,
      description: gifDescription
            }

savePosts( gifSavedObj )
        }
    }
)

export const newPostButton = () => {
let html = `
<div>
<button class="newPostbutton" id="newPostButton"> Share a new gif </button>
</div>`

return html 
}

document.addEventListener(
    "click",
    (clickEvt) => {
        if(clickEvt.target.id === "newPostButton"){
         setNewPost(true) 
}})


export const PostForm = () => {

    let html = `
    <div class="field flex column">
     <label class="label" for="title"></label>
     <input type="text" id="title" name="title" autofocus placeholder="Title" />

     <label class="label" for="url"></label>
     <input type="text" id= "url" name="url" autofocus placeholder="URL of gif" />

     <label class="label" for="description"></label>
     <textarea id="description" placeholder="Story behind your gif..."></textarea>
     
     
     </select>
     <button class="button" id="save">Save</button>
    </div>
    `
    return html

}
