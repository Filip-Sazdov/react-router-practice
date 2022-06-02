import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)

  const name = queryParams.get('name')

  return (
    <div>
      <h2>Contact {name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora non deleniti repudiandae, voluptatem consequuntur necessitatibus odit voluptates facilis, minima veniam dolor! Repellendus quas, sequi quos pariatur est optio cumque.</p>
    </div>
  )
}
