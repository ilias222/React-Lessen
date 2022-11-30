import { useState } from "react";
import styles from './style.css'

export function Message(props){
    const arrP = [111,112,113,121,122,123,131,211,212,221,231,213,233,311,312,321,322,332,333,111];
    // const [count, setCount] = useState('');
    const [name, setName] = useState('0');

    const handleChange = (event) => {
        if(!name[3]){
        setName(name + event.target.textContent);
        }else{
            setName(name * "");
        }
    }

    let resulUser = name[1]+name[2]+name[3] == arrP[Math.round(props.age)];

    return(
        <>
        <div className="place">
            <h1>{ props.title}</h1>
            <div className="option">
                <p>{name[1] ? name[1] : "*"}</p>
                <p>{name[2] ? name[2] : "*"}</p>
                <p>{name[3] ? name[3] : "*"}</p>
            </div>
            <p>P.S.:Я загадал: {arrP[Math.round(props.age)]}</p>
        </div>
        <div className="inner_place">
            <button className="inner_place__button" onClick={handleChange}>1</button>
            <button className="inner_place__button" onClick={handleChange}>2</button>
            <button className="inner_place__button" onClick={handleChange}>3</button>
        </div>
        <div className="place">
            <form>
            <button className="inner_place__button___go1">Обновить</button>
            </form>
        </div>
        <div className="option">
            {resulUser ? <input placeholder="Как зовут ПОБЕДИТЕЛЯ?"/> : "Пока число не отгадано!"}
        </div>
        </>
    )
}