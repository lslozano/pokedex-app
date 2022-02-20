import React from 'react';
// Components
import Input from '../Input';


const Form = () => {
  return (
    <form onSubmit={() => console.log('Submit')}>
      <Input />
    </form>
  )
}

export default Form;
