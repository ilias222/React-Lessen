import PropTypes from 'prop-types'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addMessage, addMessageBot, thunkbot } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { thunk } from '../../store/messages/actions'

let botTimes
export function Form() {
  const [text, setText] = useState('')
  const [test, setTest] = useState('Я здесь есть')
  const [name, setName] = useState('user')
  const botName = 'bot'

  const dispatch = useDispatch()
  const { chatId } = useParams()

   const handleSubmit = (e) => {
     e.preventDefault()
     e.target.firstChild.focus()
     dispatch(thunk(chatId, text, name))
     
     setText('')
   }
  
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoFocus
        />
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">Add message</Button>
          </Stack>
      </form>
      <strong>{"Имя в чате: "}</strong>
      <TextField id="standard-basic" variant="standard"
      type="text" 
      value={name}
      onChange={(event) => setName(event.target.value)}
      />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start"  >
          {/* map */}
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Вы вошли в чат
                </Typography>
                {" — Задавайте вопросы, и увидете ответ!"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}