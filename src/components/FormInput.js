import React from 'react'

const FormInput = ({placeholder, label, value, type, onChange}) =>{
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <input 
          type={type} 
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
  </div> 
  )
}

export default  FormInput