import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { gallireyReducer } from "./reducer"

describe('testing gallireyReducer', () => {
    it("returns state with status loading after requestArticles action",
        () => { 
       
            const initialState=null
                const userStore = gallireyReducer(initialState, {name: 'new Name'});
                expect(userStore).toMatchSnapshot();
                });
        })
