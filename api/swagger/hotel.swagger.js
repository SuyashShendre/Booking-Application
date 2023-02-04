const createHotel = {
    tags: ["Hotel"]
}

const updateHotel = {
    tags: ["Hotel"]
}

const deleteHotel = {
    tags: ["Hotel"]
}

const getHotel = {
    tags: ["Hotel"]
}

const getHotelById = {
    tags: ["Hotel"]
}

const countByCity = {
    tags: ["Hotel"]
}

const countByType = {
    tags: ["Hotel"]
}

const getHotelRooms = {
    tags: ["Hotel"]
}

const hotelDocs = {
    "/hotels": {
        post: createHotel,
        get: getHotel
    },
    "/hotels/{id}": {
        put: updateHotel,
        delete: deleteHotel,
    },
    "/hotels/find/{id}": {
        get: getHotelById,
    },
    "/hotels/countByCity": {
        get: countByCity,
    },
    "/hotels/countByType": {
        get: countByType,
    },
    "/hotels/room/{id}": {
        get: getHotelRooms,
    },
}

export default hotelDocs;