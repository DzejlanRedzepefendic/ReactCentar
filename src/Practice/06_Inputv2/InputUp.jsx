import React from 'react'

const InputUp = ({ defaultValue, className, onChange, style }) => {
  return (
    <>
      <input
        type='text'
        value={defaultValue}
        onChange={onChange}
        className={className}
        style={style}
      />
    </>
  )
}

export default InputUp
