const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    // adding a property whose value is an empty array to send transient data to the API.
    users: [],
    posts: [],
    likes: [],
    messages: []
}

// fetchUsers function to fetch state from the API, for use with login page so that the user can login with their email address and password saved in permanent state.
export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (login) => {
                applicationState.users = login
            }
        )
}

// getUsers function to use in string interpolation on login.js page to send the data to that page.
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

// fetchPosts same purpose to fetchUsers, except for use in the main Giffy feed.
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (feed) => {
                applicationState.posts = feed
            }
        )
}

// getPosts function will be used as an import and interpolated in to the main Giffy feed so that the state can be displayed after retrieval from the API.
export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}

// savePosts function for use later in the main Giffy feed for the 'create a giffy' button, so that a user can save a post and it will be sent to the API as permanent state.
export const savePosts = (savePostToFeed) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(savePostToFeed)
    }

    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })

}

// deletePosts function so that a user can delete their own post and update it in the permanent state.
export const deletePosts = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// fetchLikes 
export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
        .then(response => response.json())
        .then(
            (like) => {
                applicationState.likes = like
            }
        )
}

// getLikes for import on main Giffy page, string interpolation.
export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}

// fetchMessages 
export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (msg) => {
                applicationState.messages = msg
            }
        )
}

// getMessages 
export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}

export const saveMessages = (saveMessagesToInbox) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveMessagesToInbox)
    }

    return fetch(`${apiURL}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })

}

// deleteMessages
export const deleteMessages = (id) => {
    return fetch(`${apiURL}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
