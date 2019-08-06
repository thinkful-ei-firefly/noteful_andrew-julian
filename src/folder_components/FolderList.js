import React from 'react'
import FolderItem from './FolderItem'
import './folders.css';

//props = {folders}
//folders = [{id, name}, {...}...]

function FolderList(props) {
  return(
    <div id="folderList">
    <ul>
      {props.folders.map(folder =>
        <li key={folder.id}>
          <FolderItem 
          name={folder.name}
          id={folder.id}
          />
        </li>)}
    </ul>
    </div>

  )


}

export default FolderList;