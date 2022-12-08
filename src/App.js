import { useState, useEffect } from 'react'
import { Form as FormFunc } from './components/func/Form'
import './css/style.css'

export function App () {
  const [messageList, setMessageList] = useState([{autor: '', date: '', text: ''}])
  const ret = document.querySelector('p')

    const setUser = (nam, dat, imag, textet) =>{
      setMessageList([{autor: nam, date: dat, text: textet}])}
      
useEffect(() => {
console.log("App did mounted")
if(messageList[0].autor){
  ret.insertAdjacentHTML('beforeend', messageList.map( (item) => 
  ('<div class="use_widdow">' + '<p class="dia">' + '<span class="title_use">' 
  + item.autor +' ' + item.date + '</span>' + '<br class="br_use"/>' 
  + item.text + '</p>' +'</div>')).join(" "))
  
  setTimeout(() =>{
    ret.insertAdjacentHTML('beforeend', `<div class="robo_window"> <p class="robo_win"> 
    <span class ="title_robo">Administrator ${messageList[0].date} </span> 
    <br>Ваш запрос обрабатывается.</p></div> `)
  }, 5000)  
}
}, [messageList])

  return (
    <div className='full_window'>
    <div className='windo'>
      <p></p>
    </div>
      <FormFunc setUserVith ={setUser} setList = {messageList}/>
    </div>
  )
}

// export default App