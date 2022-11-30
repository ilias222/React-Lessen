import {useState} from 'react'

import styles from './Form.module.css'

export function Form(props){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('gb');

    const handleClick = () => {
        setCount(count+1);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    // console.log('style', styles);
    return (
        <>
    <h1 style={{color: 'yellow'}}>{props.title}</h1>
    <h2 className ={styles.border}>Name: {name}</h2>
    <input type="text" onChange={handleChange} />
    <p>Count: {count}</p>
    <button onClick={handleClick}>Click</button>
    <hr/>
    </>
    );
}