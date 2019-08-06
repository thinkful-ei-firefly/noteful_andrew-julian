import React from 'react';
import NoteItem from './NoteItem';

//props = {notes}
//notes = [{id, name, modified, folderId}, {...}...]

function NoteList(props) {
  return (
    <div className="NoteList">
        <ul>
            {props.notes.map(note =>
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
