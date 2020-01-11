import React from 'react';
import { create } from "react-test-renderer";


describe('Given the Error component', () => {
    let Error, component, actualChildText, expectedChildText;

    describe('When imported as a Node module and Rendered', () => { 
        
        beforeEach(() => {
            ({Error} = require('../error'))
            actualChildText = 'mock error message'
            component = create(<Error message={actualChildText}/>).root
        })

        it('then should have a child matching the correct text', ()=>{
            expectedChildText = component.findByType('div').props.children
            expect(actualChildText).toBe(expectedChildText);
        })
    })

  });