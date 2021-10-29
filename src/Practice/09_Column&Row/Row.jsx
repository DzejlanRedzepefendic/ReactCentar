import React from 'react'

const Row = (props) => {
  const { children, justify, border } = props
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justify ? justify : 'center',
        border: border ? '2px solid black' : '',
      }}
    >
      {children}
    </div>
  )
}

export default Row
