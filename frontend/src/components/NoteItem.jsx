import React from "react"
import API from "../services/api"

const NoteItem = ({ note, fetchNotes, setEditingNote }) => {
  const handleDelete = async () => {
    await API.delete(`/${note._id}`)
    alert("deleted")
    fetchNotes()
  }
  return (
    <div
      className="card"
      style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
    >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p className="date">Created Date: {new Date(note.createdAt).toLocaleString()}</p>
      <div className="actions">
        <button onClick={() => setEditingNote(note)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NoteItem
