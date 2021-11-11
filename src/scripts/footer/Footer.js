import { getLikes, getUsers, setDisplayFav } from "../data/dataAccess.js"


//! HTML interpolation for the "Posts by" dropdown list. 
export const FilterByDate = () => {
    let html = ""
    html += `
        <div class = "footerSection">
        <label for ="FilterByDateDescription">Filter By Date</label>

        </div>
    `
    return html
}



//! HTML interpolation for the "Post from" dropdown lost. 
export const PostsFromDropdown = () => {
    const users = getUsers()
    let html = ""

    html += `
    <div class ="field">
        <label for="PostsByUserDescription">Posts by User</label>
        <select>
            <option value="0">Choose a User...</option>
            ${users.map(user => {
                return `<option value="${user.id}">${user.name}</option>`
            }
            ).join("")
        }
        </select>
        <div>
    `
    return html
}

document.addEventListener (
    "click",
    (clickevt) => {
        if (clickevt.target.name==="likeDescription") {
            // when the user clicks the favorites box the displayFavorites transient state should be changed 
            // invoke setter function and pass a boolean argument 
            setDisplayFav(true)
        }

    }
)

//! HTML interpolation for the favorite selector. 
export const SortByFavorites = () => {
    const likes = getLikes()
    let html = ""
    html += `
        <label for="ShowOnlyFavoritesDescription">Show Only Favorites</label>

        <input type="checkbox" name="likeDescription" ></input>
    
    `
        return html
}