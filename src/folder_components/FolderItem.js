import React from 'react'

//props = {id, name}

function FolderItem(props){
  return (
    <li id={props.id}>
      {props.name}
    </li>
  )
}

export default FolderItem;