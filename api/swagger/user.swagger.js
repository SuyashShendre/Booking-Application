const updateUser = {
    tags: ["User"]
}

const deleteUser = {
    tags: ["User"]
}

const getUser = {
    tags: ["User"]
}

const getUserById = {
    tags: ["User"]
}

const userDocs = {
    "/users": {
        get: getUser,
    },
    "/users/{id}": {
        put: updateUser,
        delete: deleteUser,
        get: getUserById,
    },
}

export default userDocs;