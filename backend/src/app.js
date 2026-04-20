import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mini-notes-app-three.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allowedHeaders: ["Content-Type", "Authorization"]
  }),
);
app.options("*", cors());
app.use(express.json());
app.use(cookieparser());

//routes
import noteRouter from "./routes/note.routes.js";
app.use("/api/notes", noteRouter);
export { app };
