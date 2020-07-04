import axios from 'axios'

import { store } from '../store'

const noPosterImage = 'https://res.cloudinary.com/iredhd/image/upload/v1593894106/ais-digital/no-image.png'
const noTrailerImage = 'https://res.cloudinary.com/iredhd/image/upload/v1593895053/ais-digital/no-trailer-3.png'

const Movies = {
  getMovies: async ({ page = 1, search: query = '' }) => {
    let data

    if (!query) {
      const { data: result } = await axios.get('/movie/now_playing', {
        params: {
          page,
          language: store.getState().Settings.language
        }
      })
      data = result
    } else {
      const { data: result } = await axios.get('/search/movie', {
        params: {
          page,
          query: query,
          language: store.getState().Settings.language
        }
      })
      data = result
    }

    return {
      totalPages: data.total_pages,
      movies: data.results.map(Movies.mapMovieData)
    }
  },
  getMovie: async (id) => {
    const { data: movie } = await axios.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
        language: store.getState().Settings.language
      }
    })

    return Movies.mapMovieData(movie)
  },
  mapMovieData: (movie) => {
    return ({
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      ratingCount: movie.vote_count,
      overview: movie.overview,
      homepage: movie.homepage,
      releaseDate: movie.release_date,
      genres: movie?.genres?.map(genre => genre.name),
      image: movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : noPosterImage,
      trailer: movie?.videos?.results.reduce((previous, current) => {
        if (previous === noTrailerImage && current.type === 'Trailer') {
          return `https://www.youtube.com/embed/${current.key}?controls=1&autoplay=1`
        }

        return previous
      }, noTrailerImage)
    })
  }
}

export default Movies
