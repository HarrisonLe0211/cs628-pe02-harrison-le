import React, { useState } from 'react';

function MovieList(){
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
        { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
        { title: 'The Dark Night', genre: 'Action', releaseYear: 2008 },
        { title: 'The Matrix', genre: 'Science Fiction', releaseYear: 1999 },
        { title: 'Avengers: Endgame', genre: 'Superhero', releaseYear: 2019 }
    ])

    const [selectedGenre, setSelectedGenre] = useState('All genres')

    const getGenre = () => {
        const allGenre = ['All genres', ...new Set(movies.map(movie => movie.genre))]
        
        return allGenre.map(
            genre => <option key={genre} value={genre}>{genre}</option>
            
        )
    }

    const filterMovie = selectedGenre === 'All genres' ? movies : movies.filter(
        movie => movie.genre === selectedGenre
    )

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value)
    }

    const Click = (title) => {
        alert(`You clicked on ${title}`)
    }

    return(
        <div>
            <select onChange = {handleGenreChange} value = {selectedGenre}>
                {getGenre()}
            </select>
            <div className="movie-list">
                {filterMovie.map(movie => (
                    <div key={movie.title} className="movie-card" onClick={() => Click(movie.title)}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>Released: {movie.releaseYear}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList;