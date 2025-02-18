import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT  || 5000;

app.use(express.json()); // to parse req.body // middleware
app.use(express.urlencoded({extended: true})); // to parse form data (urlencoded)

app.use(cookieParser());
app.use("/api/auth",authRoutes );

console.log(process.env.MONGO_URI);

app.listen( PORT, () => {
    connectMongoDB();
    console.log(`server is running on port ${PORT}`);
})