import axios from 'axios'

const Movies = {
  getMovies: async ({ page = 1 }) => {
    const { data } = await axios.get('/movie/now_playing', {
      params: {
        page
      }
    })

    return {
      totalPages: data.total_pages,
      movies: data.results.map(Movies.mapMovieData)
    }
  },
  getMovie: async (id) => {
    const { data: movie } = await axios.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    })

    return Movies.mapMovieData(movie)
  },
  mapMovieData: (movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    ratingCount: movie.vote_count,
    overview: movie.overview,
    homepage: movie.homepage,
    releaseDate: movie.release_date,
    genres: movie?.genres?.map(genre => genre.name),
    image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    trailer: movie?.videos?.results.reduce((previous, current) => {
      if (!previous && current.type === 'Trailer') {
        return `https://www.youtube.com/embed/${current.key}?controls=1&autoplay=1`
      }

      return previous
    }, null)
  })
}

export default Movies
