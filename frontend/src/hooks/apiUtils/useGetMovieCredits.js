import useAsync from "../useAsync";

import * as tmdbApi from "../../services/TMDB-api";

export default function useGetMovieCredits() {
  const {
    data: credits,
    loading: creditsLoading,
    error: creditsError,
    act: getCredits,
  } = useAsync((movieId) => tmdbApi.getmMovieCredits(movieId), false);

  return {
    credits,
    creditsLoading,
    creditsError,
    getCredits,
  };
}
