import React, { useEffect, useState } from 'react'
import { API } from './index'
const Quotable = (props) => {
  const [novi, setNovi] = useState([])
  const fetchQuote = async () => {
    const result = await API.get('quotes?tags=famous-quotes')
    setNovi(result.data.results)
  }
  useEffect(() => {
    fetchQuote()
  }, [])
  return (
    <>
      {novi.map((value) => {
        return (
          <>
            <p>{value.content}</p>
            <p>{value.author}</p>
          </>
        )
      })}
    </>
  )
}

export default Quotable
