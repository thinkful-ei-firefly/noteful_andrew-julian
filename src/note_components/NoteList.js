import React from 'react';
import NoteItem from './NoteItem';
import './notes.css';

//props = {notes, folder}
//notes = [{id, name, modified, folderId}, {...}...]
//folder = [{name, id}, {...}...]

function NoteList(props) {
  console.log(props);
  let thisFoldersNotes;
  if(!props.match.params.id){
    thisFoldersNotes = props.notes;
  }else{
    thisFoldersNotes = [];
    for (let i = 0; i < props.notes.length; i++)
    {
      let currentNote = props.notes[i];
      if (currentNote.folderId === props.match.params.id) {
        thisFoldersNotes.push(currentNote);
      }
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
                        folder={props.folder}
                    />
                </li>
                )}
        </ul>
        <button id="addNoteButton">Add Note</button>
    </div>
  );
}

export default NoteList;
