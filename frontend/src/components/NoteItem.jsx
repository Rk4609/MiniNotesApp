import React from "react"
import API from "../services/api"

const NoteItem = ({ note, fetchNotes, setEditingNote }) => {
  const handleDelete = async () => {
    await API.delete(`/${note._id}`)
    alert("deleted")
    fetchNotes()
  }
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>

      <button onClick={() => setEditingNote(note)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default NoteItem
