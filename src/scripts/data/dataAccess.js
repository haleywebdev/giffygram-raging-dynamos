const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    // properties whose value are empty arrays, to send data to the permanent state later.
    users: [],
    posts: [],
    likes: [],
    messages: []
}

// fetchUsers for use on the login page so that a user can login with their save email and password.
export const fetchUsers = () => {
    return fetch(`${apiUrl}/users`)
        .then(response => response.json())
        .then(
            (login) => {
                applicationState.users = login
            }
        )
}

// getUsers to use for interpolation in to the login module.
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

// fetchPosts
export const fetchPosts = () => {
    return fetch(`${apiUrl}/posts`)
        .then(response => response.json())
        .then(
            (feed) => {
                applicationState.posts = feed
            }
        )
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}

export const savePosts = (savedPosts) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(savedPosts)
    }

    return fetch(`${apiUrl}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}

export const deletePosts = (id) => {
    return fetch(`${apiUrl}/posts/${id}`, { 
        method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// fetchLikes
export const fetchLikes = () => {
    return fetch(`${apiUrl}/likes`)
        .then(response => response.json())
        .then(
            (favorites) => {
                applicationState.likes = favorites
            }
        )
}

export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}

// fetchMessages
export const fetchMessages = () => {
    return fetch(`${apiUrl}/messages`)
        .then(response => response.json())
        .then(
            (msg) => {
                applicationState.messages = msg
            }
        )
}

export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}

export const deleteMessages = (id) => {
    return fetch(`${apiUrl}/messages/${id}`, { 
        method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

