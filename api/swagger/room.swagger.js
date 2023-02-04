const createRoom = {
    tags: ["Room"]
}

const updateRoom = {
    tags: ["Room"]
}

const deleteRoom = {
    tags: ["Room"]
}

const getRoom = {
    tags: ["Room"]
}

const getRoomById = {
    tags: ["Room"]
}

const updateRoomAvailability = {
    tags: ["Room"]
}

const roomDocs = {
    "/rooms": {
        get: getRoom,
    },
    "/rooms/{id}": {
        put: updateRoom,
        get: getRoomById,
    },
    "/rooms/{id}/{hotelid}": {
        delete: deleteRoom,
    },
    "/rooms/availability/:id": {
        put: updateRoomAvailability
    },
    "/rooms/{hotelid}": {
        post: createRoom,
    }
}

export default roomDocs;