import React from 'react'

//props = {id, name}

function FolderItem(props){
  let link = '/' + props.id;
  return (
    <a href={link}>
    <li id={props.id}>
      {props.name}
    </li>
    </a>
  )
}

export default FolderItem;