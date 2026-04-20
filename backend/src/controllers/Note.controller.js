import { Note } from "../model/Note.model.js"
import { asyncHandler } from "../utills/AsyncHandler.js"
import { ApiError } from "../utills/ApiError.js"
import { ApiResponse } from "../utills/ApiResponse.js"

//create Notes
const createNote = asyncHandler(async (req, res) => {
  const note = await Note.create(req.body)
  return res.status(201).json(
    new ApiResponse(201, note, "Note created")
  )
})

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find()

  return res.status(200).json(
    new ApiResponse(200, notes, "Notes fetched")
  )
})

const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: 'after',
      runValidators: true
    }
  )

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    })
  }

  return res
    .status(200)
    .json(new ApiResponse(200, note, "Notes updated"))
})

const deleteNote = asyncHandler(async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  return res.json(new ApiResponse(200, {}, "Deleted"))
})

export { createNote, getAllNotes, updateNote, deleteNote }
