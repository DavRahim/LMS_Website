import { app } from "./app";
import {v2 as cloudinary} from "cloudinary"
import http from "http"
import connectDB from "./utils/db";
import { initSocketSever } from "./socketServer";
require("dotenv").config();
const port = process.env.PORT || 4000;
const server = http.createServer(app);

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketSever(server)

// create server
server.listen(port, () => {
    console.log(`Server is connected with port ${port}`);
    connectDB();
});


