import React from 'react';
import './input.styles.scss';

const Input = ({ placeholder = 'Add Tag...', value, onChange, addTag }) => {
  return (
    <div className='input-container'>
      <input
        className='input'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={addTag}
      />
    </div>
  );
};

export default Input;
