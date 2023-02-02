import useAsync from "../useAsync";

import * as tmdbApi from "../../services/TMDB-api";

export default function useUpcomingMovie() {
  const {
    data: upcoming,
    loading: upcomingLoading,
    error: upcomingError,
    act: getUpcoming,
  } = useAsync(() => tmdbApi.getUpcomingList(), false);

  return {
    upcoming,
    upcomingLoading,
    upcomingError,
    getUpcoming,
  };
}
