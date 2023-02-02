import useAsync from "../useAsync";

import * as tmdbApi from "../../services/TMDB-api";

export default function useRatedMovie() {
  const {
    data: rated,
    loading: ratedLoading,
    error: ratedError,
    act: getRated,
  } = useAsync(() => tmdbApi.getRatedList(), false);

  return {
    rated,
    ratedLoading,
    ratedError,
    getRated,
  };
}
