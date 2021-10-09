import React, { useEffect, useState } from 'react'
import emojiList from './emojilist'

const Debugging = () => {
  let [emoji, setEmoji] = useState('')
  function tick() {
    const randomEmoji = Math.ceil(Math.random() * emojiList.length)
    setEmoji(emojiList[randomEmoji])
  }
  useEffect(() => {
    let id = setInterval(() => {
      tick()
    }, 1000)
    return () => clearInterval(id)
  })
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '650px' }}>{emoji}</h2>
    </div>
  )
}

export default Debugging
