import express from "express";
import db from "./config/database.js";
import route from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.log("Connection Error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/hasil', route);

app.listen(5000, () => console.log("Server started on port 5000"));