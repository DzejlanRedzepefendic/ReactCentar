import React, { useState } from 'react'
import axios from 'axios'
const SearchNews = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  return (
    <div style={{ margin: '3%', padding: '3%' }}>
      <div style={{ paddingLeft: '40%' }}>
        <input
          style={{ width: '150px', height: '40px', textAlign: 'center' }}
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const get = axios
                .create({
                  baseURL: `https://newsapi.org/v2/everything?q=${search}&apiKey=925113db1d364aa48357898052882a4a`,
                })
                .get('')
                .then((response) => {
                  setResult(response.data.articles)
                  console.log(result)
                })
                .catch((e) => console.log(e))
            }
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'column',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '3%',
        }}
      >
        {result.map((response, index) => {
          return (
            <div style={{ width: '20%', height: '20%' }} key={index}>
              <a href={response.url} target='_blank'>
                <img
                  style={{ width: '250px', height: '200px' }}
                  src={response.urlToImage}
                />
              </a>
              <h4>{response.author}</h4>
              <p>{response.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchNews
