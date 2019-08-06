import React from 'react'
import {Link} from 'react-router-dom'

//props = {id, name}

function FolderItem(props){
  let link = '/folder/' + props.id;
  return (
    <Link to={link}>
    
    <li id={props.id}>
      {props.name}
    </li>
    </Link>
  )
}

export default FolderItem;