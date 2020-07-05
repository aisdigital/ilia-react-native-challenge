import { useState, useEffect, useCallback } from 'react';

import { Movies } from '../services';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaginating, setIsPaginating] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [search, setSearch] = useState('');

  const paginate = useCallback(async () => {
    const newPage = page + 1;

    if (isPaginating || newPage >= maxPage) {
      return;
    }

    setIsPaginating(true);

    setPage(newPage);

    const result = await loadMovies({ page: newPage });

    setMovies([
      ...movies,
      ...result,
    ]);

    setIsPaginating(false);
  });

  const refresh = useCallback(async () => {
    setIsRefreshing(true);

    const newPage = 1;

    setPage(newPage);
    const result = await loadMovies({ page: newPage });

    setMovies(result);
    setIsRefreshing(false);
  });

  const searchMovies = useCallback(async ({ title }) => {
    const newSearch = title;

    const newPage = 1;

    setPage(newPage);
    setSearch(newSearch);

    setIsLoading(true);

    const result = await loadMovies({
      page: newPage,
      search: newSearch,
    });

    setMovies(result);
    setIsLoading(false);
  });

  const loadMovies = useCallback(async ({ page: pageToLoad = 1, search: searchToLoad = search }) => {
    const { movies: newMovies, totalPages } = await Movies.getMovies({
      page: pageToLoad,
      search: searchToLoad,
    });

    setMaxPage(totalPages);

    return newMovies;
  });

  const initialLoad = useCallback(async () => {
    setIsLoading(true);
    const result = await loadMovies({ page: 1 });
    setMovies(result);
    setIsLoading(false);
  });

  useEffect(() => {
    initialLoad();
  }, []);

  return {
    movies,
    isLoading,
    isPaginating,
    paginate,
    searchMovies,
    refresh,
    isRefreshing,
  };
};

export default useMovies;
