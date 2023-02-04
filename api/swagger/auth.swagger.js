const login = {
    tags: ["Auth"]
}

const register = {
    tags: ["Auth"]
}

const authDocs = {
    "/login": {
        post: login,
    },
    "/register": {
        post: register,
    },
}

export default authDocs;