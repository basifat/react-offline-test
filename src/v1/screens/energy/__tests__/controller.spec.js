import React from 'react';
import { create } from "react-test-renderer";
import { mockTransformedData } from '../../../utils/testing';

const mockLoading = 'mock loading ...'
const mockHeading = 'mock heading'
const mockChart = 'mock chart'
const mockError = 'mock error'

const MockHeader = (props) => <div>{mockHeading} </div>
const MockChart = (props) => <div>{mockChart}</div>
const MockLoader = (props) => <div>{mockLoading}</div>
const MockError = (props) => <div>{mockError}</div>

const mockWithData = data => Component => Header => props => () => <div> <MockHeader /> <MockChart /> </div>



describe('Given the Charts controller', () => {
    let Charts, useDataServices, component, children, expectedChildText;

    describe('When imported as a Node module and Rendered', () => {

        beforeEach(() => {
            jest.doMock('../../../services/use-data-api');
            jest.doMock('../../../utils/energy/endpoints');
            jest.doMock('react-google-charts', () => ({ Chart: MockChart }));
            jest.doMock('../../../components/energy/error', () => ({ Error: MockError }));
            jest.doMock('../../../components/energy/loader', () => ({ Loader: MockLoader }));
            jest.doMock('../../../components/energy/header', () => ({ Header: MockHeader }));
            jest.doMock('../../../utils/energy/with-data', () => (({ withData: mockWithData })));

            ({ useDataApi: useDataServices } = require('../../../services/use-data-api'));
        })

        describe('When data is not loading', () => {

            beforeEach(() => {
                useDataServices.mockReturnValue([{ data: mockTransformedData, isLoading: false, isError: false }]);
                ({ Charts } = require('../controller'));
                component = create(<Charts errorMessage="mock error message" loaderMessage="mock loader message" />).root
                children = component.findByType('div').props.children
            })

            it('then it should have rendered no more than the required number of Charts', () => {
                expect(children.length).toBe(4);
            })
        })

        describe('When data is loading', () => {

            beforeEach(() => {
                useDataServices.mockReturnValue([{ data: [], isLoading: true, isError: false }]);
                ({ Charts } = require('../controller'));
                component = create(<Charts errorMessage="mock error message" loaderMessage="mock loader message" />).root
            })

            it('then it should have rendered the loading component', () => {
                expectedChildText = component.findByType('div').props.children
                expect(expectedChildText).toBe(mockLoading);
            })
        })

        describe('When data loading returns error', () => {

            beforeEach(() => {
                useDataServices.mockReturnValue([{ data: [], isLoading: false, isError: true }]);
                ({ Charts } = require('../controller'));
                component = create(<Charts errorMessage="mock error message" loaderMessage="mock loader message" />).root
            })

            it('then it should have rendered the loading component', () => {
                expectedChildText = component.findByType('div').props.children
                expect(expectedChildText).toBe(mockError);
            })
        })

    })

});