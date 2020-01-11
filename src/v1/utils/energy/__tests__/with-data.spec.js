import React from 'react';
import { create } from "react-test-renderer";
import { mockTransformedData } from '../../testing';

const MockChart = ({ props }) => <div>{props}</div>
const MockHeader = ({ props }) => <div>{props}</div>


describe('Given the withData utility', () => {
    let withData, enhanceDataWith, enhanceChartWith, enhanceComponentWith, Component, hocCompoments;

    describe('When imported as a Node module and invoked', () => {

        beforeEach(() => {
            ({ withData } = require('../with-data'));
            enhanceDataWith = withData(mockTransformedData);
        })

        describe('and then enhanced with a Chart', () => {
            beforeEach(() => {
                enhanceChartWith = enhanceDataWith(MockChart);
            })

            describe('and then enhanced with a Header', () => {
                beforeEach(() => {
                    enhanceComponentWith = enhanceChartWith(MockHeader);
                })

                describe('and rendered as a component', () => {

                    beforeEach(() => {
                        Component = enhanceComponentWith({ chartType: "Gauge" });
                        hocCompoments = create(<Component />).root
                        hocCompoments = hocCompoments.findByType('div').props.children
                    })

                    it('then should have rendered both Header and the Chart components', () => {
                        expect(hocCompoments.length).toBe(2);
                    })
                })
            })
        })
    })
});