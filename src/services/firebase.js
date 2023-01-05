import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBVquOVNA0l8-f5qyqlPCzl9JJtYAtiGwE",
    authDomain: "sing-8c0ac.firebaseapp.com",
    databaseURL: "https://sing-8c0ac-default-rtdb.firebaseio.com",
    projectId: "sing-8c0ac",
    storageBucket: "sing-8c0ac.appspot.com",
    messagingSenderId: "251447048967",
    appId: "1:251447048967:web:18f6f1019a0070a788e3a2"
  };
  
  const app = initializeApp(firebaseConfig)

  export const firebaseAuth = getAuth(app)
  export const singReg = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
  export const singUp = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)
  export const logOut = async () => await signOut(firebaseAuth)

  const db = getDatabase(app)

  export const userRef = ref(db, 'user')
  export const messageRef = ref(db, 'messages')
  export const getChatById = (chatId) => ref(db, `messages/${chatId}`)
  export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`) 