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
  const [loading, setloading] = useState(false)

  const fetchNotes = async () => {
    setloading(true)
    try {
      const res = await API.get("/")
      setNotes(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log("Error", error)
    }
    setloading(false)
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  )

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div>
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Search notes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NoteForm
        fetchNotes={fetchNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <NoteList
          notes={filteredNotes}
          fetchNotes={fetchNotes}
          setEditingNote={setEditingNote}
        />
      )}
    </div>
  )
}

export default Home
