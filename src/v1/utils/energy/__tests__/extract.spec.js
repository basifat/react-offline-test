import { mockPayloadData, mockFrom, mockTo, mockGenerationMix } from '../../testing';


describe('Given the extract utility', () => {
    let extract, actual, generationmix, to, from;

    describe('When imported as a Node module and invoked with the correct argument', () => {

        beforeEach(() => {
            ({ extract } = require('../extract'));
            actual = (extract(mockPayloadData));
            ({ generationmix, from, to } = actual)
        })

        it('then should return the expected result generationmix data', () => {
            expect(generationmix).toEqual(mockGenerationMix);
        })

        it('then should return the expected from date', () => {
            expect(from).toEqual(mockFrom);
        })

        it('then should return the expected to date', () => {
            expect(to).toEqual(mockTo);
        })
    })
});