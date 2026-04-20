import { Router } from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/Note.controller.js";
const router = Router();

router.route("/add").post(createNote)
router.route("/").get(getAllNotes)
router.route("/:id").put(updateNote)
router.route("/:id").delete(deleteNote)
export default router;
