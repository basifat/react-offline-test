import React from 'react';

export const Header = ({ from, to }) => {
    const message = `Power generation data from ${from} to ${to}`;
    return <div><h1>{message}</h1></div>
}