import React from 'react'
import './Home.css'
import SearchMovies from './SearchMovies'


export default function Home() {
  return (
    <div className='container'>
      <h1 className='title'>Movie Search</h1>
      <SearchMovies/>
    </div>
  )
}
