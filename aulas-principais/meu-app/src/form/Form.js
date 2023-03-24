import React from 'react'
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
        
        <Input type="text" label="Name" id="name" required/>
        <Input type="email" id="email" label="email" required data-attribute="nome"/>
        <Input type="password" id="password" label="password"/>
        <Button />
    </form>
  )
}

export default Form;