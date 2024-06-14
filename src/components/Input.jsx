import React from 'react'

function Input({onChangeFun, value, name, children}) {
  return (
    <div id='user-input'>
          <label>{children}</label>
          <input 
            type="number" 
            name={name} 
            onChange={onChangeFun} 
            value={value} 
            required
          />
    </div>
  )
}

export default Input
