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
  getMovie: (id) => {

  },
  mapMovieData: (movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  })
}

export default Movies
