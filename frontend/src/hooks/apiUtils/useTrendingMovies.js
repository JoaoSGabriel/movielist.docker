import useAsync from "../useAsync";

import * as tmdbApi from "../../services/TMDB-api";

export default function useTrendingMovie() {
  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
    act: getTrending,
  } = useAsync(() => tmdbApi.getTrendingList(), false);

  return {
    trending,
    trendingLoading,
    trendingError,
    getTrending,
  };
}
