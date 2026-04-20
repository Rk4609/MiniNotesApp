import React from "react"
import { useState } from "react"
import API from "../services/api"
import { useEffect } from "react"
import NoteForm from "../components/NoteForm"
import NoteList from "../components/NoteList"

const Home = () => {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)
  const [search, setSearch] = useState("")

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  )

  const fetchNotes = async () => {
    const res = await API.get("/")
    setNotes(res.data.data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div>
      <h1>Notes App</h1>
      <input type="text"
      placeholder="Search notes"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
      <NoteForm
        fetchNotes={fetchNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />
      <NoteList
        notes={filteredNotes}
        fetchNotes={fetchNotes}
        setEditingNote={setEditingNote}
      />
      
    </div>
  )
}

export default Home
