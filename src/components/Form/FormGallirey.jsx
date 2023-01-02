import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkGallirey } from "../../store/gallirey/actions"
import axios from "axios"
import { apiURL } from "../../store/gallirey/constant"
import { chakMessage } from "../../store/gallirey/selector"
import { DATATYPE } from "../../store/gallirey/constant"

let countEr = 0
let count = 2
const names = 'Chak'

export function FormGallirey () {
    const [image, setImage] = useState('')
    // const [ontext, setOntext] = useState (true)

    const message = useSelector(chakMessage)
    const dispath = useDispatch()

    const handleTextSubmit = () => {
        count++
        console.log(message.Chak[message.Chak.length -1].title)
        // setOntext(!ontext)
        dispath(thunkGallirey(names, count))
    }

    // useEffect(() =>{
    //     // axios.get(apiURL).then((resp) => {
    //     //     // console.log(message.Chak[0].names)
    //     //     if (resp.status === 200)setImage(resp.data.value)
    //     // }).catch(error => {
    //     //     setImage('Now Chuck is resting! Wisdom is not born by itself!')
    //     //     countEr++
    //     //     if (countEr >=3) setImage('We are already calling Chuck, soon you will learn his new wisdom.')
    //     //     console.log(error, error.config)
    //     // })
    // }, [ontext])

    return (
        <>
        <div className="chak">
        <img src="../../../chak.png" />
            <p className="chakTetle">
                {message.Chak[message.Chak.length -1].title}
            </p>
            <button
        onClick={handleTextSubmit}
        >
            Мудрость Чака
            </button>
        </div>
        <div className="history_Chak">
        <h2>Последние мудрости Чака</h2>
        {message.Chak.map((chak, index) =>(
            <p key={index}>
                <span>{chak.names} :</span>
                <span> [ {DATATYPE} ] </span>
                <span className="tex_Chak">{chak.title}</span>
            </p>     
        ))}
        </div>
        </>
    )
}