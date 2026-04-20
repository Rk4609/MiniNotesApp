import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
)

app.use(cookieparser())
app.use(express.json())

//routes 
import noteRouter from "./routes/note.routes.js"
app.use("/api/notes",noteRouter)
export { app }
