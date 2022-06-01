import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export default function Article() {
  const { id } = useParams() // useParams() gives us an object of all the params used in the url we set up in the routes in App.js
  const url = `http://localhost:3000/articles/${id}`
  const { data: article, isLoading, error } = useFetch(url)
  const history = useHistory() // this hook gives us an object with methods like .goBack() and .push(), and links we previously visited.

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error, history])

  return (
    <div>
      {isLoading && <div>Loading Data...</div>}
      {error && <div>{error}</div>}


      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
