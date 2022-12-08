import {useState, useEffect, memo} from 'react'
import { Child } from './components/Child'
import { Button } from './ui/Button'

export const Form = (props) => {
  const [change, setChange] = useState('')
  const [img, setImg] = useState('')
  const [clisk, setClick] = useState('')
  const [inputs, setInput] = useState('')
  let data = `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}  
              ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

  


  const handleChange = (event) => {
    setChange(event.target.value)
  }

  const handleInputs = (event) => {
    setInput(event.target.value)
  }

  const handleImg = () => {
    setClick()
  }

  const handleButton = () => {
    props.setUserVith(change, data, img, inputs);
  }

  return (
    <>
      <Button setWin = {props.setList} setName = {handleChange} setImg = {handleImg} 
        setText = {handleInputs} setUp = {handleButton}/>
    </>
  )
}