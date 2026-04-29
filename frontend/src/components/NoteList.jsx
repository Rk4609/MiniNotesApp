import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({notes,fetchNotes,setEditingNote}) => {
  return (
    <div className="notes-container">
        {notes.map((note)=>(
            <NoteItem key={note._id}
            note={note}
            fetchNotes={fetchNotes}
            setEditingNote={setEditingNote} />
        ))}
    </div>
  )
}

export default NoteList