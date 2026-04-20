import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import API from "../services/api"

const NoteForm = ({ fetchNotes, editingNote, setEditingNote }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  useEffect(() => {
    if (editingNote) {
      setFormData(editingNote)
    }
  }, [editingNote])

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingNote) {
      await API.put(`/api/notes/${editingNote._id}`, formData)
      setEditingNote(null)
    } else {
      await API.post("api/notes/add", formData)
      alert("Add new Notes")
    }
    setFormData({ title: "", description: "" })
    fetchNotes()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <button className="btn" type="submit">
        {" "}
        {editingNote ? "Update" : "Add"} Note
      </button>
    </form>
  )
}

export default NoteForm
