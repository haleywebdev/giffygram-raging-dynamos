
// document.addEventListener(
//     "click",
//     (clickEvt) => {
//         if(clickEvt.target.id === "save")



export const PostForm = () => {

    let html = `
    <div class="field flex column">
     <label class="label" for="title"></label>
     <input type="text" name="title" autofocus placeholder="Title" />

     <label class="label" for="url"></label>
     <input type="text" name="url" autofocus placeholder="URL of gif" />

     <label class="label" for="description"></label>
     <textarea placeholder="Story behind your gif..."></textarea>
     
     
     </select>
     <button class="button" id="save">Save</button>
    </div>
    `
    return html

}
