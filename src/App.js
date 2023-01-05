import { Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { useEffect, useState } from 'react'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { useDispatch } from 'react-redux'
import { persistor } from './store'
import { GallireyPage } from './pages/Gallirey'
import { SingReg } from './pages/SingReg'
import { SingUp } from './pages/SingUp'

import { firebaseAuth, messageRef } from './services/firebase'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PrivateRoutes } from './HOC/private'
import { auch } from './store/profile/actions'
import { onValue } from 'firebase/database'

const degaultMessges = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    },
  ]
}

export function App () {
  const [messages, setMessages] = useState(degaultMessges)
  const [theme, setTheme] = useState(defaultContext.theme)
  const [messageDB, setMessageDB] = useState({})
  const dispatch = useDispatch()

  useEffect(() =>{
 const onuse = firebaseAuth.onAuthStateChanged((user)=>{
  if(user){
    dispatch(auch(true))
  } else{
    dispatch(auch(false))
  }
 })
 return onuse
  }, [])

  useEffect(() =>{
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val()
      setMessageDB(data)
      console.log(messageDB)
    })
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <>
      {/* <Header /> */}
        <PersistGate persistor={persistor}>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <ThemeContext.Provider value={{
          theme,
          toggleTheme
        }}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="chats" element={<PrivateRoutes/>}>
              <Route index element={<ChatList messageDB={messageDB} />} />
              <Route
                path=":chatId"
                element={<ChatsPage />}
              />
            </Route>
              <Route path="chakmems" element={<GallireyPage />} />
              <Route path="singup" element={<SingUp />} />
              <Route path="singreg" element={<SingReg />} />
            </Route>
            <Route path="*" element={<h2>404 Page not FOUND</h2>} />
          </Routes>
        </ThemeContext.Provider>
        </ThemeProvider>
        </PersistGate>
    </>
  )
}

// Api key LWbYMVy4JcmBDSXPJr5CcRD7DktYVeqeRgxIt6vH