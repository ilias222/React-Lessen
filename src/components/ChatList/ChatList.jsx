import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'

export function ChatList() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat,
   (prev, next) => prev.length === next.length)

  console.log('update chats', chats)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))
  }

  return (
    <>
      
      
          <ul>
              
                  {chats.map((chat) => (
                    <li key={chat.id}>
                      <Link to={`/chats/${chat.name}`}>
                        
                        {chat.name} 
                        
                      </Link>
                      <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
                    </li>
                  ))}
              
          </ul>
        
      

      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create Chat</button>
      </form>
    </>
  )
}