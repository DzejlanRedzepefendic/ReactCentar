import { useEffect, useState } from 'react'
import { API } from './API'
import './news.css'

function News(props) {
  const [news, setNews] = useState([])
  useEffect(() => {
    API.get('').then((rezultat) => {
      setNews(rezultat.data.articles)
      console.log(news)
    })
  }, [])
  return news.map((value) => {
    return (
      <div className='card'>
        <div className='content'>
          <h4 author={value.author}>{value.author}</h4>
          <p content={value.content}>{value.content}</p>
        </div>
      </div>
    )
  })
}

export default News
