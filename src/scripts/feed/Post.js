import { deletePosts, getDatePosted, getDisplayFav, getLikes, getPosts, getUsers } from "../data/dataAccess.js"

export const Posts = () => {

    const userWantsToSeeFavorites = getDisplayFav()
    const userLikes = getLikes()
    const postArray = getPosts()
    const users = getUsers()
    const time = getDatePosted()

    if (userWantsToSeeFavorites) {
        //display only favorite post for the user
        const postHTMLArray = postArray.map(
            (post) => {
                // was this post liked by current user? 
                const currentUserId = parseInt(localStorage.getItem("gg_user"))
                const userLike = userLikes.find((like) => {
                    return currentUserId === like.userId && post.id === like.postId
                })
                if (userLike) {
                    return `<li>${post.title} <img src="${post.imageURL}">${post.description} Posted By: ${post.id}</li>`

                }
            }
        )
        const postHTML = postHTMLArray.join("")
        return postHTML
    } else {


        const postObj = (post) => {
            return `
            <section class="post">

                <h3 class=post__title>${post.title}</h3>

            <img class="post__image" src="${post.imageURL}">

            <div class="post__description">${post.description}</div> 

            <div class="post__tagline">
                Posted By: 
                    ${users.map(user => {
                        if(user.id === post.userId)
                {
                    return `${user.name} 
                    <div id ="timestamp">
                    Posted on: ${post.timestamp}
                    </div>`
                }
            }
            ).join("")
        }
            </div>
            <div class="post__actions"><div><img id="favoritePost--" class="actionIcon" src="/images/favorite-star-blank.svg"></div>
            <div><img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg"></div></div>
            </section>
            `
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

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener(
    "click", 
    click => {
        if (click.target.id.startsWith("blockPost--")) {
            const [,postId] = click.target.id.split("--")
            deletePosts(parseInt(postId))
        }
    }
)

