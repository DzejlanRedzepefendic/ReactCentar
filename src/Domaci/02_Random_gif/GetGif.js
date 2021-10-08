import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './GetGif.css'
const GetGif = () => {
  let [url, setUrl] = useState(
    'https://media1.giphy.com/media/5bdgsd3ChyajOVN0rl/giphy.gif?cid=08d45aebrxgoa2lecvhijibek6zupre2wh4c9b1w5fcnfcbv&rid=giphy.gif&ct=g'
  )
  var options = {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/trending?limit=100',
    params: { api_key: '' },
  }
  const getRandomGif = () => {
    axios
      .request(options)
      .then((response) => {
        let randomNumber = Math.floor(Math.random() * response.data.data.length)
        setUrl(response.data.data[randomNumber].images.original.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    setInterval(() => {
      getRandomGif()
    }, 3000)
    return clearInterval(() => {
      getRandomGif()
    }, 3000)
  })
  return (
    <div className='slika'>
      <img src={url} alt='' />
    </div>
  )
}

export default GetGif
