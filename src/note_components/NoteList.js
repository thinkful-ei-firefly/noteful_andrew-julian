import React from 'react';
import NoteItem from './NoteItem';

//props = {notes, folder}
//notes = [{id, name, modified, folderId}, {...}...]

function NoteList(props) {
  let thisFoldersNotes = [];
    for (let i = 0; i < props.notes.length; i++)
    {
      let currentNote = props.notes[i];
      if (currentNote.folderId === props.folder) {
        thisFoldersNotes.push(currentNote);
      }
    }
  return (
    <div className="NoteList">
        <ul>
            {thisFoldersNotes.map(note =>
                <li key={note.id}>
                    <NoteItem
                        id={note.id}
                        name={note.name}
                        modified={note.modified}
                    />
                </li>
                )}
        </ul>
        <button id="addNoteButton">Add Note</button>
    </div>
  );
}

export default NoteList;
