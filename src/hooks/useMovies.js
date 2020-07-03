import { useState, useEffect, useCallback } from 'react'

import { Movies } from '../services'

const useMovies = () => {
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isPaginating, setIsPaginating] = useState(false)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const paginate = useCallback(async () => {
    const newPage = page + 1

    if (isPaginating || newPage >= maxPage) {
      return
    }

    setIsPaginating(true)

    setPage(newPage)

    const result = await loadMovies({ page: newPage })

    setMovies([
      ...movies,
      ...result
    ])

    setIsPaginating(false)
  })

  const loadMovies = useCallback(async ({ page: pageToLoad = 1 }) => {
    const { movies, totalPages } = await Movies.getMovies({ page: pageToLoad })
    setMaxPage(totalPages)

    return movies
  })

  const initialLoad = useCallback(async () => {
    setIsLoading(true)
    const result = await loadMovies({ page: 1 })
    setMovies(result)
    setIsLoading(false)
  })

  useEffect(() => {
    initialLoad()
  }, [])

  return {
    movies,
    isLoading,
    isPaginating,
    paginate
  }
}

export default useMovies
