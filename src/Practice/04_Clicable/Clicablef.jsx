import React, { useState } from 'react'

const Clicablef = () => {
  const [count, setCount] = useState(0)
  function onClick(e) {
    console.log(e)
    setCount(count + 1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClick}>clcik me</button>
    </div>
  )
}

export default Clicablef
