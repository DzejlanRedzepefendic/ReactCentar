import axios from 'axios'

export const API = axios.create({
  baseURL:
    'https://newsapi.org/v2/everything?q=tesla&from=2021-10-08&sortBy=publishedAt&apiKey=925113db1d364aa48357898052882a4a',
})
