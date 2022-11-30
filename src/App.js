// Импорт класса Форма, из пути
import {useState} from 'react'
import {Form} from './components/classes/Form'
import {Form as FormFunc} from './components/func/Form'


// Функция Апп, возврат разметки
function App(){
    const [toggle, setToggle] = useState(true);
    const [arr, setArr] = useState([{name: 'Bibo'}, {name: 'Boba'}, {name: 'Giga'}, {name: 'Goga'}])
    return (
        <div>
        <h1>Hello world!!!</h1>
        <Form/>
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide': 'show'}</button>
        {toggle && <FormFunc title="Props Viev"/>}
        <ul>
        {arr.map((item) => {
            return (<li>{item.name}</li>)
        })}
        </ul>
        </div>
    )
}

export default App