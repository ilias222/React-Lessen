import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { FormGallirey } from "./FormGallirey"

describe('testing FormGallirey', () => {
    it("render FormGallirey",
        () => { 
            render(<FormGallirey data-testid="empty"/>)
            expect(getByTestId('empty')).toBeEmptyDOMElement()
                })
    it('dispatches getArticles on mount', () => {
        render(
            <Provider store={mockStore}>
            <Gists />
            </Provider>
                );
                const actions = mockStore.getActions();
                const lastAction = actions[actions.length - 1];
                expect(lastAction).toEqual(getGistsRequest());
                    });
                    
        })