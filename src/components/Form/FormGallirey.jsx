import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkGallirey } from "../../store/gallirey/actions"

import { chakMessage } from "../../store/gallirey/selector"
import { DATATYPE } from "../../store/gallirey/constant"

let countEr = 0
let count = 2
const names = 'Chak'

export function FormGallirey () {
    const [image, setImage] = useState('')

    const message = useSelector(chakMessage)
    const dispath = useDispatch()

    const handleTextSubmit = () => {
        console.log("get FormGallirey")
        count++
        console.log(message.Chak[message.Chak.length -1].title)
        // setOntext(!ontext)
        dispath(thunkGallirey(names, count))
    }

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