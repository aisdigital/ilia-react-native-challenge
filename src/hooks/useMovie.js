import { useState, useEffect, useCallback } from 'react'

import { Movies } from '../services'

const useMovie = (id) => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadMovie = useCallback(async (id) => {
    setIsLoading(true)

    const result = await Movies.getMovie(id)

    setMovie(result)
    setIsLoading(false)
  })

  useEffect(() => {
    loadMovie(id)
  }, [id])

  return [movie, isLoading]
}

export default useMovie
