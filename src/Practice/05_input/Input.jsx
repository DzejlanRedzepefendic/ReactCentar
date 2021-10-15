import React, { useState } from 'react'

const Input = () => {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  // const [errorT, setErrorT] = useState('')
  // const [errorE, setErrorE] = useState('')
  const [error, setError] = useState([])
  function promeniText(e) {
    setText(e.target.value)
  }
  function promeniEmail(e) {
    setEmail(e.target.value)
  }

  // function validateOnSubmit() {
  //   if (!text) {
  //     setErrorT('Morate uneti neki tekst')
  //   } else {
  //     if (text.length < 4) setErrorT('Unesite tekst duzi od 4 broja')
  //   }
  //   if (!email) setErrorE('Morate uneti neki email')
  // }

  function validateOnSubmit() {
    let nizErrora = []
    if (!text) {
      nizErrora.push('Morate uneti neki tekst')
    } else {
      if (text.length < 4) nizErrora.push('Unesite tekst duzi od 4 broja')
    }
    if (!email) nizErrora.push('Morate uneti neki email')
    setError(nizErrora)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {error &&
        error.map((val) => {
          return (
            <div>
              <p>{val}</p>
            </div>
          )
        })}
      <div>
        {/* {errorT && <p>{errorT}</p>} */}
        <label htmlFor=''>Name</label>
        <input type='text' onChange={promeniText} value={text} />
        {/* {errorE && <p>{errorE}</p>} */}
        <label htmlFor=''>Email</label>
        <input type='email' onChange={promeniEmail} value={email} />
        <button onClick={validateOnSubmit}>Klikni me</button>
      </div>
    </div>
  )
}

export default Input
