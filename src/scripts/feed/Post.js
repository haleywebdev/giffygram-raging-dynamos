import { getDisplayFav, getLikes, getPosts } from "../data/dataAccess.js"





export const Posts = () => {

    const userWantsToSeeFavorites = getDisplayFav()
    const userLikes = getLikes()
    const postArray = getPosts()
    if (userWantsToSeeFavorites) {
        //display only favorite post for the user

    } else {


        const postObj = (posts) => {
            return `<li>${posts.title} <img src="${posts.imageURL}">${posts.description} Posted By: ${posts.id}</li>`
        }


        let html = `
            <ul>
                ${postArray.map(postObj).join("")
            }
            </ul>
        `

        return html
    }

}

// export const buildPost = ()=> {
//     const postFeed =getPosts()
//     let html = `
//     ${postFeed.map(post => {
//         `
//       <li> ${post.title} ${post.imageURL} ${post.description}</li>
//         `
//     })}

//     ` 
//     return html 
// }

// export const postFeed = ()=> {


// }