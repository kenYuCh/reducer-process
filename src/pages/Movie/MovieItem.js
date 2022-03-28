import React from 'react'

function MovieItem({items}) {
  return (
    <>
    <div className="movie-card">
      <img src={items.Poster}/>
      <h4>{items.Title}</h4>
      <span>{items.Year}</span>
      <span>{items.Type}</span>
    </div>
    </>
  )
}

export default MovieItem