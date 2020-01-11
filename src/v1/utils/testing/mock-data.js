const generationmix = [
    {
        "fuel": "biomass",
        "perc": 4.8
    },
    {
        "fuel": "coal",
        "perc": 2.5
    }]


export const mockFrom = '2019-08-12T12:30Z'
export const mockTo = '2019-08-12T13:00Z'
export const mockGenerationMix = [
    ['fuel', 'perc'],
    ['biomass', 4.8],
    ['coal', 2.5]
]
export const mockPayloadData = {
    data: {
        data: {
            from: mockFrom,
            to: mockTo,
            generationmix: generationmix
        }
    }
}
export const mockTransformedData = {
    generationmix: mockGenerationMix,
    to: mockTo,
    from: mockTo
}