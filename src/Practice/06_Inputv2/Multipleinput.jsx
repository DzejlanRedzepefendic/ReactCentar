import React, { useState } from 'react'

const inputList = [
  { name: 'text1', type: 'text' },
  { name: 'text2', type: 'text' },
  { name: 'text3', type: 'text' },
  { name: 'text4', type: 'text' },
]
const Multipleinput = (props) => {
  const [inputs, setInputs] = useState({})
  function handleChnage(e) {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
    console.log(inputs)
  }
  function validate() {}
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* <input
        type='text'
        value={inputs['text']}
        id='text'
        onChnage={handleChnage}
      />
      <input
        type='text'
        value={inputs['text1']}
        id='text1'
        onChnage={handleChnage}
      />
      <input
        type='text'
        value={inputs['text2']}
        id='text2'
        onChnage={handleChnage}
      />
      <input
        type='text'
        value={inputs['text3']}
        id='text3'
        onChnage={handleChnage}
      /> */}
      {inputList.map((value, index) => {
        return (
          <input
            type={value.type}
            value={inputs[value.name] || ''}
            id={value.name}
            key={index}
            onChange={handleChnage}
          />
        )
      })}
      <button onClick={validate}>button</button>
    </div>
  )
}

export default Multipleinput
