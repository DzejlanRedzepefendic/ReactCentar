import React, { useState } from 'react'
import './Forme.css'
const Forme = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const [email, setEmail] = useState('')

  const [radio, setRadio] = useState(true)
  const [radio1, setRadio1] = useState(false)
  const [radio2, setRadio2] = useState(false)
  const [radio3, setRadio3] = useState(false)

  const [checkbox, setCheckbox] = useState(false)
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)

  const [errors, setErrors] = useState([])
  function validateForm(event) {
    event.preventDefault()
    let sviErrori = []
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!text1) {
      sviErrori.push('Morate uneti neki tekst u polju text 1')
    }
    if (text1.length > 10) {
      sviErrori.push('ne moze imati vise od 10 Karaktera u polju text 1')
    }
    if (!text2) {
      sviErrori.push('Morate uneti neki tekst u polju text 2')
    }
    if (text2.length > 10) {
      sviErrori.push('ne moze imati vise od 10 Karaktera u polju text 2')
    }
    if (!emailRegex.test(String(email).toLowerCase())) {
      sviErrori.push('Email koji ste uneli nije validan')
    }
    if (!checkbox && !checkbox1 && !checkbox2) {
      sviErrori.push('Morate stiklirati barem jedan checkbox')
    }
    setErrors(sviErrori)
  }
  return (
    <div className='content'>
      <div className='forme'>
        <form>
          <label htmlFor='text1'>Text 1:</label>
          <input
            type='text'
            value={text1}
            onChange={(event) => {
              setText1(event.target.value)
            }}
          />
          <label htmlFor='text2'>Text 2:</label>
          <input
            type='text'
            value={text2}
            onChange={(event) => {
              setText2(event.target.value)
            }}
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <label htmlFor='checkbox'>Checkbox:</label>
          <input
            type='checkbox'
            checked={checkbox}
            onChange={(event) => {
              setCheckbox(event.target.checked)
            }}
          />
          <input
            type='checkbox'
            checked={checkbox1}
            onChange={(event) => {
              setCheckbox1(event.target.checked)
            }}
          />
          <input
            type='checkbox'
            checked={checkbox2}
            onChange={(event) => {
              setCheckbox2(event.target.checked)
            }}
          />
          <label htmlFor='radiobuttons'>Radio buttons:</label>
          <input
            type='radio'
            checked={radio}
            onChange={(event) => {
              if (radio2 || radio1 || radio3) {
                setRadio2(false)
                setRadio1(false)
                setRadio3(false)
              }
              setRadio(event.target.checked)
            }}
          />
          <input
            type='radio'
            checked={radio1}
            onChange={(event) => {
              if (radio || radio2 || radio3) {
                setRadio(false)
                setRadio2(false)
                setRadio3(false)
              }
              setRadio1(event.target.checked)
            }}
          />
          <input
            type='radio'
            checked={radio2}
            onChange={(event) => {
              if (radio || radio1 || radio3) {
                setRadio(false)
                setRadio1(false)
                setRadio3(false)
              }
              setRadio2(event.target.checked)
            }}
          />
          <input
            type='radio'
            checked={radio3}
            onChange={(event) => {
              if (radio || radio1 || radio2) {
                setRadio(false)
                setRadio1(false)
                setRadio2(false)
              }
              setRadio3(event.target.checked)
            }}
          />
          <button onClick={validateForm}>Submit</button>
        </form>
      </div>
      <div className='errori'>
        {errors &&
          errors.map((val) => {
            return <h4>{val}</h4>
          })}
      </div>
    </div>
  )
}

export default Forme
