// import {useState} from 'react'
import {Message} from './components/class/mission/Message'

function App() {
  let rem = Math.random()*20;
  return (
    <Message title="Какой пароль я загадал?" age = {rem}/>
    
  );
}

export default App;
