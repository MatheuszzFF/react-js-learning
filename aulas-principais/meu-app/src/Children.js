import React from 'react';

const Children = ({texto, children}) => {
    return (
        <h1>{texto}, {children}</h1>
    )
}

export default Children;