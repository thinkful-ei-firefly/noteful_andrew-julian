import React from 'react';

//props = {name, modified, id, content}

function NoteItem(props) {
    let thisDate = new Date(props.modified);
    thisDate = thisDate.toString();
    thisDate = thisDate.slice(4, 16);
    let link = '/' + props.folder.id + '/' + props.id;
  return (
    <a href={link}>
    <div className="noteItem" id={props.id}>
      <h3 className="noteTitle">{props.name}</h3>
      <div className="itemInfo">
      <p className="noteModified">Date modified on {thisDate}</p>
      <button>Delete Note</button>
      </div>
    </div>
    </a>
  );
}

export default NoteItem;
