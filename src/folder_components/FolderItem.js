import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import dummy-store from './dummy-store'

function FolderItem(props){
  return (
    <li>
      <Link />
      {/* <NavLink to={`/folder/${props.id}`}>{props.name}</NavLink> */}
    </li>
  )
}

export default FolderItem;