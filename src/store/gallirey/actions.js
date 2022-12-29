import { apiURL } from "./constant"
import axios from "axios"
import { ADD_GALLIREY, GET_ARR_ERR, GET_ARR_SUCCES, GET_ARR_LOADING, DATATYPE, error, succes, loading } from "./constant"
import { useState } from "react"


export const moreImmag = (names, id, title) => ({
    type: ADD_GALLIREY,
    payload: {names, id, title}
})
export const succesImmag = (name, id, date) => ({
    type: GET_ARR_SUCCES,
    payload: {name, id, date}
})

export const loadImmag = (name, id, date) => ({
    type: GET_ARR_LOADING,
    payload: {name, id, date}
})

export const errImmag = (name, err, id, date) => ({
    type: GET_ARR_ERR,
    payload: {name, err, id, date}
})

export const thunkGallirey = (names, id) => async (dispath) => {
    try{
        const recponse = await axios.get(apiURL)
        if (recponse.status == 200){
              dispath(succesImmag(succes, id, DATATYPE))
        }
        dispath(moreImmag(names, id, recponse.data.value))
    } catch (err) {
        dispath(errImmag(error, err, id, DATATYPE))
    } finally {
        dispath(loadImmag(loading, id, DATATYPE))
    }
   
  }
