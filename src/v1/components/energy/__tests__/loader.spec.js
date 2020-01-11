import React from 'react';
import { create } from "react-test-renderer";


describe('Given the Loader component', () => {
    let Loader, component, actualChildText, expectedChildText;

    describe('When imported as a Node module and Rendered', () => {

        beforeEach(() => {
            ({ Loader } = require('../loader'))
            actualChildText = 'mock loader message'
            component = create(<Loader message={actualChildText}/>).root
        })

        it('then should have a child matching the correct text', () => {
            expectedChildText = component.findByType('div').props.children
            expect(actualChildText).toBe(expectedChildText);
        })
    })

});