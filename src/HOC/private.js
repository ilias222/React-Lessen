import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { selectIsAuch } from "../store/profile/selectors";


export const PrivateRoutes = ({component}) => {
const isAuch = useSelector(selectIsAuch)

if(!isAuch){
    console.log(isAuch)
    return <Navigate to="/singup" />
}

return component ? component : <Outlet />
}
