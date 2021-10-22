import React, { useState } from 'react'
import ChangeMe from './ChangeMe'
import './Shared.css'

const Button = () => {
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
      <ChangeMe isDark={isDark} />
    </div>
  )
}

export default Button
