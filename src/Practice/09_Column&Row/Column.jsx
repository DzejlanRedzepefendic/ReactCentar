import React from 'react'

const Column = (props) => {
  const { children, justify, border } = props
  return (
    <div
      style={{
        height: '100%',
        width: '1500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify ? justify : 'center',
        border: border ? '2px solid black' : '',
      }}
    >
      {children}
    </div>
  )
}

export default Column
