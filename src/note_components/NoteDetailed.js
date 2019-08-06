import React from 'react';

//props = {name, modified, id, content}

function NoteDetailed(props) {
    let thisDate = new Date(props.modified);
    thisDate = thisDate.toString();
    thisDate = thisDate.slice(4, 16);
  return (
      <div>
    <div className="noteItem" id={props.id}>
      <h3 className="noteTitle">{props.name}</h3>
      <p className="noteModified">Date modified on {thisDate}</p>
      <button>Delete Note</button>
    </div>
    <p className="noteContent">{props.content}</p>
    </div>
  );
}

export default NoteDetailed;
