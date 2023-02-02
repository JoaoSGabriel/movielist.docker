import useAsync from "../useAsync";

import * as tmdbApi from "../../services/TMDB-api";

export default function useGetDetailsMovie() {
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
    act: getDetails,
  } = useAsync((movieId) => tmdbApi.getMovieDetails(movieId), false);

  return {
    details,
    detailsLoading,
    detailsError,
    getDetails,
  };
}
