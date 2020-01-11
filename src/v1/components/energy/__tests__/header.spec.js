import React from 'react';
import { create } from "react-test-renderer";


describe('Given Error component', () => {
    let Header, component, actualChildText, expectedChildText, props;

    describe('When imported as a Node module and Rendered', () => {

        beforeEach(() => {
            ({ Header } = require('../header'))
            props = { from: 10, to: 15 }
            component = create(<Header {...props} />).root
            actualChildText = `Power generation data from ${props.from} to ${props.to}`
        })

        it('then should have a child matching the correct text', () => {
            expectedChildText = component.findByType('h1').props.children
            expect(actualChildText).toBe(expectedChildText);
        })
    })

});