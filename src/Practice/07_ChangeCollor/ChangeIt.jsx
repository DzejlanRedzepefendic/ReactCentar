import React, { useState } from 'react'
import './ChangeIt.css'

const ChangeIt = () => {
  const [isDark, setIsDark] = useState(false)

  function onClick() {
    setIsDark(!isDark)
  }

  return (
    <div className={`${isDark ? 'containerDark' : 'container'}`}>
      <p className={`container ${isDark ? 'dark' : ''}`}>Random text</p>
      <button onClick={onClick} className={`container ${isDark ? 'dark' : ''}`}>
        Click
      </button>
    </div>
  )
}
export default ChangeIt
