import React, { useState } from 'react'
import MovieCard from './MovieCard'

export default function searchMovies() {

    const [query, setQuery] = useState('') 
    const [movies, setMovies] = useState([])

        const searchMovies = async (e) => {
            e.preventDefault() 
     
            const url = `https://api.themoviedb.org/3/search/movie?api_key=683491999697d4c1f35868a1c5d504cf&language=en-US&query=${query}&page=1&include_adult=false`;
            
            try{
                const res = await fetch(url) 
                const data = await res.json()
                setMovies(data.results)
            }catch(err){
                console.log(err)
            }
        }
    
  return (
    <>
        <form className='form' onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className='input' type="text" name="query" 
                placeholder='Enter a Movie'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='button' type='submit'>Search</button>
        </form>
        <div className='card-list'>
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div> 
    </>
  )
}
