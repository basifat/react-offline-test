import React from 'react';

export const withData = data => Component => Header => props => {
    const { generationmix, ...rest } = data;

    return function(){ 
        return <div>
            <Header {...rest} />
            <Component data={generationmix} width='100%' height='400px' {...props} />
        </div>
    }
}