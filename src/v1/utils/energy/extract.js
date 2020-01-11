export const extract = (result) => {
    const { data: { data: { generationmix, ...rest } } } = result

    const header = generationmix.slice(0, 1).map(item => Object.keys(item))
    const values = generationmix.map(item => Object.values(item))
    return { generationmix: header.concat(values), ...rest }
}