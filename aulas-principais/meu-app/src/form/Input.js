import React from 'react';

const Input = ({type, id, label, ...props}) => {
    return (
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props} />
        </fieldset>       
    )
}

export default Input