import authDocs from "./swagger/auth.swagger.js";
import hotelDocs from "./swagger/hotel.swagger.js";
import roomDocs from "./swagger/room.swagger.js";
import userDocs from "./swagger/user.swagger.js";

const swagger = {
    openapi: "3.0.0",
    info: {
      title: "Booking API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Suyash Shendre",
        url: "https://blog.suyashshendre.com",
        email: "info@suyashshendre.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development"
      },
      {
        url: "http://blog.suyashshendre.com",
        description: "Production Development"
      },
    ],
    tags: [
        {
            name: "Auth",
            description: "Auth Routes"
        },
        {
            name: "User",
            description: "User Routes"
        },
        {
            name: "Hotel",
            description: "Hotel Routes"
        },
        {
            name: "Room",
            description: "Room Routes"
        }
    ],
    paths: {
        ...authDocs,
        ...userDocs,
        ...hotelDocs,
        ...roomDocs,
    }
};

export default swagger;
