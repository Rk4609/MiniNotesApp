import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()

app.use(cors({
  // origin: [
  //   "https://mini-notes-app-azure.vercel.app/"
  // ],
  origin:true,
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))


app.use(express.json())
app.use(cookieparser())

import noteRouter from "./routes/note.routes.js"
app.use("/api/notes", noteRouter)

export { app }