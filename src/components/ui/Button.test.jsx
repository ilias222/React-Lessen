import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { Button } from "./Button"
import userEvent from "@testing-library/user-event";

describe('testing Button', () => {
    it('render component Button', () => {
        render(<Button>Change name</Button>)
    })

    it('render vith snapchot', () => {
        const {asFragment} = render(<Button>Change name</Button>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('render vith snapchot', () => {
        render(<Button>Change name</Button>)
        expect(screen.getByText(/Change name/)).toBeInTheDocument()
    })

    // it('disable is Button', () => {
    //     render(<Button disable>Delete</Button>)
    //     expect(screen.getByText(/Delete/)).toBeDisabled()
    // })

    it('color is Button - black', () => {
        render(<Button>Delete</Button>)
        expect(screen.getByText(/Delete/)).toHaveStyle({color: "black"})
    })

    //  it('onclick to Button', async () => {
    //      const mochHandler = jest.fn()
    //      render(<Button onClick={mochHandler}>Deletes</Button>)
    //      await userEvent.click(screen.getByText(/Deletes/))
    //      expect(mochHandler).toHaveBeenCalledTimes(1)
    //  })

    it('test example', async () => {
        const onChange = jest.fn()
        render(<input type='checkbox' onChange={onChange}/>)
        const chekbox = screen.getByRole('checkbox')
        await userEvent.dblClick(chekbox)
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(chekbox).not.toBeChecked()
    })

})