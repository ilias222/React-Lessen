export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_MESSAGE_BOT = 'ADD_MESSAGE_BOT'


export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat
})

export const deleteChat = (chatName) => ({
  type: DELETE_CHAT,
  payload: chatName
})

export const addMessage = (chatName, text, name) => ({
  type: ADD_MESSAGE,
  payload: {chatName, text, name}
})
let botTimes
 export const thunk = (chatName, text, message) => (dispath) => {
   dispath(addMessage(chatName, text, message))
   if (message !== 'bot'){
    clearTimeout(botTimes)
     botTimes = setTimeout(() => {dispath(addMessage(chatName, text = 'Я сдесь', message = 'bot'))}, 3000)
   } 
 }