import { fetchPosts, getPosts, savePosts, deletePosts } from "../data/dataAccess.js"

export const Posts = () => {

    const postArray = getPosts()

    const postObj = (posts) => {
        return `<li>${posts.description}<img src="${posts.imageURL}"></li>`
    }


    let html = `
        <ul>
            ${postArray.map(postObj).join("")
        }
        </ul>
    `

    return html
}