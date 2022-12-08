import {useState, useEffect, memo} from 'react'
import '../../../css/style.css'

export function Button(props){
    useEffect(() => {
        console.log("Ui did mounted")
        
        }, [props.setList])
    return(
        <div className='bar_form'>
        <input type="text" placeholder="Name" onInput={props.setName} className="bar_form__input-autor"/>
        <div class="flex-win">
        <textarea name="user_up__innerText" id="innerText" cols="30" rows="10" placeholder="Go to text"
        onChange={props.setText} className="bar_form__text-user">
        </textarea>
        <button onClick={props.setUp} className="bar_form__button-down">UP</button>
        </div>
        </div>
    )
}